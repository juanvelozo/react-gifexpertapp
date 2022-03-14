import React, { useState } from "react";
import AddCategories from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h2 className="title">GifExpertApp</h2>
      <p className="description">Buscador de Gifs online</p>
      <AddCategories setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
export default GifExpertApp;
