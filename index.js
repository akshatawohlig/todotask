const express=require('express');
const fs=require('fs')
const app=express();
const hbs=require('hbs');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","hbs")
app.get("",(req,res)=>{
    res.render("index")
})
app.post("",(req,res)=>{
    
    const myjson=JSON.stringify(req.body)
    let pre1=fs.readFileSync('input.json',"utf-8")
    console.log(pre1)
    pre=pre1.slice(0,-1);
    console.log(pre)
    pre=pre+myjson
    console.log(pre)
    fs.writeFileSync("input.json",pre)
    console.log(myjson)

    let tasks=pre
    console.log('send',tasks)
    res.render("index",{tasks})
})
app.listen(5000,()=>{
    console.log("Listen to the port number 5000")
})
