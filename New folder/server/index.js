const express =require("express")
const cors =require("cors")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const mongoose =require("mongoose")

dotenv.config()
const {Schema}=mongoose


const userSchema=new Schema({
        img:{type:String,required:true},
        usermessage:{type:String,required:true},
        username:{type:String,required:true},
        userwork:{type:String,required:true}
})

const Users=mongoose.model("users",userSchema) 


const app =express()
app.use(cors())
app.use(bodyParser.json())



/* admin */
app.get("/",(req,res)=>{
    res.send("<h1>Admin</h1>")
})

/* all users */
app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})


/* add post */
app.post("/users",(req,res)=>{
    const users=new Users({
        img:req.body.img,
        usermessage:req.body.usermessage,
        username:req.body.username,
        userwork:req.body.userwork,
    })
    users.save()
    res.status(200).json({message:"Created"})
})

/* byid */
app.get("/users/:id",(req,res)=>{
    const {id}=req.params
    Users.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }else{
                res.status(404).json({message:"Not Found"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
    })
})


/* delete */
app.delete("/users/:id",(req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.status(200).json({message:"Delete"})
        }
        else{
            res.status(404).json({message:"Not Found"})
        }
    })
})




const PORT =process.env.PORT
const url =process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
mongoose.set("strictQuery",true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connect");
        app.listen(PORT,()=>{
            console.log("Server Start");
        })
    }else{
        console.log(err);
    }
})