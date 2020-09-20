import { useState } from "react";
import "../styles/globals.css";
import RecipeContext from "@components/RecipeContext";
export default function MyApp({ Component, pageProps }) {
  const [recipeDetails, updateRecipeDetails] = useState({});
  const updateData = (data) => {
    updateRecipeDetails(data);
  };
  return (
    <RecipeContext.Provider value={{ recipeDetails: recipeDetails }}>
      <Component {...pageProps} updateData={updateData} />
    </RecipeContext.Provider>
  );
}
