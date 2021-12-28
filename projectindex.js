


const express =require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const app=express()
const employeeModel=require('./models/projecttask')
mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true} )
app.use(express.json())
app.use(cors())
app.post("/insert",async(req,res)=>{
    const tmember=req.body.tmember
    const module=req.body.module
    const task=req.body.task
    console.log(req.body.tmember)
    console.log(req.body.module)
    console.log(req.body.task)
    const emp=new employeeModel({tmember:tmember,module:module,task:task})
    try{
         await emp.save()
           res.send("record inserted")
             console.log('record inserted')
        }
        catch(err){
            console.log(err)

    }

})

app.listen(3001,()=>{console.log('connect to http://localhost:3001/')})
app.post('/findByName', async (req,res)=>{
     const  tmember=req.body.tmember
     employeeModel.findOne({tmember:tmember},(err,result)=>{ if(err) console.log('error in searching');
     console.log(result.tmember,' ',result.module,' ',result.task);
      res.send(result)
    })
})

app.get("/show", async(req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(err){
             res.send("Record failed to Load")

        }

        res.send(result)
        console.log(result)

    })

})


app.post("/delRec",async(req,res)=>{
    var myquery={tmember:req.body.tmember};
    console.log(req.body.tmember)
    await employeeModel.deleteOne(myquery).then(function(){
        console.log("data deleted")
    }).catch(function(error){
        console.log(error)
});
});

app.post("/update",async(req,res)=>{
    const tmember=req.body.tmember
    const module=req.body.module
    const task=req.body.task
    const emp=new  employeeModel({tmember:tmember,module:module,task:task})

try{
    await employeeModel.findOneAndUpdate({"tmember":req.body.tmember},
    {"$set" : {"tmember":req.body.tmember,"module":req.body.module,"task":req.body.task}},{new:true}).exec((err,employee)=>{

        if(err) console.log(err)
        else    
    //res.status(200).send(employee)
    console.log({"tmember":req.body.tmember,"module":req.body.module,"task":req.body.task})

    })

       }
       catch(err){
        console.log(err)

    }

})