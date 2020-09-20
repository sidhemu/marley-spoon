import { useContext } from "react";
import RecipeContext from "@components/RecipeContext";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

const About = () => {
  const { recipeDetails } = useContext(RecipeContext);

  return (
    <div>
      <RecipeDetails details={recipeDetails} />
    </div>
  );
};

export default About;
