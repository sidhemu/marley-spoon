import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

interface Recipe {
  recipeId: number;
  recipeTitle: string;
  recipeDescription: string;
  recipeImgSrc: string;
  recipeCalories: number;
  recipeTags: Array<any> | undefined;
  recipeChef: any | undefined;
}
interface Props {
  recipes: Array<any>;
  navigateToRecipePage: (obj: Recipe) => void;
}

const CardConatiner: React.FC<Props> = ({ recipes, navigateToRecipePage }) => {
  return (
    <div>
      <header className={styles.header}>
        <h2>List of Recipes</h2>
      </header>
      <div className={styles.card_container}>
        {recipes.map((recipe: any) => {
          let recipeDetails: Recipe = {
            recipeId: recipe.sys.id,
            recipeTitle: recipe.fields.title,
            recipeDescription: recipe.fields.description,
            recipeImgSrc: recipe.fields.photo.fields.file.url,
            recipeCalories: recipe.fields.calories,
            recipeTags: recipe.fields.tags,
            recipeChef: recipe.fields.chef,
          };
          return (
            <Card
              key={recipe.sys.id}
              details={recipeDetails}
              displayRecipe={navigateToRecipePage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardConatiner;
