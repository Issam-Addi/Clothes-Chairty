const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    maxlength: 10,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    maxlength: 50,
  },
  is_delete: {
    type: Boolean,
    default: false,
  },
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
