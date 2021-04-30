import React from 'react'
import { useState } from "react";
import {postWine} from '../../services/wines'

export default function AddWine() {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    vintage: "",
    varietal: "",
    user_id: ""
  });
  const { name, img_url, vintage, varietal, user_id} = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "user_id" ? Number(value) : value,
      
    }));
  };



  return (
    <div>
      <h1>Add Wine</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postWine(formData);
        }}
      >
        <h3>Add a Wine</h3>
        <label>
          Name:
          <input type="text"
            name="name"
            value={name}
            onChange={handleChange} />
        </label>

        <label>
          Image Url:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>

        <label>
          Vintage:
          <input
            type="text"
            name="vintage"
            value={vintage}
            onChange={handleChange}
          />
        </label>

        <label>
          Varietal:
          <input
            type="text"
            name="varietal"
            value={varietal}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
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
  )
}
