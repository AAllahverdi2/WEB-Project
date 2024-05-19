// import React from 'react'

// const Register = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Register

import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./Girirs.scss"
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const Register = () => {
  const navigate=useNavigate()
  async function RegisterPost(values) {
    try {
      const response = await axios.post("http://localhost:4007/user/register", values)

      const data = response.data

      console.log(data);
      toast.success("created account")
      navigate("/Giris");
    } catch (error) {
      console.log(error);
    }
    
  }

    return (
        <div className='giris__all'>
            <div><h1><b>Register</b></h1></div>
            <Formik
                initialValues={{ username: '', password: ''}}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(30, 'Must be 30 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    RegisterPost(values)
                }}
            >
               <div>
              
               <Form className='form'>
                    <label htmlFor="username">username</label>
                    <Field name="username" type="email" />
                    <ErrorMessage name="username" />

                    <label htmlFor="password">password</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" />

                    <button type="submit">Daxil Olun</button>
                </Form>
               </div>
            </Formik>

<Toaster/>
        </div>
    )
}

export default Register
