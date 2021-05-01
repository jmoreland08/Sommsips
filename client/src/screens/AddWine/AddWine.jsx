import React from 'react'
import { useState } from "react";
import { postWine } from '../../services/wines';
// import {getAllUsers } from '../../services/users';
import { useHistory } from 'react-router-dom';
import Layout from '../../components/Layout/Layout' 
import './AddWine.css'

export default function AddWine({allWines, setAllWines, allUsers}) {
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
        <h3 className='form-header'>Add a Wine</h3>
    
          
          <input 
            className='input'
            type="text"
            name="name"
              value={name}
              placeholder='Name'
            onChange={handleChange} />
       
            
          <input
            className='input'
            type="text"
              name="img_url"
              placeholder='Image Url'
            value={img_url}
            onChange={handleChange}
          />
       
          <input
            className='input'
            type="text"
              name="vintage"
              placeholder='Vintage'
            value={vintage}
            onChange={handleChange}
          />

           
          <input
            className='input'
            type="text"
              name="varietal"
              placeholder='Varietal'
            value={varietal}
            onChange={handleChange}
          />
       
        
          <select  className='dropdown'
            className='select'
            name="user_id"
            value={user_id}
            onChange={handleChange}
            >
            {/* <option disable selected>
              
            </option> */}

            {allUsers.map((user) => (
              <option>{ user.name}</option>
            ))}
            </select>
       
        <button className='add-button'>Submit</button>
      </form>
      </div>
      </Layout>
  )
}
