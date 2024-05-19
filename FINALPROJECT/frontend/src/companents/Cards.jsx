import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import Card from './Card'
import "./Card.scss"
import { Link } from 'react-router-dom'

function Cards() {
    const {data}=useContext(Maincontext)
    const AZcard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Yeni AzerBaycan Nesrleri")) {
            AZcard.push(<Card key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container' style={{marginTop:"20px"}}>
       <div className="container__top">
       <div className='bos1'></div>
        <div><h3><b>Yeni Azərbaycan nəşrləri</b></h3></div>
        <div className='bos2'></div><Link to="/Azerbaijan">Hamisina bax</Link>
       </div>


        <div className="row">
        {AZcard}
        </div>
      
    </div>
  )
}

export default Cards
