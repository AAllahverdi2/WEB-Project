import React, { useContext, useEffect, useState } from 'react'
import Maincontext from '../../Context/Context'
import { Link } from 'react-router-dom'
import "./Admin.scss"
import Rating from '@mui/material/Rating';

const Admin = () => {
  const { product, category, RemoveData, handleFilterin, HandlerFilterbyName, HandlerFilterbyPrice, HandlerSerach, HandlerSerachByCatgeogies, setProduct } = useContext(Maincontext)
  return (

    <div className='w-100' style={{ marginTop: "70px", backgroundColor: "black", color: "white" }}>


      <div style={{marginTop:"10px",display:"flex",gap:"20px"}}>
      <select style={{ width: "180px", height: "50px", backgroundColor: "black", color: "white" }} name="" id=""
        value={category}
        onChange={(e) => {
          handleFilterin(e.target.value)
        }}>
        <option value="All">All</option>
        <option value="Yeni Turk Nesriyyati">turk</option>
        <option value="Yeni Rus Nesriyyati">rus</option>
        <option value="Yeni AzerBaycan Nesrleri">Azerbaycan</option>
        <option value="Lego konstruktorlar">Lego</option>
        <option value="Yeni İngilis nəşrləri">Ingilis</option>
        <option value="Məktəb Bazarı">Mekteb Bazari</option>
        <option value="Yaradiciliq rəsmlər tikmə aplikasiya">Yaradicilliq Ve Tikme Aplisakiya</option>
        <option value="Oyun">Oyun</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Moda">Moda</option>
        <option value="Elektronika">Elektronika</option>


      </select>
      <select style={{ width: "180px", height: "50px", backgroundColor: "black", color: "white" }} name="" id="" onChange={(e) => {
        HandlerFilterbyName(e)
      }}>
        <option value="df">Default</option>
        <option value="AZ">A-dam Z-ə</option>
        <option value="ZA">Z-den A-ya</option>
      </select>
      <select style={{ width: "180px", height: "50px", backgroundColor: "black", color: "white" }} name="" id="" onChange={(e) => HandlerFilterbyPrice(e)}>
        <option value="09">09</option>
        <option value="90">90</option>
      </select>
      </div>




      <div>
        <div className='admin__name__top' >
          <h2><strong>{category}</strong></h2>
        </div>
        <table class="table table-dark table-striped tablee">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Material</th>
              <th scope="col">Raiting</th>
              <th scope="col">FirstPrice</th>
              <th scope="col">Endirim</th>
              <th scope="col">detail</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              product.map((item, index) => {
                return (
                  <tr>
                    <th scope="row"><img style={{ width: "50px", height: "50px" }} src={item.image} alt="" /></th>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.material? <div>{item.material}</div>: <div>{item.delivery}</div> }</td>
                    <td>{item.raiting ? <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly /> : ""}</td>
                    <td>{item.firstPrice}</td>
                    <td>{item.endirim}</td>
                    <td > <Link style={{ color: "white" }} to={`/admin/AdminDetail/${item._id}`}><i class="fa-solid fa-eye"></i></Link></td>
                   
                     <td> <Link to={`/admin/EditPage/${item._id}`}> <td><button className='btn btn-danger'>Edit</button></td></Link>  </td>

                    <td><button className='btn btn-dark' onClick={() => {
                      RemoveData(item._id)
                    }}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>

      </div>




















    </div>
  )
}

export default Admin
