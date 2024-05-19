import React, { useContext, useEffect } from 'react'
import Maincontext from '../../Context/Context'
import { useUser } from '../../Context/userContext'
import axios from 'axios'
import "./Basket.scss"
import { Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function Basket() {
  const navigate = useNavigate()
  const { User, DecreaseBtn, increaseBtn, removeFromBasket } = useUser()
  let totalPrice = 0
  const createOrder = (items) => {
    axios.post("http://localhost:4007/order/", { items: items }).then(res => {
      console.log("ored", items)
    })
  }

  function handleBasket(item, cb) {
    cb(item)
    navigate('/Basket')
  }
  return (
    <div className='basket__all'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "20px", width: "90%" }}>
        <div className='boss' style={{ width: "30%", height: "12px", backgroundColor: "#f6f6f6" }}></div>
        <div style={{ fontSize: "30px" }}><strong>Səbət</strong></div>
        <div className='boss' style={{ width: "30%", height: "12px", backgroundColor: "#f6f6f6", }}></div>
      </div>
      <div>
        <p style={{ color: "green", fontSize: "20px" }}>Bakı daxilində 30 AZN-dən yuxarı sifarişlərdə çatdırılma pulsuz.</p>
      </div>
      <div className='basket__shop'>Məktəb Ucun Hər Sey Endirimde</div>
      <div className="basket__table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">mehsul</th>
              <th scope="col">miqdar</th>
              <th scope="col">qiymet</th>
              <th scope="col">mebleg</th>

            </tr>
          </thead>
          <tbody>
            {
              User ?User.basket && User.basket.map((item, index) => {
                totalPrice += item.price * item.count
                console.log(User.basket)
                return (
                  <tr key={index}>
                    <th scope="row"><button style={{ width: "30px", height: "30px", borderRadius: "50%" }} onClick={() => {
                      handleBasket(item, removeFromBasket)
                    }}>x</button></th>
                    <td><img style={{ width: "50px", height: "50px" }} src={item.image} alt="" /> {item.name}</td>
                    <td  ><button style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "white" }} onClick={() => {
                      handleBasket(item, increaseBtn)
                    }}>+</button>{item.count} <button style={{ width: "30px", height: "30px", borderRadius: "50%" }} onClick={() => {
                      handleBasket(item, DecreaseBtn)
                    }}>-</button> </td>
                    <td>{item.price}</td>
                    <td>{Number(item.price * item.count).toFixed(2)}</td>
                  </tr>
                )
              }) 
              :
              null
            }

          </tbody>

        </table>
      </div>
      <div className='basket__totalPrice' style={{ fontSize: "23px" }}><strong> <p><strong>TotalPrice</strong>:            {Number(totalPrice).toFixed(2)} AZN</p></strong>


        <button onClick={() => {
          createOrder(User.basket)
        }}>Sifarisi Resmilesdirmek</button>
      </div>
      <div className='alisveris' style={{ marginRight: "800px" }}>
        <Link to="/">Alislari Davan Et</Link>
      </div>
      <Toaster />
    </div>
  )
}

export default Basket
