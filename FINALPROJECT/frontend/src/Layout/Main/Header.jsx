import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import { useUser } from '../../Context/userContext'
import Maincontext from '../../Context/Context'
function Header() {

  const { addtoBasket, removeAll, HandlerSerach ,basketCounter} = useContext(Maincontext)

  const { User, setUser,basket, ManualUpdate, BasketCounter } = useUser()

  function logout() {
    setUser(null)
    // removeAll()
  }

  function LengthBasket() {
    const result = User.basket.length
    return result
  }

  // useEffect(() => {
  //   const result = LengthBasket();
  // }, [User.basket])

  function addtobasket() {
    console.log(User.basket);
    User.basket.push('user')
    console.log(User.basket);
    ManualUpdate()
  }
  const offRef = useRef()
  const handleActiveRef = () => {
    offRef.current.classList.toggle('activeOf')
  }

  const handleCloseRef = () => {
    offRef.current.classList.remove('activeOf')
  }
  return (
    <>
      <div className='header__all'>
        <div className='header__all__left'>
          <div className='header__all__left__img'><img src="https://static.insales-cdn.com/assets/1/3171/6319203/1708062845/logotype.jpg" alt="" /></div>
          <div className='header__all__left__inputs'>
            <div className='header__all__left__inputs__con' style={{ cursor: "pointer" }} onClick={handleActiveRef}><i class="fa-solid fa-bars"></i> Menu</div>


            <div className='header__all__left__inputs__inp'><input type="text" placeholder=' search' />
              <div className="searchForm">
                <a href="">
                  <div className='a__div'>
                    <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1708062845/logotype.jpg" alt="" />
                  </div>
                  <span className='search__span'>
                    klkfdlkewfkdelwlkkdm
                  </span>
                  <span className='search__span2'>
                    lkndljqnjdnjndw
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='header__all__right'>
          <div style={{ marginLeft: "40px" }}><p>Xos gelmisiniz {User ? User.username : "Qonaq"}</p></div>
          <div className='header__all__right__elements'>
            <div className='header__all__right__elements__img'>
              <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1708062845/az.png" alt="" />
              <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1708062845/en.png" alt="" />
              <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1708062845/ru.png" alt="" />            </div>
            <div className='header__all__right__elements__links'>
              {/* <Link to="/">home</Link> */}
              {/* <Link to="/Shop">giris</Link> */}
              {!User ? <Link to="Giris">Giris</Link> : <button style={{ border: "none", color: "gray", backgroundColor: "none" }} onClick={logout} >Çıxış</button>}
              <Link to="/Basket">sebet <i style={{ color: "#dc0708" }} class="fa-solid fa-cart-shopping"></i> </Link>

            </div>
          </div>
        </div>

      </div>
      <div className='offc' ref={offRef}>
        <ul>


          <li>
            <Link onClick={handleCloseRef} to="Azerbaijan">
              <img src="https://static.insales-cdn.com/images/collections/1/6913/84458241/thumb_istockphoto-1167481470-612x612.jpg" alt="" />
              <br />
              Bestler
            </Link>
          </li>

          <li>
            <Link onClick={handleCloseRef} to="Azerbaijan">
              <img src="https://static.insales-cdn.com/images/collections/1/545/1745441/thumb_book_icon_aze.png" alt="" />
              <br />
              Azərbaycan Dilinde Kitablar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Rus">
              <img src="https://static.insales-cdn.com/images/collections/1/546/1745442/thumb_book_icon_ru.png" alt="" />
              <br />
              Rus Dilinde Kitablar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Turk">
              <img src="https://static.insales-cdn.com/images/collections/1/548/1745444/thumb_book_icon_tr.png" alt="" />
              <br />
              Turk dilinde Kitablar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Ingilis">
              <img src="https://static.insales-cdn.com/images/collections/1/547/1745443/thumb_book_icon_eng.png" alt="" />
              <br />
              İngilis dilinde Kitablar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Lego">
              <img src="https://static.insales-cdn.com/images/collections/1/6254/70989934/thumb_lego-13-282122.png" alt="" />
              <br />
              Lego Konstruktorlar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Oyun">
              <img src="	https://static.insales-cdn.com/images/collections/1/551/1745447/thumb_toy_icon.png" alt="" />
              <br />
              Oyun Ve Oyuncaqlar
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="">
              <img src="	https://static.insales-cdn.com/images/collections/1/549/1745445/thumb_gift_icon.png" alt="" />
              <br />
              Hədiyyələr
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Yaradiciliq">
              <img src="	https://static.insales-cdn.com/images/collections/1/4135/11440167/thumb_knitting.png" alt="" />
              <br />
              Yaradicilliq Və Rəsmlər
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Puzzle">
              <img src="https://static.insales-cdn.com/images/collections/1/6890/84458218/thumb_red-puzzle-piece-top-hi.png" alt="" />
              <br />
              Puzzle
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Moda">
              <img src="https://static.insales-cdn.com/images/collections/1/6851/84458179/thumb_fdY3sLaj3jwejYEzTwLCX2kHx4UHDwLPrkypY3g0.jpeg" alt="" />
              <br />
              Moda
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Azerbaijan">
              <img src="https://static.insales-cdn.com/images/collections/1/6892/84458220/thumb_111-1114782_running-person-icon-png-clipart-png-download-clip.png" alt="" />
              <br />
              İdman Və Fitness
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Azerbaijan">
              <img src="https://static.insales-cdn.com/images/collections/1/6923/84458251/thumb_ruler-triangle-stationary-school-512.png" alt="" />
              <br />
              Məktəb Bazari
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseRef} to="Azerbaijan">
              <img src="https://static.insales-cdn.com/images/collections/1/6905/84458233/thumb_depositphotos_153648576-stock-illustration-red-cosmetic-bag-with-makeup.jpg" alt="" />
              <br />
              Kosmetika, parfümeriya və şəxsi qulluq
            </Link>
          </li>
        </ul>




      </div>
    </>
  )
}

export default Header
