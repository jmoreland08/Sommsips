import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { getAllWines } from '../../services/wines'
import { useState, useEffect } from "react";

export default function Carousel() {
const [allWines, setAllWines] = useState([]);
  let randWine = allWines[Math.floor(Math.random() * allWines.length)];

  useEffect(() => {
    const fetchWines = async () => {
      const wines = await getAllWines();
      setAllWines(wines);
      
    };
    fetchWines();
  }, [ButtonNext]);
  if (!randWine) {
    return <h1>Loading ....</h1>;
  }




  return (
    <div>
      <CarouselProvider className='carousel'
        naturalSlideWidth={25}
        naturalSlideHeight={50}
        totalSlides={3}
      >
        <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        <Slider className='slider'>
          <Slide index={0}>
            <img
            className="d-block"
            src={randWine.img_url}
            alt="First slide"
            />
            <h1> {randWine.name}</h1>
          </Slide>
          

          <Slide index={1}>
            <img
            className="d-block"
            src={randWine.img_url}
              alt="Second slide"             
            />  
            <h1> {randWine.name}</h1>
          </Slide>

          <Slide index={2}>
          <img
            className="d-block"
            src={randWine.img_url}
            alt="Third slide"
            />
            <h1> {randWine.name}</h1>
          </Slide>
       
         

        </Slider>
   
        
        

      </CarouselProvider>
    </div>
  )
}
