import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
// Firebase Imports
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebaseIndex';
import { useRouter } from 'next/router';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
// Component Imports
import NewAccount from '../components/NewAccount';
import HomeMenu from '../components/HomeMenu';

const Home: NextPage = () => {
  const [showAccount, setShowAcount] = useState(false);
  const [currentUid, setCurrentUid] = useState('');

  // check if user profile exists
  const getUserData = async (uid: string) => {
    var docRef = doc(db, 'users', uid);
    var userDoc = await getDoc(docRef);
    if (userDoc.exists()) {
      console.log('the record exsists');
    } else {
      console.log('the record does not exsist');
      setShowAcount(true);
    }
  };

  const router = useRouter();
  // check if user is logged in
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // user is signed in
      const uid = user.uid;
      setCurrentUid(user.uid);
      getUserData(uid);
    } else {
      // User is signed out
      router.push('/login');
    }
  });

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-slate-800 text-white min-h-screen flex'>
        <HomeMenu />
        <div>
          <h1>Feed</h1>
        </div>
        {showAccount && <NewAccount uid={currentUid} />}
      </main>
    </div>
  );
};

export default Home;
