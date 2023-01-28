import React from 'react'
import './Homemap.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MDBBtn } from 'mdb-react-ui-kit';
function Homemap() {
  return (
    <div className='homemap'>
        <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4712971.718565861!2d51.00016472353707!3d35.3440537051485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2sBaku%20State%20University!5e0!3m2!1sen!2s!4v1674916288894!5m2!1sen!2s" width={300} height={400}></iframe></div>
        <div className='formmap'>
        <Formik
       initialValues={{ firstName: '', Message: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
         
           .required('Required'),
           Message: Yup.string()

           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form className='mapform'>
   
         <Field name="firstName" type="text"placeholder='Enter your name ' />
         <ErrorMessage name="firstName" />
 

 
  
         <Field name="email" type="email" placeholder='Enter email address'/>
         <ErrorMessage name="email" />
 
         <Field name="Message" type="text" placeholder='Message' className="mapmessage"/>
         <ErrorMessage name="Message"/>
         <MDBBtn className='me-1' color='danger' type='submit'>
         Send Message 
      </MDBBtn>

       </Form>
     </Formik>
        </div>
    </div>
  )
}

export default Homemap