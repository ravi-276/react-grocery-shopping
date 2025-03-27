import React from 'react'

const Detergents = (props) => {
    const {title, image1, image2, image3,image4,image5,image6}=props.Detergent
  return (
    <div className='detergentsection'>
        <h2>Detergent</h2>
      <div className="detergentimg">
      <img src={image1} alt={title}/>
        <img src={image2} alt={title}/>
        <img src={image3} alt={title}/>
        <img src={image4} alt={title}/>
        <img src={image5} alt={title}/>
        <img src={image6} alt={title}/>
      </div>
    </div>
  )
}

export default Detergents
