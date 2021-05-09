const mongoose = require("mongoose");

const Schema = require("Schema");

new TaskSchema = new Schema({
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('tasks', TaskSchema)

