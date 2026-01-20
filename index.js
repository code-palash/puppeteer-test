import express from 'express'
import { scrap } from './puppetter.js'
const app= express()
app.use(express.json())

app.get('/scrap',scrap)

app.listen(4500,()=>{
    console.log('server started listening port 4500')
})