const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=2000

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://LakshmiJalakam:GgLl1319@cluster0.luyctpy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
	console.log("Connection establishment")
})
.catch((err)=>{
	console.log(err)
})
app.get("/",(req,res)=>{
	res.send("dummy root route")
})
app.post("/register",(req,res)=>{
	//const {email,password}=req.body;
	const email="user1@gmail.com",passcode="1234"
	const newFrontendUser=new Register({
		username:email,
		password:passcode,
	})
	newFrontendUser.save()
})

app.listen(port,()=>console.log("Server is running on port",port))