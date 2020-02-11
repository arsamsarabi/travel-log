const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type LogEntry {
    id: ID!
    title: String!
    description: String
    comments: String
    latitude: Float!
    longitude: Float!
    dateVisited: String!
    images: [String]
  }

  input NewLogEntry {
    title: String!
    description: String
    comments: String
    latitude: Float!
    longitude: Float!
    dateVisited: String!
    images: [String]
  }

  type Query {
    getAllEntries: [LogEntry]!
    getEntryById(id: String!): LogEntry!
  }

  type Mutation {
    createLogEntry(input: NewLogEntry): LogEntry!
  }
`

module.exports = typeDefs
