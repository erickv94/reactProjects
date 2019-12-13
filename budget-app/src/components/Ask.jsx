import React, {useState} from "react";
import Error from "./Error";


const Ask = ({setAppBudget,setEnableAsk,setRemaining}) => {
  const [budget, setBudget]= useState(0);
  const [error, setError] = useState(false);

  const handleChange = e=>{
      setBudget(parseInt(e.target.value,10))
  }

  const handleSubmit = e =>{
      e.preventDefault();
      if(budget <= 0 || isNaN(budget)){
          setError(true);
          return;
      }
    
      setError(false);
      setEnableAsk(false);
      setAppBudget(budget);
      setRemaining(budget);

  }
  return (
    <>
      <h2>Type your budget</h2>
      {error&& <Error message="Budget wrong"/>}
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={handleChange}
        />
        <input type="submit" value="" className="button-primary u-full-width" value="Define"/>
      </form>
    </>
  );
};

export default Ask;
