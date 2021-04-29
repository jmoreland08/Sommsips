import React from "react";
import { Link } from "react-router-dom";
// import Card from '../components/Card/Card';
import Card from "../components/Card/Card";
import Layout from "../layouts/Layout";
import { useState, useEffect } from "react";
import { getAllWines } from "../services/wines";

export default function Wines() {
  const [allWines, setAllWines] = useState([]);

  useEffect(() => {
    fetchWines();
  }, []);

  const fetchWines = async () => {
    const wines = await getAllWines();
    setAllWines(wines);
  };
 
  return (
    <div className="card-list">
      {/* <Layout> */}
        <h1>wines</h1>
        {allWines.map((wine) => (
          <React.Fragment key={wine.id}>
            <Link to={`/wines/${wine.id}`}>
              <Card
                name={wine.name}
                image={wine.img_url}
                vintage={wine.vintage}
                varietal={wine.varietal}
              />
            </Link>
          </React.Fragment>
        ))}

        <Link to="/wines/new">
          <button>Add a Wine</button>
        </Link>
      {/* </Layout> */}
    </div>
  );
}
