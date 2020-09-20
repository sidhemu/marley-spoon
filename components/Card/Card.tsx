import styles from "./Card.module.css";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

interface RecipeDetails {
  recipeId: number;
  recipeTitle: string;
  recipeDescription: string;
  recipeImgSrc: string;
  recipeCalories: number;
  recipeTags: Array<any>;
  recipeChef: any;
}

interface Props {
  details: RecipeDetails;
  displayRecipe: (obj: RecipeDetails) => void;
}

const Card: React.FC<Props> = ({ details, displayRecipe }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <img src={details.recipeImgSrc} alt="food-img" />
      </div>
      <div className={styles.card_body}>
        <h4>{details.recipeTitle}</h4>
      </div>
      <div className={styles.card_bottom}>
        <button
          className={styles.cta}
          onClick={() => {
            displayRecipe(details);
          }}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default Card;
