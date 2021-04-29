import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

export default function WineEdit(props) {
  const [formData, setFormData] = useState({
    name: "",
    img_url: "",
    vintage: "",
    varietal: ""
  });
  const { name, img_url, vintage, varietal } = formData;
  const { updateWine, allWines } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const oneWine = allWines.find((wine) => {
        return wine.id === Number(id);
      });
      const { name, img_url, breed } = oneWine;
      setFormData({ name, img_url, breed });
    };
    if (allWines.length) {
      prefillFormData();
    }
  }, [allWines, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateWine(id, formData);
        }}
      >
        <h3>Edit Wine</h3>
        <label>
          Name:
          <input type="text" name="name"
            value={name}
            onChange={handleChange} />
        </label>
<br/>
        <label>
          Image Url:
          <input
            type="text"
            name="img_url"
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Vintage:
          <input
            type="text"
            name="vintage"
            value={vintage}
            onChange={handleChange}
          />
        </label>
        <br/>
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
        <button>Submit</button>
      </form>
    </div>
  );
}
