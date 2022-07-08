import useUpdateForm from '../hooks/useUpdateForm';

const SignupForm = () => {
  const [updateForm, formData] = useUpdateForm();
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
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
          onChange={updateForm}
        />
        <input
          type='password'
          name='password2'
          placeholder='Confirm Password'
          required
          onChange={updateForm}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default SignupForm;