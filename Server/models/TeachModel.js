// server/models/TeacherModel.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
