import React from 'react'

const Collections = (props) => {
const {title, image1, image2, image3,image4,image5,image6,image7,image8,image9,image10}=props.Vegetable
  return (
    <div className='collectionsection'>
      <h2>{title}</h2>
      <div className="vegimg">
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
      </div>
    </div>
  )
}

export default Collections
