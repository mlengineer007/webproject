const express = require('express');
const path = require('path')
const app = express();

app.use('/public',express.static('public'));




app.get('/',function(req,res){
      res.sendFile(path.join(__dirname,'/quizhome.html'));
});

app.get('/quiz.html',function(req,res){
         res.sendFile(path.join(__dirname,'/quiz.html'));
       });
  
app.get('/questions.html',function(req,res){
         res.sendFile(path.join(__dirname,'/questions.html'));
       });
  
app.get('/quizhome.html',function(req,res){
         res.sendFile(path.join(__dirname,'/quizhome.html'));
       });
app.get('/webpageintro.html',function(req,res){
         res.sendFile(path.join(__dirname,'/webpageintro.html'));
       });
  
   


app.listen(8000);
