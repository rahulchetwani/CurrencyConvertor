var client=require('node-rest-client').Client;
var express = require('express');
var bodyParser=require('body-parser');
var app=express();
var restClient=new client();
var curencyConvertorFactor="";
var port=process.env.PORT || 3004;
//var url=
app.get('/ConvertdollartoRupees',function(req,res)
{
    console.log("Dollor ="+req.query.dollor);
    res.send("Hello "+ req.query.name);
    


   
});





app.listen(port);