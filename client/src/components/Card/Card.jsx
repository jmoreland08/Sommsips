import React from 'react'

export default function Card(props) {
  const { name, img_url, vintage, varietal} = props;
  return (
    <div>
      <h1>{name}</h1>
      <img src={img_url} alt={name} />
      <h2>{vintage}</h2>
      <h2>{varietal}</h2>
    </div>
  )
}
