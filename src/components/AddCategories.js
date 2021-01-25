import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleIpuntChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        if(inputValue.trim().length >1){
            setCategories( categories => [ inputValue, ...categories, ] );
            setInputValue('');
        }
    }
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input className="result" type="text" placeholder="Buscar gifs" value={inputValue} onChange={handleIpuntChange}/>
    </form>
  );
};
AddCategories.propTypes ={
    setCategories: PropTypes.func.isRequired
}
export default AddCategories;
 