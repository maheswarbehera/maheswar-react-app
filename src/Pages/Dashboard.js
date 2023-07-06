import React, { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import { auth } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Hello ! {user && user.displayName} </h1>
      <button className="btn btn-info" onClick={handleLogout}>Logout</button>
    </div></>

  );
}

export default Dashboard;

