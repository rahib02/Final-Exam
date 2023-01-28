import React from 'react'
import "./Add.css"
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import { MDBBtn } from 'mdb-react-ui-kit';
 import axios from 'axios'
 import {Helmet} from "react-helmet";
function Add() {
   
  return (
    <div className='Add'>
        <Helmet>
        <title>Add</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
       <Formik 
       initialValues={{ img: '', usermessage: '', username: '',userwork: '' }}
       validationSchema={Yup.object({
        img: Yup.string()
           .required('Required'),
           usermessage: Yup.string()
           .required('Required'),
           username: Yup.string()
           .required('Required'),
           userwork: Yup.string()
           .required('Required'),
        
       })}
       onSubmit={values=> {
        axios.post("http://localhost:5000/users",values)
       }}
     >
       <Form className='form'>

         <Field name="img" type="text" placeholder='img url' />
         <ErrorMessage name="img" />

         <Field name="usermessage" type="text" placeholder='usermessage' />
         <ErrorMessage name="usermessage" />

         <Field name="username" type="text" placeholder='username' />
         <ErrorMessage name="username" />

         <Field name="userwork" type="text" placeholder='userwork' />
         <ErrorMessage name="userwork" />
 


 
         <MDBBtn className='me-1' color='success' type='submit' className="addbtn">
       Add
      </MDBBtn>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
