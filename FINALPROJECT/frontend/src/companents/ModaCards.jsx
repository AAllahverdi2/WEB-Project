import React from 'react'
import ModaCard from './ModaCard'
import { useContext } from 'react'
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'

const ModaCards = () => {
    const {data}=useContext(Maincontext)
    const modaCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Moda")) {
            modaCard.push(<ModaCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
          <div className="container__top__turk">
       <div className='bos5'></div>
        <div><h3><b>Moda</b></h3></div>
        <div className='bos6'></div><Link to="Moda">Hamisina Bax</Link>
       </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Moda"){
                        return(<ModaCard key={index} item={item} />)
                    }
                })
            } */}
            {modaCard}
        </div>
      
    </div>
  )
}

export default ModaCards
