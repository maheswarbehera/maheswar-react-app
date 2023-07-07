import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const handleOnChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit = async() =>{
    console.log(formData);
    try{
      const user = signInWithEmailAndPassword(auth, formData.email, formData.password);

      navigate('/');
    }catch(e){

    }
  }

  return (
    <div className='w-50 mx-auto'>
      <h1>Login</h1>
      <form  className="text-start" onSubmit={(e)=>e.preventDefault()}>
            
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={formData.email} onChange={handleOnChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleOnChange}/>
            </div>
              <button onClick={handleSubmit} className="btn btn-primary w-100">Submit &rarr;</button>
            
              <Link className="nav-link active text-info text-decoration-underline text-center pt-3 fs-5" aria-current="page" to="/register">Don't have account, Please Register &rarr;</Link>
        </form>
    </div>
  );
}

export default Login;
