const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que no haya emails duplicados
  },
});

const Email = mongoose.model('Email', emailSchema);
module.exports = Email;
