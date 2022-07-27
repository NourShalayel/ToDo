const { json, application } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("./config");

const app = express()


app.get('/' , (req , res)=>{
   res.send("hello")
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/test', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
  res.send('hello')
});

// app.listen(3000 , (req ,res)=>{
//   console.log('server in port 3000.....')

// })
module.exports = router


// const http = require('http');
// const port = 3000;
// const hostname = 'localhost';
// const server = http.createServer((req,res)=>{
// 	res.statusCode=200;
// 	// res.setHeader('Content-Type', 'text/plain')
// });


// server.listen(port,hostname,()=>{
// 	console.log(`Server running at http://${hostname}:${port}/`);
// });



// var order = require('./task')
// const opeartion = require('./dbopeartion')
// const { result } = require('lodash')

// var express = require('express')
// // var parser = require('body-parser')
// // var cors = require('cors')
// const { request, response } = require('express')
// var app = express()

// var router = express.Router()
// opeartion.getDB().then(result =>{
//   console.log(result);
// })

// app.use((request , response , next)=>{
//   console.log('moddlerware')
//   next()
// })

// router.route('/tasks').get((request , response)=>{
//   response.json(result[0])
// })

// router.route('/').get((request , response)=>{
//   response.json(result[0])
// })

// var port = process.env.port || 8090 ;
// app.listen(port)
// console.log("server in port" + port)

