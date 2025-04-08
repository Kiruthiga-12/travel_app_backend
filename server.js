const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('connected to url');
})

app.listen(8080,()=>console.log('connected'));
