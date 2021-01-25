import React, { useState } from "react";
import AddCategories from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories = ['memes','anime','fun','movies'];
  const [categories, setCategories] = useState(["Search"]);
  // const handleAdd = () => {
  //     setCategories( [...categories, 'sad'] );
  // }

  return (
    <>
      <h2 className="title">GifExpertApp</h2>
      <p className="description">Buscador de Gifs online</p>
      <AddCategories setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
