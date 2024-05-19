// import React from 'react'
import { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Maincontext from '../../Context/Context';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const ModaAdd = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { product, setProduct } = useContext(Maincontext)
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      categories: '',
      material: '',
      raiting: '',
      firstPrice: '',
      endirim: '',
      image: '',
      duration: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      price: Yup.string()
        .max(10, 'Must be 20 characters or less')
        .required('Required'),
      categories: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      material: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      raiting: Yup.string()
        .max(5, 'Must be 5 characters or less')
        .required('Required'),
      firstPrice: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      endirim: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      image: Yup.string()
        .max(),
      duration: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),


    }),
    onSubmit: values => {
      axios.post("http://localhost:4007/alinino/", values).then(res => {
        setProduct([...product, res.data])
      })
    },
  });

  return (
    <div className='container modalScss' >

      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="modalFormInside">
              <label htmlFor="name">Yas</label>
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
            </div>
          </div>

          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="price">Price</label>
            <input
              id="price"
              name="price"
              type="Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <div>{formik.errors.price}</div>
            ) : null}
            </div>
           
          </div>

          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="categories">Categories</label>
            <input
              id="categories"
              name="categories"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categories}
            />
            {formik.touched.categories && formik.errors.categories ? (
              <div>{formik.errors.categories}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="type">Type</label>
            <input
              id="type"
              name="type"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type}
            />
            {formik.touched.type && formik.errors.type ? (
              <div>{formik.errors.type}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="raiting">Raiting</label>
            <input
              id="raiting"
              name="raiting"
              type="Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.raiting}
            />
            {formik.touched.raiting && formik.errors.raiting ? (
              <div>{formik.errors.raiting}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="firstPrice">FirstPrice</label>
            <input
              id="firstPrice"
              name="firstPrice"
              type="Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstPrice}
            />
            {formik.touched.firstPrice && formik.errors.firstPrice ? (
              <div>{formik.errors.firstPrice}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="endirim">Endirim</label>
            <input
              id="endirim"
              name="endirim"
              type="Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.endirim}
            />
            {formik.touched.endirim && formik.errors.endirim ? (
              <div>{formik.errors.endirim}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="image">IMage</label>
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
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.duration}
            />
            {formik.touched.duration && formik.errors.duration ? (
              <div>{formik.errors.duration}</div>
            ) : null}
            </div>
           
          </div>
         


        </div>
        <button style={{marginTop:"40px"}} type="submit">Submit</button>
      </form>


    </div>
  )
}

export default ModaAdd
