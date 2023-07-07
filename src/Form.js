import React from "react";
import { Formik,Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

function Forms() {

    const validationSchema = yup.object({
        name:yup.string().required("Name is required"),
        email:yup.string().email("Enter Valid Email Id").required("Email is required"),
        password:yup.string().required("Password is required"),
    })

    const handleSubmit = (e,{resetForm}) =>{
        alert('Are you sure want to submit');
        alert(JSON.stringify(e));
        
        console.log(JSON.stringify(e));
        console.log("Name - ",e.name);
        console.log("Email - ",e.email);
        console.log("Password - ",e.password);
    }
    
    return (
        <><h5>Get In Touch</h5>
        <Formik validationSchema={validationSchema} onSubmit={handleSubmit} initialValues={{name:"",email:"",password:""}}>
            <Form>
                <div className="text-start text-start mb-3">
                    <Field type="text" name='name' className="form-control" id="InputName" placeholder="Enter Name"/>                    
                    <ErrorMessage name='name'/>
                </div>
                
                <div className="text-start mb-3">
                    <Field type="email" name='email' className="form-control" id="InputEmail" placeholder="Enter Email"/>                    
                    <ErrorMessage name='email'/>
                </div>
                <div className="text-start mb-3">
                    <Field type="password" name='password' className="form-control" id="inputPassword5" placeholder="Enter Password" aria-labelledby="passwordHelpBlock"></Field>
                    <ErrorMessage name='password'/>
                </div>
                <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-info">Submit &rarr;</button>
                </div>
            </Form>
        </Formik> 

        <div className="">
            {JSON.stringify()}
        </div>
        </>
    );
}

export default Forms;