const express = require('express');
const app = express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const {Username,Email,Password,DOB} = req.body;
    if(!Username){
        return res.status(400).json({message:"Username cannot be empty"})
    }
    if(!Email){
        return res.status(400).json({message:"Email cannot be empty"})
    }
    if(!Password){
        return res.status(400).json({message:"Password cannot be empty"})
    }
    if(Password.length<8 || Password.length>16){
        return res.status(400).json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }
    return res.status(201).json({message:"User signed up successfully!"})
})

app.listen(3000,()=>{
    console.log("Running")
})