require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const CheeseRouter = require('./controllers/cheeseController')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/cheese', CheeseRouter)

app.get('/', (req, res) => {
  res.send('get out')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
