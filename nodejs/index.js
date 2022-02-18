require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(() => morgan('tiny'));
app.use(() => cors());

app.listen(process.env.PORT, () => {
  console.log('Process running on 3000:' + process.env.PORT);
}); 