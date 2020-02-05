import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Phrase = ({phrase}) =>{
  return(
    <div className="frase">
      <h1>{phrase.quote}</h1>
      <p>- {phrase.author}</p>
    </div>
  )
}

const App = ()=>{
  const [phrase, setPhrase]= useState({});

  const fetchData = async ()=>{
    const res = await axios("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
    setPhrase(res.data[0])
  }

  useEffect( 
    () =>{
      fetchData()
    }
  ,[])

return (
  <div className="contenedor">
    <Phrase phrase={phrase}/>
    <button
      onClick={fetchData}
    >New Phrase</button>
  </div>
)
}

export default App;
