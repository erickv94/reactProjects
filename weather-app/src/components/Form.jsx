import React from "react";
import { useState } from "react";

const Form = ({getWeather}) => {

  const [search, setSearch] = useState({
    city: "",
    country: ""
  });

  const handleChange = e => {
    e.preventDefault();

    setSearch({
        ...search,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e =>{
      e.preventDefault();
      console.log("click");
      getWeather(search);
  }
  return (

            <form
            onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input
                  type="text"
                  name="city"
                  id="city"
                  onChange={handleChange}
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s12">
                <select name="country" id="country" onChange={handleChange}>
                  <option value=''>-- Select a Country --</option>
                  <option value="US">USA</option>
                  <option value="MX">Mexico</option>
                  <option value="SV">El Salvador</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Peru</option>
                </select>
                <label htmlFor="city">Country</label>
              </div>
              <div className="input-field col s12">
                <button
                  type="submit"
                  className="btn waves-effect  blue darken-1 waves-light"
                >
                Search Weather
                </button>
              </div>
            </form>
         
  );
};

export default Form;
