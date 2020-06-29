const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// TODO: Add Schemas As needed
let userSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
}, {
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema)