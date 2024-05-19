

import React, { useContext, useMemo } from 'react'
import Maincontext from '../../Context/Context'
import Rating from '@mui/material/Rating';

import "./Azeribaijan.scss"
import { Link } from 'react-router-dom';
import usePagination from '../../Hook/usePagination';
function Azerbaijan() {


  const { product, product2, HandlerFilterbyName2, HandlerFilterbyPrice2, HandlerSerach, addtoBasket, HandlerFilterbyName, HandlerFilterbyPrice, HandlerFilterBYYazar, paginateData } = useContext(Maincontext)

  const AzerbaijanProducts = useMemo(() => product2.filter(item => item.categories.includes("Yeni AzerBaycan Nesrleri")), [product2])

  const [PageDatas, currentPage, setCurrentPage, setDataPerPage, pageNumbers, lastPageIndex, firstElementIndex, lastElementIndex] = usePagination(AzerbaijanProducts, 6)

  return (
    <div className='container'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "20px" }}>
        <div className='boss' style={{ width: "30%", height: "12px", backgroundColor: "#f6f6f6" }}></div>
        <div style={{ fontSize: "20px" }}><strong>Yeni Azerbaycan Nesrleri</strong></div>
        <div className='boss' style={{ width: "30%", height: "12px", backgroundColor: "#f6f6f6", }}></div>
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <select style={{ width: "180px", height: "40px" }} name="" id="" onChange={(e) => {
          HandlerFilterbyName2(e)
        }}>
          <option value="df">Default</option>
          <option value="AZ">A-dan Z-ə</option>
          <option value="ZA">Z-den A-ya</option>
        </select>

        <select style={{ width: "180px", height: "40px" }} name="" id="" onChange={(e) => {
          HandlerFilterbyPrice2(e)
        }}>
          <option value="09">Azdan Coxa Qiymet</option>
          <option value="90">Coxdan Aza Qiymet</option>
        </select>

        <input style={{ width: "280px", height: "40px" }} type="text" placeholder='serch' onChange={(e) => {
          HandlerSerach(e.target.value)
        }} />

        <select name="" id="" onChange={(e) => {
          HandlerFilterBYYazar(e)
        }}>
          <option value="df">Butun Kitablar</option>
          <option value="Abdulla Saiq">Abdulla Saiq</option>
          <option value="Cabir Novruz">Cabir novruz</option>
          <option value="AN">Aynur Nurlu</option>
        </select>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        {
          PageDatas.map((item, index) => {
            console.log("object,", paginateData)

            if (item.categories == "Yeni AzerBaycan Nesrleri") {
              return (
                <div className=' col-lg-2 col-md-3 mr-4 mb-4 yAnesr' style={{ marginTop: "12px" }}>
                  <div class="card" style={{ width: "18rem;" }}>

                    <div className='card__image__dur text-center'>
                      <img src={item.image} class="card-img-top" alt="..." />
                      {item.duration ? <div className='duration'>{item.duration}</div> : ""}

                    </div>

                    <div class="card-body">
                      <h6 class="card-title">{item.name}</h6>
                      <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly />

                      <p class="card-text"> {item.material}</p>
                      <p>{item.yazar}</p>
                      <div className="endirim">
                        <p >{item.firstPrice}</p>
                        <p>{item.endirim}%</p>
                      </div>
                      <div className='nowPrice'><div className='nowPrice__price'>{item.price} Azn</div>
                        <button onClick={() => {
                          addtoBasket(item)
                        }}><i class="fa-solid fa-basket-shopping"></i></button>
                      </div>
                    </div>
                  </div>
                  {/* <button className={index + 1 ==currentPage? "active": ""} onClick={() => { setCurrentPage(index+1) }} style={{ marginLeft:"6px"}}>{ index +1}</button> */}
                </div>
              )
            }
          })
        }

      </div>
      <div className='azeriPag' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px" }}>
        {
          pageNumbers.map(x=>(
            <button onClick={()=>setCurrentPage(x)}>{x}</button>
          ))
        }
      </div>

    </div>
  )
}

export default Azerbaijan
