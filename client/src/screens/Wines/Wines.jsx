import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';

export default function Wines({allWines}) {

  return (
    <Layout>
    <div className='all-wines'>
        {allWines.map((wine) => (
          <React.Fragment key={wine.id}>
            <Link to={`/wines/${wine.id}`}>
              <Card
                name={wine.name}
                imgUrl={wine.img_url}
                vintage={wine.vintage}
                varietal={wine.varietal}
              />
            </Link>
          </React.Fragment>
        ))}
    </div>
     </Layout>
  )
}
