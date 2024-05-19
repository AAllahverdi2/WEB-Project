// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const TABS = () => {
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <div>
//             <Box sx={{ width: '100%' }}>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                         <Tab label="Item One" {...a11yProps(0)} />
//                         <Tab label="Item Two" {...a11yProps(1)} />
//                         <Tab label="Item Three" {...a11yProps(2)} />
//                     </Tabs>
//                 </Box>
//                 <CustomTabPanel value={value} index={0}>
                    
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={1}>
//                     Item Two
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={2}>
//                     Item Three
//                 </CustomTabPanel>
//             </Box>

//         </div>
//     )
// }

// export default TABS



















  {/* <form onSubmit={formik.handleSubmit}>
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
        <label htmlFor="material">Material</label>
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
        <label htmlFor="image"> </label>
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
        <label htmlFor="duration">First Name</label>
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
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}


        <button type="submit">Submit</button>
      </form> */}