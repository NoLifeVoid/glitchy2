const express = require('express')
const app = express()
const port = 3000
import cors from 'cors'
import { Request, Response } from 'express'
import helmet from 'helmet'

app.use(cors())
app.use(helmet())
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({"message":'🌍 Hello World!'})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})