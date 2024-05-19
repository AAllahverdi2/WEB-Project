import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import CardTurk from './CardTurk'
import { Link } from 'react-router-dom'

const   CardsTurk = () => {
    const {data}=useContext(Maincontext)
    const turkCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Yeni Turk Nesriyyati")) {
          turkCard.push(<CardTurk key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
         <div className="container__top__turk">
       <div className='bos5'></div>
        <div><h3><b>Yeni Turk nəşrləri</b></h3></div>
        <div className='bos6'></div><Link to="turk">Haisina bax</Link>
       </div>
        <div className="row">
       {turkCard}
        </div>
      
    </div>
  )
}

export default CardsTurk
