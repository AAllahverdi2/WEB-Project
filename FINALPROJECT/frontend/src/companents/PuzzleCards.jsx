import React, { useContext } from 'react'
import PuzzleCard from './PuzzleCard'
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'

const PuzzleCards = () => {
    const {data}=useContext(Maincontext)
    const puzzleCard = [];
    let count = 0;
  
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.categories && item.categories.includes("Puzzle")) {
            puzzleCard.push(<PuzzleCard key={i} item={item} />);
          count++;
          if (count === 6) break; // Stop adding cards after reaching 6
        }
      }
    }
  return (
    <div className='container'>
         <div className="container__top__turk">
       <div className='bos5'></div>
        <div><h3><b>Puzzle</b></h3></div>
        <div className='bos6'></div><Link to="Puzzle">Hamissina bax</Link>
       </div>
        <div className="row">
            {/* {
                data.map((item,index)=>{
                    if(item.categories=="Puzzle"){
                        return(<PuzzleCard key={index} item={item} />)
                    }
                })
            } */}
            {puzzleCard}
        </div>
      
    </div>
  )
}

export default PuzzleCards
