const express = require('express');

const port = 3000;

const app = express();

const db = require('./config/database');

const index = require('./routes/index');

const cliente = require('./routes/cliente');

const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}));


app.use(bodyParser.json());

app.set("json spaces",4);

app.use('/',index);
app.use('/cliente',cliente);


app.listen(port,()=>console.log("positivo e operante na porta: " + port));

db.authenticate().then(() => console.log('Database subiu!')).catch(err => console.log('Error T.T :' + err));

