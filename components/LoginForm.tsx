import React from 'react';
import useUpdateForm from '../hooks/useUpdateForm';

const LoginForm = () => {
  const [updateForm, formData] = useUpdateForm();
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form action='' onSubmit={handleForm}>
      <input
        type='email'
        name='email'
        placeholder='email'
        required
        onChange={updateForm}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        required
        onChange={updateForm}
      />
      <input type='submit' value='Login' />
    </form>
  );
};

export default LoginForm;
