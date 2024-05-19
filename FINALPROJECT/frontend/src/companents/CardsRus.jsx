import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import CardRus from './CardRus'
import "./Ruscard.scss"
import { Link } from 'react-router-dom'
function CardsRus() {
  const { data } = useContext(Maincontext)
  console.log("object", data)
  const rusCards = [];
  let count = 0;

  if (data) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.categories && item.categories.includes("Yeni Rus Nesriyyati")) {
        rusCards.push(<CardRus key={i} item={item} />);
        count++;
        if (count === 6) break; // Stop adding cards after reaching 6
      }
    }
  }
  return (
    <div className='container'>
      <div className="Ruscontainer__top">
        <div className='bos3'></div>
        <div><h3><b>Yeni Rus nəşrləri</b></h3></div>
        <div className='bos3'></div><Link to="Rus">Hamisina Bax</Link>
      </div>
      <div className="row">
      {rusCards}
      </div>

    </div>
  )
}

export default CardsRus
