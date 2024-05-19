import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Maincontext from '../../Context/Context';
import "./Edit.scss"


function EditPage() {
  const { id } = useParams();
  const [edit, setEdit] = useState({});
  const { search, setSearch, product, setProduct } = useContext(Maincontext)
  console.log(edit)
  useEffect(() => {
    axios.get(`http://localhost:4007/alinino/${id}`)
      .then((res) => {
        setEdit(res.data);
      })

  }, [id]);
  useEffect(() => {
    formik.setValues({
      name: edit?.name || '',
      price: edit?.price || '',
      categories: edit?.categories || '',
      image: edit?.image || '',
      duration: edit?.duration || '',
      material: edit?.material || '',
      raiting: edit?.raiting || '',
      firstPrice: edit?.firstPrice || '',
      endirim: edit?.endirim || '',
      yazar: edit?.yazar || '',
    })
  }, [id,edit])
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      categories: '',
      image: '',
      duration: '',
      material: '',
      raiting: '',
      firstPrice: '',
      endirim: '',
      yazar: '',

    },
    onSubmit: async (values) => {
      await axios.put(`http://localhost:4007/alinino/${edit._id}`, values)
        .then(res => {
          setProduct([...product, res.data])
          setSearch([...search, res.data])
          setEdit([...edit, res.data])
          toast.success('Updated successfully.');
        })

    },
  });
  return (
    <div className='edit__all' style={{ marginTop: "40px" }}>
     
      <div className='container modalScss' style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/* <form className="form" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
            </div>
          

         
            <div className="form-group">
              <label htmlFor="categories">Categories</label>
              <input
                id="categories"
                name="categories"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.categories}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                id="duration"
                name="duration"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.duration}
              />
            </div>

            <div className="form-group">
              <label htmlFor="material">Material</label>
              <input
                id="material"
                name="material"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.material}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="raiting">Raiting</label>
              <input
                id="raiting"
                name="raiting"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.raiting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstPrice">firstPrice</label>
              <input
                id="firstPrice"
                name="firstPrice"
                type="Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstPrice}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="endirim">Endirim</label>
              <input
                id="endirim"
                name="endirim"
                type="Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endirim}
              />
            </div>

            <div className="form-group">
              <label htmlFor="yazar">Yazar</label>
              <input
                id="yazar"
                name="yazar"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.yazar}
              />
            </div>
          </div>



          <button className="differbtn" type="submit">Submit</button>
        </form> */}





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
      <Toaster />
    </div>
  );
}

export default EditPage;