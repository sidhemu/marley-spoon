import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";
import RecipeContext from "@components/RecipeContext";

interface RecipeDetails {
  recipeId: number;
  recipeTitle: string;
  recipeDescription: string;
  recipeImgSrc: string;
  recipeCalories: number;
  recipeTags: Array<any>;
  recipeChef: any;
}
export default function MyApp({ Component, pageProps }) {
  const [recipeDetails, updateRecipeDetails] = useState({});
  const updateData = (data: RecipeDetails) => {
    updateRecipeDetails(data);
  };
  return (
    <RecipeContext.Provider value={{ recipeDetails: recipeDetails }}>
      <Head>
        <title>
          The cooking box for couples, families and friends ｜ Marley Spoon
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} updateData={updateData} />
    </RecipeContext.Provider>
  );
}
