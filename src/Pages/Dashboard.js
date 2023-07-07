import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../Config/Firebase';
import { Link, useNavigate } from 'react-router-dom';
import Contact from '../Components/Contact';
import Skill from '../Components/Skill';
import About from '../Components/About';
import Home from '../Components/Home';

function Dashboard() {
  const [mount,setMount] = useState(true);
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout =async()=>{
    await signOut(auth);
    navigate('/login')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        setUser(user);
        setMount(false);
      } else {
        // User is signed out
        navigate('/login');
      }
    });
  },[navigate]);

  if(mount){
    return <div>Loading...</div>
  }

  return (
    <>
    <div className='pb-5 pt-4'>
      <h1>Hello ! {user && user.displayName} </h1>
    </div>
    <div className='w-25 mx-auto p-2 d-flex justify-content-between'>
      <Link className='btn btn-primary' to="/product">Browse Products &rarr;</Link>
      <button className="btn btn-info" onClick={handleLogout}>Logout &rarr;</button>
    </div>
    <Home/>
    <About/>
    <Skill/>
    <Contact/>
    </>
  );
}

export default Dashboard;

