import React, { useReducer, useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({});
  const updateForm = (e: React.FormEvent) => {
    const result = e.target as HTMLInputElement;
    setFormData({ ...formData, [result.name]: result.value });
  };
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <main>
      <h1>Happening now</h1>
      <h3>Join Jimmer</h3>
      <form action='' onSubmit={formSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required
          onChange={updateForm}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          onSubmit={formSubmit}
        />
        <input
          type='password'
          name='password2'
          placeholder='Confirm Password'
          required
          onSubmit={formSubmit}
        />
        <input type='submit' value='Submit' />
      </form>
    </main>
  );
};

export default Login;
