import marked from "marked";
import Link from "next/link";
import cx from "classnames";
import { ArrowBackRounded } from "@material-ui/icons";
import styles from "./RecipeDetails.module.css";
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
  details: Recipe;
}

const RecipeDetails: React.FC<Props> = ({ details }) => {
  const postDesctiption =
    details?.recipeDescription && marked(details.recipeDescription);

  return (
    <div className={styles.main}>
      <Link href="/">
        <a className={styles.goBack_btn}>
          <ArrowBackRounded fontSize="inherit" />
          <span>Go back</span>
        </a>
      </Link>
      <header>
        <h2>Recipe Details</h2>
      </header>
      <div className={styles.container}>
        <div className={styles.img_conatiner}>
          <img src={details.recipeImgSrc} alt="" />
          <div className={styles.tags_details}>
            {details.recipeChef && (
              <p>
                <span>
                  Made by <strong>{details.recipeChef?.fields.name}</strong>
                </span>
              </p>
            )}
            <p>
              <span className={cx(styles.tag, styles.tag_yellow)}>
                {details.recipeCalories} Calories
              </span>
            </p>
            {details.recipeTags &&
              details.recipeTags.map((tag) => {
                return (
                  <span
                    key={tag.sys.id}
                    className={cx(styles.tag, styles.tag_green)}
                  >
                    {tag.fields.name}
                  </span>
                );
              })}
          </div>
        </div>
        <div className={styles.detail_conatiner}>
          <h4>{details.recipeTitle}</h4>
          {postDesctiption && (
            <section dangerouslySetInnerHTML={{ __html: postDesctiption }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
