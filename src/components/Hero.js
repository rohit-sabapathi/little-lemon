import React from 'react'
import food from './restauranfood.jpg'

export default function Hero() {
  return (
    <div className='hero-section'>
        <div className='hero-text' >
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean </p>
            <p>restaurant, focused on traditional recipes</p>
            <p> served with a modern twist.</p>
        </div>
        <div className='hero-img'>
          <img src={food} alt='Restaurant Food' width={325} height={450} />
        </div>
    </div>
  )
}
