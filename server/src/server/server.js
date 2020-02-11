const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const typeDefs = require('../gql/typeDefs')
const resolvers = require('../gql/resolvers')
const { notFound, errorHandler } = require('./middleware')

// eslint-disable-next-line no-undef
const { PORT } = process.env

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    Hello: '👋🏻 World! 🌍',
  })
})

server.applyMiddleware({ app })

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Travel Log server is running on http://localhost:${PORT}`)
})
