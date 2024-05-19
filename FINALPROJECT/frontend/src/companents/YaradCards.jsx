import React, { useContext } from 'react'
import YaradCard from './YaradCard'
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'

const YaradCards = () => {
    const {data}=useContext(Maincontext)
    const yaradCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Yaradiciliq rəsmlər tikmə aplikasiya")) {
            yaradCard.push(<YaradCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
          <div className="container__top__turk">
  <div className='bos5'></div>
   <div><h3 style={{fontSize:"23px"}}><b>Yaradiciliq - rəsmlər,aplikasiya</b></h3></div>
   <div className='bos6'></div><Link to="Yaradiciliq">Hamisina Bax</Link>
  </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Yaradiciliq rəsmlər tikmə aplikasiya"){
                        return(<YaradCard key={index} item={item}/>)
                    }
                })
            } */}
            {yaradCard}
        </div>
      
    </div>
  )
}

export default YaradCards
