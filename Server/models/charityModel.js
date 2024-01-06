const mongoose = require('mongoose');

const charitiesSchema = new mongoose.Schema({
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
  serial_number: {
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
  active: {
    type: Boolean,
    default: false,
  },
});

const Charity = mongoose.model('Charity', charitiesSchema);

module.exports = Charity;
