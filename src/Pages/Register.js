import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });

  const handleOnChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit = async() =>{
   
    try{
      const user  = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        console.log("user",user);
      await updateProfile(auth.currentUser,{
        displayName:formData.name

      })
      console.log("done",user);
      navigate('/');
    }catch(e){
          console.log("err",e.message);
    }
  }

  return (
    <div className='w-50 mx-auto'>
      <h1>Register</h1>
      <form className="text-start" onSubmit={(e)=>e.preventDefault()}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={formData.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleOnChange}/>
            </div>
            
            <button onClick={handleSubmit} className="btn btn-primary w-100">Submit &rarr;</button>
            <Link className="nav-link active text-info text-decoration-underline text-center pt-3 fs-5" aria-current="page" to="/login">Already have account, Please Login &rarr;</Link>
        </form>
    </div>
  );
}

export default Register;
