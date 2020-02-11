const mongoose = require('mongoose')

const { Schema } = mongoose

const requiredString = {
  type: String,
  require: true
}

const requiredNumber = {
  type: Number,
  require: true
}

const LogEntrySchema = new Schema({
  title: requiredString,
  description: String,
  comments: String,
  latitude: requiredNumber,
  longitude: requiredNumber,
  dateVisited: requiredString,
  images: [String]
}, {
  timestamps: true
})

const LogEntryModel = mongoose.model('LogEntry', LogEntrySchema)

module.exports = LogEntryModel
