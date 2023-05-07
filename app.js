const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const giftRouter = require('./routes/giftRoute');
app.use(bodyParser.json());

app.use('/api', giftRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
