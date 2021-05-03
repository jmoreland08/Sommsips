import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getOneWine} from '../../services/wines'
import Layout from '../../components/Layout/Layout';
import "./Details.css";

export default function Details(props) {
  const { id } = useParams();
  const [wine, setWine] = useState([]);
  const { handleDelete } = props
  

  useEffect(() => {
    const fetchWine = async () => {
      const wine = await getOneWine(id);
      setWine(wine);
    }
    fetchWine();
  }, [id])
  return (
    <Layout>
    <div className="detail-container">
      <img id='.detail-image' src={wine.img_url} alt={wine.name} /> 
      <h2 id='details-name'>{wine.name}</h2>      
      <h2 id='details-vintage'>{wine.vintage}</h2>
      <h2 id='details-varietal'>{wine.varietal}</h2>
        <p>{wine.notes}</p>
      <Link to={`/wines/${wine.id}/edit`}><button id='edit-button'>Update</button></Link>
      <Link to={'/wines'}>
      <button id='delete-button' onClick={()  => handleDelete(wine.id)}>Delete Wine</button></Link>
      </div>
      </Layout>
  );
}
