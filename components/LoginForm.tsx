import React from 'react';
import useUpdateForm from '../hooks/useUpdateForm';
import { auth } from '../firebaseIndex';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

interface IProps {
  setDisplayMode: any;
}

const LoginForm = ({ setDisplayMode }: IProps) => {
  const router = useRouter();
  const [updateForm, formData] = useUpdateForm();
  // form submit
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // go to feed after login
        router.push('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    console.log(formData);
  };
  return (
    <div>
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
      <h5>
        Need an Account?{' '}
        <span onClick={() => setDisplayMode('signUp')}>Click Here</span>{' '}
      </h5>
    </div>
  );
};

export default LoginForm;
