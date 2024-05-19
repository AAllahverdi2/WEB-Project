import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import LegoCard from './LegoCard'
import "./Lego.scss"
import { Link } from 'react-router-dom'
const LegoCards = () => {
    const {data}=useContext(Maincontext)
    const legoCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Lego konstruktorlar")) {
            legoCard.push(<LegoCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
    <div className="container__top__turk">
  <div className='bos5'></div>
   <div><h3><b>Lego konstruktorlar</b></h3></div>
   <div className='bos6'></div><Link to="lego">Hamisina bax</Link>
  </div>
   <div className="row">
       {/* {
           data.map((item,index)=>{
               if(item.categories=="Lego konstruktorlar"){
                   return(<LegoCard key={index} item={item} />)
               }
           })
       } */}
       {legoCard}
   </div>
 
</div>
)
}
 

export default LegoCards
