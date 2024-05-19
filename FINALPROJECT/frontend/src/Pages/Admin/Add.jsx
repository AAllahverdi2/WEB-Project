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
import "./Add.scss"
import ModaAdd from './ModaAdd';
import ElectonicsAdd from './ElectonicsAdd';
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



const Add = () => {
  const [value, setValue] = React.useState(0);
  const { product, setProduct, data, setData,search,setSearch } = useContext(Maincontext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        .required('Required'),
      duration: Yup.string()
      


    }),
    onSubmit: async values => {
      await axios.post("http://localhost:4007/alinino/", values).then(res => {
        setProduct([...product, res.data])
        setData([...data, res.data])
        setSearch([...search,res.data])
      })
      formik.resetForm()
    },
  });


  return (
    <div className='add__all' >

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ADD BOOK" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Electronics Add" {...a11yProps(2)} />
            
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
    <div className="container modalScss">
          
            <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="modalFormInside">
              <label htmlFor="name"><strong>Name</strong></label>
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
            <label htmlFor="price"><strong>Price</strong></label>
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
            <label htmlFor="categories"><strong>Categories</strong></label>
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
            <label htmlFor="material"><strong>Material</strong></label>
            <input
              id="material"
              name="material"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.material}
            />
            {formik.touched.material && formik.errors.material ? (
              <div>{formik.errors.material}</div>
            ) : null}
            </div>
           
          </div>
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="raiting"><strong>Raiting</strong></label>
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
            <label htmlFor="firstPrice"><strong>FirstPrice</strong></label>
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
            <label htmlFor="endirim"><strong>Endirim</strong></label>
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
            <label htmlFor="image"><strong>Image</strong></label>
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
            <label htmlFor="duration"><strong>Duration</strong></label>
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
          <div className="col-md-6">
            <div className="modalFormInside">
            <label htmlFor="yazar"><strong>Yazar</strong></label>
            <input
              id="yazar"
              name="yazar"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.yazar}
            />
            {formik.touched.yazar && formik.errors.yazar ? (
              <div>{formik.errors.yazar}</div>
            ) : null}
            </div>
           
          </div>
          
         


        </div>
        <button className='btn btn-success' style={{marginTop:"40px"}} type="submit">Submit</button>
      </form>

    </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ModaAdd />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ElectonicsAdd/>
        </CustomTabPanel>

      </Box>





    </div>
  )
}

export default Add
