import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState({ hasError: false, type: null });

  const getWeather = data => {
    if (data.city === "" || data.country === "") {
      setError({ hasError: true, type: "Fields must be filled" });
      return;
    }

    setError({ hasError: false, type: null });
    setCity(data.city);
    setCountry(data.country);
  };

  //effect use for errors
  useEffect(() => {
    if (error.hasError) {
      toast.error(`❌ ${error.type}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }, [error]);

  useEffect(() => {
    const getDataApI = async () => {
      const appId = "";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setError({
          hasError: true,
          type: `Error 404 not found city: ${city} on ${country}`
        });
        return;
      }

      setResponse(data);
    };
    //country or city has a content
    if (country || city) {
      getDataApI();
    }
  }, [country, city]);

  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form getWeather={getWeather} />
            </div>
            <div className="col s12 m6">
              {Object.keys(response).length != 0 && <Weather data={response} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
