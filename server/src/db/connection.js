const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
const { DB_URI } = process.env

mongoose.set('bufferCommands', false)
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.error(error))
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`)
  // eslint-disable-next-line no-undef
  process.exit(-1)
})
