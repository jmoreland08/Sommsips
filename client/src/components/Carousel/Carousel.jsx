import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getAllWines } from "../../services/wines";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './Caorousel.css'

export default function Carousel() {
  const [allWines, setAllWines] = useState([]);

  let randWine1 = allWines[Math.floor(Math.random() * allWines.length)];
  let randWine2 = allWines[Math.floor(Math.random() * allWines.length)];
  let randWine3 = allWines[Math.floor(Math.random() * allWines.length)];

  useEffect(() => {
    const fetchWines = async () => {
      const wines = await getAllWines();
      setAllWines(wines);
    };
    fetchWines();
  }, []);
  if (!randWine1) {
    return <h1> Loading ....</h1>;
  }

  return (
    <div className="car-div">
      <CarouselProvider
        className="carousel"
        naturalSlideWidth={25}
        naturalSlideHeight={50}
        totalSlides={3}
      >
      
        <Slider className="slider">
          <Slide id='slide'
            index={0}>
            <Link to={`/wines/${randWine1.id}`}>
              <img
                className="d-block"
                src={randWine1.img_url}
                alt="First slide"
              />
              <h1 id='h1'> {randWine1.name}</h1>
            </Link>
            <ButtonBack className='back'>Back</ButtonBack>
            <ButtonNext className='next'>Next</ButtonNext>
            </Slide>

          <Slide index={1}>
          <Link to={`/wines/${randWine2.id}`}>

              <img
                className="d-block"
                src={randWine2.img_url}
                alt="Second slide"
              />
              <h1 id='h1'> {randWine2.name}</h1>
              </Link>
              <ButtonBack className='back'>Back</ButtonBack>
            <ButtonNext className='next'>Next</ButtonNext>
            </Slide>

          <Slide index={2}>
          <Link to={`/wines/${randWine3.id}`}>
              <img
                className="d-block"
                src={randWine3.img_url}
                alt="Third slide"
              />
              <h1 id='h1'> {randWine3.name}</h1>
            </Link>
            <ButtonBack className='back'>Back</ButtonBack>
            <ButtonNext className='next'>Next</ButtonNext>

            </Slide>

        </Slider>
      </CarouselProvider>
    </div>
  );
}
