import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Maincontext from '../../Context/Context';
import axios from 'axios';
function AddNews() {
    const { product, setProduct, data, setData,search,setSearch } = useContext(Maincontext)

    const formik = useFormik({
        initialValues: {
          image: '',
          desc: '',
          name: '',
          categories:"Xeberler",
          date:''
        },
        validationSchema: Yup.object({
            image: Yup.string()
            .required('Required'),
            date: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        }),
        onSubmit: async values => {
            await axios.post("http://localhost:4007/xeberler/", values).then(res => {
                setProduct([...product, res.data])
                setData([...data, res.data])
                setSearch([...search,res.data])
              })
              formik.resetForm()
        },
      });
  return (
    <div style={{marginTop:"30px"}}>
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
      
 
       <label htmlFor="desc">Şərh</label>
       <input
         id="desc"
         name="desc"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.desc}
       />
       {formik.touched.desc && formik.errors.desc ? (
         <div>{formik.errors.desc}</div>
       ) : null}
 
       <label htmlFor="categories">Categories</label>
       <input
         id="categories"
         name="categories"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.categories}
       />

<label htmlFor="date">Date</label>
       <input
         id="date"
         name="date"
         type="Number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.date}
       />
       {formik.touched.date && formik.errors.date ? (
         <div>{formik.errors.date}</div>
       ) : null}

<label htmlFor="image">İmage</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
     
 
       <button type="submit">Submit</button>
     </form>
      
    </div>
  )
}

export default AddNews
