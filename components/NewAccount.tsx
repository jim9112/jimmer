import useUpdateForm from '../hooks/useUpdateForm';

const NewAccount = () => {
  const [updateForm, formData] = useUpdateForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>New Account</h2>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={updateForm}
        />
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={updateForm}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={updateForm}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default NewAccount;
