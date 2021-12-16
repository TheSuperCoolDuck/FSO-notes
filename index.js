const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT,() => {
  logger.info(`Server running on port ${config.PORT}`)
})

// require('dotenv').config()
// const Note = require('./models/note')
// const express = require('express')
// const cors = require('cors')
// const app = express()

// app.use(express.static('build'))
// app.use(express.json())
// app.use(cors())



// const unknownEndpoint=(request, response) => {
//   response.status(404).send({ error:'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const errorHandler=(error, request, response, next) => {
//   console.error(error.message)

//   if(error.name === 'CastError'){
//     return response.status(400).send({ error:'malformatted id' })
//   } else if(error.name==='ValidationError'){
//     return response.status(400).send({ error:error.message })
//   }

//   next(error)
// }

// app.use(errorHandler)

// const PORT = process.env.PORT
// app.listen(PORT, () => {
//   console.log(`Server running port ${PORT}`)
// })
