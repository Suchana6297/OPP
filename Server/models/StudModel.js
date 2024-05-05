// server/models/StudentModel.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  university: String,
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
