import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { putWine } from '../../services/wines'
import Layout from '../../components/Layout/Layout'
import './EditWine.css'
// import { putWine } from "../../services/wines";


export default function EditWine({allWines, setAllWines}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    vintage: "",
    varietal: "",
    user_id: ""
  });
  const { name, img_url, vintage, varietal, user_id } = formData;
  const { id } = useParams();

  
  useEffect(() => {
    const prefillFormData = () => {
      const oneWine = allWines.find((wine) => {
        return wine.id === Number(id);
      });
      const { name, img_url, vintage, varietal, user_id } = oneWine;
      setFormData({ name, img_url, vintage, varietal, user_id });
    };
    if (allWines.length) {
      prefillFormData();
    }
  }, [allWines, id]);

  const updateWine = async (id, wineData) => {
    const updatedWine = await putWine(id, wineData);
    setAllWines(prevState => prevState.map(wine => {
        return wine.id === Number(id) ? updatedWine : wine
      })
    )
    history.push('/wines');
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }



  


  return (
      <Layout>
      <div className="edit-wine">
        <form
          id="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            updateWine(id, formData);
          }}
        >
          <h3 className="form-header">Edit a Wine</h3>
         
           
          <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={handleChange} />
          

         
            
            <input
              className="input"
              type="text"
              name="img_url"
              value={img_url}
              onChange={handleChange}
            />
         

          
            
            <input
              className="input"
              type="text"
              name="vintage"
              value={vintage}
              onChange={handleChange}
            />
        
           
            <input
              className="input"
              type="text"
              name="varietal"
              value={varietal}
              onChange={handleChange}
            />
         
          <input
              className="input"
              type="number"
              name="user_id"
              value={user_id}
              onChange={handleChange}
            />
          
          <button className="edit-button">Submit</button>
        </form>
      </div>
      </Layout>
    )
  
}