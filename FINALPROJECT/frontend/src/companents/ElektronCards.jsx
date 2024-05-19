import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import ElektronCard from './ElektronCard'
import { Link } from 'react-router-dom'

const ElektronCards = () => {
    const {data}=useContext(Maincontext)
    const elektronCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Oyun")) {
            elektronCard.push(<ElektronCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
    console.log("ghj",data)
  return (
    <div className='container'>
         <div className="container__top__turk">
  <div className='bos5'></div>
   <div><h3><b>Elektonika</b></h3></div>
   <div className='bos6'></div><Link to="Elektronika">Hamisina Bax</Link>
  </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Elektronika"){
                        return(<ElektronCard key={index} item={item} />)
                    }
                })
            } */}
            {elektronCard}
        </div>
      
    </div>
  )
}

export default ElektronCards
