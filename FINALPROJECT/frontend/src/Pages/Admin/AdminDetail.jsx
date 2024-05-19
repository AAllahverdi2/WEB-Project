import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Admindetail.scss"
import Rating from '@mui/material/Rating';

const AdminDetail = () => {
  const { id } = useParams()
  const [admindetail, setAdmindetail] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4007/alinino/${id}`).then(res => {
      setAdmindetail(res.data)
      console.log("sasas", admindetail)
    })
  }, [])
  return (
    <div className='admindetail__all'>
      <div className='admindetail__all__row'>
        <div class="card" style={{ width: "18rem;" }}>
          <img src={admindetail.image} class="card-img-top" alt="..." />
          {admindetail.delivery ? <div className='deliver'>{admindetail.delivery}</div> : ""}
          <div class="card-body">
            <h5 class="card-title">{admindetail.name}</h5>
            <Rating style={{ backgroundcolor: "red" }} name="read-only" value={admindetail.raiting} readOnly />
            <p class="card-text">{admindetail.material}</p>
            <div className='turk__endirim'>
             <del> <p style={{fontSize:"20px", color:"gray"}}>{admindetail.firstPrice}</p></del>
              <p>{admindetail.endirim}%</p>
            </div>
            <p>{admindetail.price} AZN</p>


          </div>
        </div>

      </div>


    </div>
  )
}

export default AdminDetail
