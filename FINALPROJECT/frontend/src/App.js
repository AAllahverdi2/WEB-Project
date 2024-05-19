import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./App.scss";
import Maincontext from './Context/Context';

import ROUTES from './index.routes';
import { UserProvider } from './Context/userContext';

const router = createBrowserRouter(ROUTES)
const App = () => {

  const [data, setData] = useState([])
  // const [basket, SetBasket] = useState(User && User.username ? User.basket : [])
  const [product, setProduct] = useState([])
  const [product2, setProduct2] = useState([])
  const [filtering, setFiltering] = useState([])
  const [search, setSearch] = useState([])
  const [category, setCategory] = useState("All")


  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, serPostPerPage] = useState(6)


  const handleFilterin = (e) => {
    setCategory(e)
    if (e == 'All') {
      setProduct([...filtering])
    } else {
      const filteredData = data.filter(item => item.categories == e)
      setProduct([...filteredData])
    }
  }


  const RemoveData = (id) => {
    axios.delete(`http://localhost:4007/alinino/${id}`).then(res => {
      const target = product.find(prod => prod._id === id)
      product.splice(product.indexOf(target), 1)
      setProduct([...product])

    })
  }

  // const RemoveNewsData = (id) => {
  //   axios.delete(`http://localhost:4007/xeberler/${id}`).then(res => {
  //     const target = product.find(prod => prod._id === id)
  //     product.splice(product.indexOf(target), 1)
  //     setProduct([...product])

  //   })
  // }

  const HandlerFilterbyName = (e) => {
    const sorting = e.target.value
    if (sorting == "df") {
      setProduct([...search])
    }
    else if (sorting == "AZ") {
      setProduct([...product.sort((a, b) => a.name.localeCompare(b.name))])
    }
    else if (sorting == "ZA") {
      setProduct([...product.sort((a, b) => b.name.localeCompare(a.name))])
    }
  }

  const HandlerFilterbyPrice = (e) => {
    const sorting = e.target.value
    if (sorting == "09") {
      setProduct([...search.sort((a, b) => a.price - b.price)])
    }
    else if (sorting == "90") {
      setProduct([...search.sort((a, b) => b.price - a.price)])
    }
  }
  const HandlerSerach = (searchValue) => {
    if (searchValue == '') {
      setProduct([...search])
    } else {
      setProduct([...search.filter(item => item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))])
    }
  }
  const HandlerFilterByAge = (e) => {
    const sorting = e.target.value
    if (sorting == "df") {
      setProduct([...search])
    }
    else if (sorting == "16") {
      const target = search.filter((item) => item.yas == "16")
      setProduct([...target])
    }
    else if (sorting == "18") {
      const target = search.filter((item) => item.yas == "18")
      setProduct([...target])
    }
  }
  const HandlerFilterBYYazar = (e) => {
    const sorting = e.target.value
    if (sorting == "df") {
      setProduct([...search])
    }
    else if (sorting == "Cabir Novruz") {
      const target = search.filter((item) => item.yazar == "Cabir Novruz")
      setProduct([...target])
    }
    else if (sorting == "Abdulla Saiq") {
      const target = search.filter((item) => item.yazar == "Abdulla Saiq")
      setProduct([...target])
    }
    else if (sorting == "AN") {
      const target = search.filter((item) => item.yazar == "Aynur Nurlu")
      setProduct([...target])
    }
    else if (sorting == "AD") {
      const target = search.filter((item) => item.yazar == "Абдель Селлу")
      setProduct([...target])
    }
    else if (sorting == "AB") {
      const target = search.filter((item) => item.yazar == "Абэ Тисато")
      setProduct([...target])
    }
    else if (sorting == "Adam Kay") {
      const target = search.filter((item) => item.yazar == "Adam Kay")
      setProduct([...target])
    }
    else if (sorting == "Ahmet Koyuncu") {
      const target = search.filter((item) => item.yazar == "Ahmet Koyuncu")
      setProduct([...target])
    }
    else if (sorting == "LC") {
      const target = search.filter((item) => item.type == "Lego Classic")
      setProduct([...target])
    }
  }

  const lastIemIndex = currentPage * postPerPage
  const firstItemIndex = lastIemIndex - postPerPage
  const paginateData = product2.slice(firstItemIndex, lastIemIndex)
console.log("mmkmkkkkkk",paginateData)




  const HandlerFilterbyPrice2 = (e) => {
    const sorting = e.target.value;
    if (sorting == "09") {
      const sortedProduct = paginateData.sort((a, b) => a.price - b.price);
      setProduct2([...sortedProduct]);
    } else if (sorting == "90") {
      const sortedProduct = paginateData.sort((a, b) => b.price - a.price);
      setProduct2([...sortedProduct]);
    }
  };

  const HandlerFilterbyName2 = (e) => {
    const sorting = e.target.value
    if (sorting == "df") {
      setProduct2([...search])
    }
    else if (sorting == "AZ") {
      setProduct2([...paginateData.sort((a, b) => a.name.localeCompare(b.name))])
    }
    else if (sorting == "ZA") {
      setProduct2([...paginateData.sort((a, b) => b.name.localeCompare(a.name))])
    }
  }



  useEffect(() => {
    axios.get("http://localhost:4007/alinino/").then(res => {
      console.log(res.data)
      setData(res.data)
      setSearch(res.data)
      setFiltering(res.data)
      setProduct(res.data)
      setProduct2(res.data)
    })
  }, [])
  const adminHeadRef = useRef()
  const sideBardHeadRef = useRef()
  const handleResSideBar = () => {
    sideBardHeadRef.current.classList.toggle('resSidebarInHead')
  }
  const handleAddWidthHeader = () => {
    adminHeadRef.current.classList.toggle('activeHeadBurger')
    sideBardHeadRef.current.classList.toggle('sideBar')
  }
  const valus = {
    data,
    product,
    currentPage,
    postPerPage,
    paginateData,
    RemoveData,
    HandlerFilterbyName,
    HandlerFilterbyPrice,
    HandlerSerach,
    HandlerFilterbyPrice2,
    setProduct,
    setData,
    HandlerFilterByAge,
    adminHeadRef,
    sideBardHeadRef,
    handleResSideBar,
    handleAddWidthHeader,
    search, 
    handleFilterin, 
    category,
    setSearch,
    HandlerFilterBYYazar,
    setCurrentPage,
    HandlerFilterbyName2,
    product2,
    // RemoveNewsData


  }
  return (
    <div>
      <UserProvider>

        <Maincontext.Provider value={valus}>

          <RouterProvider router={router} />

        </Maincontext.Provider>
      </UserProvider>
    </div>
  )
}

export default App

