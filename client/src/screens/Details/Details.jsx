import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getOneWine} from '../../services/wines'

export default function Details() {
  const { id } = useParams();
  const [wine, setWine] = useState([]);

  useEffect(() => {
    const fetchWine = async () => {
      const wine = await getOneWine(id);
      setWine(wine);
    }
    fetchWine();
  }, [id])
  return (
    <div className="main-container">
      <h1>Wine Details</h1> 
      <h2>{wine.name}</h2>
      <img src={wine.img_url} alt={wine.name}/> 
      <h2>{wine.vintage}</h2>
      <h2>{wine.varietal}</h2>
    </div>
  );
}
