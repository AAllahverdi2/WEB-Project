import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useUser } from '../../Context/userContext';

const Order = () => {
  const { User, basket, DecreaseBtn, increaseBtn, removeFromBasket } = useUser()

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      city: '',
      email: '',
      status: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      mobile: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      status: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      await axios.post("http://localhost:4007/order",{ ...values, items: User.basket }).then(res => {
console.log(res)
      })
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile ? (
          <div>{formik.errors.mobile}</div>
        ) : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="status">status</label>
        <input
          id="status"
          name="status"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
        />
        {formik.touched.status && formik.errors.status ? (
          <div>{formik.errors.status}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Order
