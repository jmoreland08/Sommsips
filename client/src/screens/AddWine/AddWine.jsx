import React from 'react'
import { useState } from "react";
import { postWine } from '../../services/wines';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout' 
import './AddWine.css'

export default function AddWine({allWines, setAllWines}) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    vintage: "",
    varietal: "",
    user_id: ""
  });
  
  const history = useHistory()

  const { name, img_url, vintage, varietal, user_id} = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "user_id" ? Number(value) : value,
      
    }));
  };

  const updateWines = () => {
    setAllWines(prevState => ([
      ...prevState,
      formData  
    ]))
    history.push('/wines')
  } 

  return (
    <Layout>
    <div className='add-wine'>
      <form id= 'add-form'
        onSubmit={(e) => {
          e.preventDefault();
          postWine(formData);
          updateWines()
        }}
      >
        <h3>Add a Wine</h3>
        <label className='label'>
          Name:
          <input type="text"
            name="name"
            value={name}
            onChange={handleChange} />
        </label>

        <label className='label'>
          Image Url:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>

        <label className='label'>
          Vintage:
          <input
            type="text"
            name="vintage"
            value={vintage}
            onChange={handleChange}
          />
        </label>

        <label className='label'>
          Varietal:
          <input
            type="text"
            name="varietal"
            value={varietal}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className='label'>
          User Id:
          <input
            type="number"
            name="user_id"
            value={user_id}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
      </div>
      </Layout>
  )
}
