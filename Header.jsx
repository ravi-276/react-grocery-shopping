import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
      <div className="left">
        <div className="title">
            <h2>Grocery Store</h2>
        </div>
      </div>
      <div className="center">
        <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Snacks</li>
            <li>Detergents</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder='search...'/>
      </div>
      <div className="right">
        <div className="signin">
            signin / signup
        </div>
        <div className="cart">cart</div>
      </div>
    </div>
  )
}

export default Header
