const express = require('express')
const dotenv = require('dotenv')

// Load env vars
dotenv.config({path:"./config/config.env"})

const app = express()

// res.status(400).send({success:false} )
// send for the html and the json for the json and the sendStatus for sending the status and status with attached .json with an object that includes success false
app.get('/api/v1/bootcamps', (req, res)=>{
    res.status(200).send({success:true, message:"Show all bootcamps" } )
})

app.get('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).send({success:true, message:`Get bootcamp ${req.params.id}` } )
})


app.post('/api/v1/bootcamps', (req, res)=>{
    res.status(200).send({success:true, message:"Create all bootcamps" } )
})

app.put('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).send({success:true, message:`Update bootcamp ${req.params.id}` } )
})

app.delete('/api/v1/bootcamps/:id', (req, res)=>{
    res.status(200).send({success:true, message:`Delete bootcamp ${req.params.id}` } )
})

const PORT = process.env.PORT

app.listen(PORT, ()=>console.log(`Server is running in ${process.env.NODE_ENV} mod on port ${PORT}`) )