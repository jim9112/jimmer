import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import NewAccount from '../components/NewAccount';
import { useState } from 'react';

const Login = () => {
  const [displayMode, setDisplayMode] = useState<
    'signUp' | 'signIn' | 'accountDetails'
  >('signUp');

  return (
    <main>
      <h1>Happening now</h1>
      {displayMode === 'signUp' && (
        <SignupForm setDisplayMode={setDisplayMode} />
      )}
      {displayMode === 'signIn' && (
        <LoginForm setDisplayMode={setDisplayMode} />
      )}
      {displayMode === 'accountDetails' && <NewAccount />}
    </main>
  );
};

export default Login;
