import React from 'react'
import './Card.css'
export default function Card(props) {
  const { name, imgUrl, vintage, varietal} = props;
  return (
    <div className='wine-card'>
      <img src={imgUrl} alt={name} className='card-image' />
      <h1>{name}</h1>
      <h2>{vintage}</h2>
      <h2>{varietal}</h2>
    </div>
  )
}