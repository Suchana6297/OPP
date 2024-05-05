import React, { useState } from 'react'

const StudRegForm = ({ onSubmit }) => {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [university, setUniversity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password, university });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        University Name:
        <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default StudRegForm;