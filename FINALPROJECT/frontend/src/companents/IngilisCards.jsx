import React, { useContext } from 'react'
import IngilisCard from './IngilisCard'
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'

const IngilisCards = () => {
    const {data}=useContext(Maincontext)
    const ingilisCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Yeni İngilis nəşrləri")) {
          ingilisCard.push(<IngilisCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
    <div className="container__top__turk">
  <div className='bos1'></div>
   <div><h3><b>Yeni İngilis nəşrləri</b></h3></div>
   <div className='bos2'></div><Link to="Ingilis">Hamisina Bax</Link>
  </div>
   <div className="row">
       {
          //  data.map((item,index)=>{
          //      if(item.categories=="Yeni İngilis nəşrləri"){
          //          return(<IngilisCard key={index} item={item} />)
          //      }
          //  })
       }
       {ingilisCard}
   </div>
 
</div>
  )
}

export default IngilisCards
