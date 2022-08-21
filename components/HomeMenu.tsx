import { signOut } from 'firebase/auth';
import { auth } from '../firebaseIndex';

const HomeMenu = () => {
  // log out user
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <nav>
        <ul className='flex flex-col'>
          <li>Home</li>
          <li>Profile</li>
          <li>
            <button type='button' onClick={logOut}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeMenu;
