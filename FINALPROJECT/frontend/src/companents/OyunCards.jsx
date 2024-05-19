import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import OyunCard from './OyunCard'
import { Link } from 'react-router-dom'

const OyunCards = () => {
    const {data}=useContext(Maincontext)
    const oyunCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Oyun")) {
            oyunCard.push(<OyunCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
        
         <div className="container__top__turk">
  <div className='bos5'></div>
   <div><h3><b>Oyun ve Oyuncaqlar</b></h3></div>
   <div className='bos6'></div><Link to="Oyun">Hamisina Bax</Link>
  </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Oyun"){
                        return(<OyunCard key={index}  item={item}/>)
                    }
                })
            } */}
            {oyunCard}
        </div>
      
    </div>
  )
}

export default OyunCards
