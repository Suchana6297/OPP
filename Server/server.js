// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Student = require('./models/StudModel');
const Teacher = require('./models/TeachModel');
// const StudentScore = require('./models/StudentScore');

const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/myopp', { useNewUrlParser: true, useUnifiedTopology: true });

// Fetch user data by email (GET endpoint)
app.get('/user/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const student = await Student.findOne({ email });
    const teacher = await Teacher.findOne({ email });

    if (student) {
      res.status(200).json({ role: 'student', user: student });
    } else if (teacher) {
      res.status(200).json({ role: 'teacher', user: teacher });
    } else {
      res.status(404).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error('Fetch user data error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});



// Registration endpoint
app.post('/register', async (req, res) => {
  const { name, email, password, university, role } = req.body;

  try {
    // Check if the email is already registered
    const isEmailTaken = await (role === 'student' ? Student : Teacher).exists({ email });

    if (isEmailTaken) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

   // Generate salt and hash password
   const salt = await bcrypt.genSalt(10); // 10 is the number of salt rounds
   const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await (role === 'student'
      ? Student.create({ name, email, password: hashedPassword, university })
      : Teacher.create({ name, email, password: hashedPassword }));

    res.status(201).json({ message: 'Registration successful.', user: newUser });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await (role === 'student'
      ? Student.findOne({ email })
      : Teacher.findOne({ email }));

      console.log(user);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    //compare
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);

    if(isPasswordValid){
      res.status(200).json({message: "Login Successful.", user});
    }else{
      res.status(401).json({message: 'Invalid credentrals.'});
    }

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// app.get('/student-scores', async (req, res) => {
//   try {
//     const scores = await StudentScore.find();
//     res.status(200).json(scores);
//   } catch (error) {
//     console.error('Error fetching student scores:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.post('/execute-code', async (req, res) => {
//   const { language, code } = req.body;

//   try {
//     const response = await fetch('https://emkc.org/api/v1/piston/execute', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ language, version: '*', files: [{ content: code }] }),
//     });
//     const data = await response.json();
//     // Process the response data
//     console.log(data);
//     // Return the output
//     res.json({ output: data.run.output });
//   } catch (error) {
//     console.error('Error executing code:', error);
//     // Return an error message
//     res.status(500).json({ error: 'An error occurred while executing the code.' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


