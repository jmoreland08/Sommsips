import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getOneWine} from '../../services/wines'
import Layout from '../../components/Layout/Layout';

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
    <div className="main-container">
      <h1>Wine Details</h1> 
      <h2>{wine.name}</h2>
      <img src={wine.img_url} alt={wine.name}/> 
      <h2>{wine.vintage}</h2>
      <h2>{wine.varietal}</h2>
      <Link to={`/wines/${wine.id}/edit`}><button>Update</button></Link>
      <Link to={'/wines'}>
      <button onClick={()  => handleDelete(wine.id)}>Delete Wine</button></Link>
      </div>
      </Layout>
  );
}
