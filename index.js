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
    console.log(myjson)
    let pre=fs.readFileSync('input.json',"utf-8")
    pre=pre.slice(0,-1);
    console.log(pre)
    pre=pre+','+myjson+']'
    console.log(pre)
    fs.writeFileSync("input.json",pre)
    console.log(myjson)
    let tasks=fs.readFileSync('input.json',"utf-8")
    tasks = JSON.parse(tasks)
    const all =()=>{
        arr=[]
        for(i in tasks){
            arr.push(tasks[i].task)
        }
        return arr
    }
    const detail = all()
    res.render("tasks",{detail})
})
app.listen(8000,()=>{
    console.log("Listen to the port number 8000")
})


