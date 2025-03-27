import React, { useState } from 'react'
import Header from '../Header'
import Banner from '../Banner'
import Collections from '../Collections'
import Footer from '../Footer'
import { vegetables,fruits,detergents,soaps } from '../../../grodata'
import Fruits from '../Fruits'
import Detergents from '../Detergents'
import Soaps from '../Soaps'
const Mainpage = () => {
  const[Vegetable,setVegtavble]=useState(vegetables)
  const[Fruit,setFruit]=useState(fruits)
  const[Detergent,setDetergent]=useState(detergents)
  const[Soap,setSoap]=useState(soaps)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections Vegetable={Vegetable}/>
      <Fruits Fruit={Fruit}/>
      <Detergents Detergent={Detergent}/>
      <Soaps Soap={Soap}/>
      <Footer/> 
    </div>
  )
}

export default Mainpage
