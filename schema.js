const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    equired: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    default: ['user']
  },
  profile: {
    firstName: String,
    lastName: String,
    age: Number
  },
  lastLogin: {
    type: Date
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;