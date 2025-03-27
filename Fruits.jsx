import React from 'react'

const Fruits = (props) => {
    const {title, image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11,image12}=props.Fruit
  return (
    <div className='fruitsection'>
        <h2>Fruits</h2>
      <div className="fruitimg">
      <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
        <img src={image6} alt={title}/>
        <img src={image7} alt={title}/>
        <img src={image8} alt={title}/>
        <img src={image9} alt={title}/>
        <img src={image10} alt={title}/>
        <img src={image11} alt={title}/>
        <img src={image12} alt={title}/>
      </div>
    </div>
  )
}

export default Fruits
