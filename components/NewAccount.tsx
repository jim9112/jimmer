import useUpdateForm from '../hooks/useUpdateForm';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebaseIndex';

interface IProps {
  uid: string;
}

const NewAccount = ({ uid }: IProps) => {
  const [updateForm, formData] = useUpdateForm();

  // Write user info to the database
  const buildUserProfile = async () => {
    await setDoc(doc(db, 'users', uid), {
      userName: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
    });
  };

  // handle the form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    buildUserProfile();
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
