import React from "react";
import { useState } from "react";
import api from '../services/api.helper'
// import { postWine } from '../services/wines'

export default function AddWine() {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    vintage: "",
    varietal: ""
  });
  const { name, img_url, vintage, varietal } = formData;

  const postWine = async (wineData) => {
    const resp = await api.post('/wines', { wine: wineData });
    return resp.data;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
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
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}
