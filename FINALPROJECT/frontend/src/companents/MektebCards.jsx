import React, { useContext } from 'react'
import MektebCard from './MektebCard'
import Maincontext from '../Context/Context'
import "./Mekteb.scss"
import { Link } from 'react-router-dom'
const MektebCards = () => {
    const {data}=useContext(Maincontext)
    const mektebCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Məktəb Bazarı")) {
            mektebCard.push(<MektebCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
         <div className="container__top__turk">
  <div className='bos5'></div>
   <div><h3><b>Mekteb Levazimatlari</b></h3></div>
   <div className='bos6'></div><Link to="Mekteb">Hamisina Bax</Link>
  </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Məktəb Bazarı"){
                        return(<MektebCard key={index} item={item} />)
                    }
                })
            } */}
            {mektebCard}
        </div>
      
    </div>
  )
}

export default MektebCards
