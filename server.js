const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);


app.locals.title = 'Whitneys Birthday';
app.locals.count = [
  { amount: 1, time: Date.now(), id: 666 },
];

app.get('/', (request, response) => {
  const count = app.locals.count;

  response.json({ count });
});

app.get('/count', (request, response) => {
  const count = app.locals.count;

  response.json({ count });
});

app.patch(`/count/:id`, (req, res) => { 
  const oldCount = app.locals.count.find(val => val.id === Number(req.params.id));
  oldCount.amount = req.body.amount;
  oldCount.time = Date.now();
  return res.json({ message: "Updated" });
});

app.post('/count', (request, response) => {
  const id = Date.now();
  const newCount = request.body;

  for (let requiredParameter of ['amount', 'time']) {
    if (!newCount[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  const { amount, time } = newCount;
  app.locals.count.push({ amount, time, id });
  response.status(201).json({ amount, time, id });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});