import React from 'react'
import Cards from '../../companents/Cards'
import Section1 from '../../companents/Section1'
import CardsRus from '../../companents/CardsRus'
import CardsTurk from '../../companents/CardsTurk'
import LegoCards from '../../companents/LegoCards'
import IngilisCards from '../../companents/IngilisCards'
import MektebCards from '../../companents/MektebCards'
import YaradCards from '../../companents/YaradCards'
import OyunCards from '../../companents/OyunCards'
import PuzzleCards from '../../companents/PuzzleCards'
import ModaCards from '../../companents/ModaCards'
import ElektronCards from '../../companents/ElektronCards'
import Paragrapht from '../../companents/Paragrapht'
import MusteriCard from '../../companents/MusteriCard'
// import MusteriCard from '../../companents/MusteriCard'

function Home() {
  return (
    <div>
      <Section1 />
      <Cards />
      <CardsRus />
      <CardsTurk />
      <LegoCards />
      <IngilisCards />
      <MektebCards />
      <YaradCards />
      <OyunCards />
      <PuzzleCards />
      <ModaCards />
      <ElektronCards />
      {/* <MusteriCard /> */}
      <Paragrapht />


    </div>
  )
}

export default Home
