import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

export default function WineDetail(props) {
  // const [wine, setWine] = useState(null);
  // const { allWines} = props;
  // const { id } = useParams();

  // useEffect(() => {
  //   if (allWines.length) {
  //     const oneWine = allWines.find((wine) => wine.id === Number(id));
  //     setWine(oneWine)
  //   }
  // }, [allWines, id])

  return (
    
    <div className="wine-details">
      <h1>wine detail</h1>
        {/* {
          wine &&
          <div className="card">
            <h2>{wine.name}</h2>
            <img src={wine.img_url} />
          <h3>{wine.vintage}</h3>
          <h3>{wine.varietal}</h3>
            <Link to={`/wines/${wine.id}/edit`}><button>Update</button></Link>
            <button onClick={() => removeWine(wine.id)}>Release</button>
          </div>
      } */}
      
      </div>
   
  )
}
