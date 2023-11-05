const path=require('path')
const express=require('express')
const cors=require('cors')
const morgan =require('morgan')

const planetsRouter=require('./routes/planets/planetsRouter')
const launchesRouter=require('./routes/launches/launchesRouter')

const app=express()
app.use( express.json())
app.use(express.static(path.join(__dirname,'..','pubic')))
app.use('/planets',planetsRouter)
app.use('/launches',launchesRouter)
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})
app.use(cors({
    origin:'http://localhost:3000',
}))
app.use(morgan('combined'))

app.post('./users',(req,res)=>{
    const {password}=req.body
    if(!password){
        res.statusCode(400)
        return
    }
    res.send({userId:0})
})

module.exports=app