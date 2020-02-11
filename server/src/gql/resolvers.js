const LogEntry = require('../db/LogEntry')

const queries = {
  getAllEntries: async () => await LogEntry.find(),
  getEntryById: async (id) => await LogEntry.findOne({ id })
}

const mutations = {
  createLogEntry: async (_, { input }) => {
    console.log(input)
    const newEntry = new LogEntry(input)
    const savedEntry = await newEntry.save()
    return savedEntry
  }
}

module.exports = {
  Query: queries,
  Mutation: mutations
}
