const express = require('express')
const connectDB = require('./db/connect');
var cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const todosRouter = require('./routes/todos')

// middleware

app.use(cors())
app.use(express.static('./public'));
app.use(express.json());

//app.use(function(req,res,next){setTimeout(next,1000)}); // intentional latency

// routes

app.use('/todos', todosRouter);

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
start();