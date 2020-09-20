import { useRouter } from "next/router";
import { client } from "../config";
import CardConatiner from "@components/CardContainer/CardContainer";

interface Recipe {
  recipeId: number;
  recipeTitle: string;
  recipeDescription: string;
  recipeImgSrc: string;
  recipeCalories: number;
  recipeTags: Array<any> | undefined;
  recipeChef: any | undefined;
}
const Main: React.FC<any> = ({ recipes, updateData }) => {
  const router = useRouter();
  const navigateToRecipePage = (recipeObj: Recipe): void => {
    updateData(recipeObj);
    router.push({ pathname: `/${recipeObj.recipeId}` });
  };
  return (
    <div>
      <CardConatiner
        recipes={recipes}
        navigateToRecipePage={navigateToRecipePage}
      />
    </div>
  );
};

export default Main;

export const getStaticProps = async () => {
  const recipes = (await client.getEntries()).items.filter(
    (item: any) => item.sys.contentType.sys.id === "recipe"
  );
  return {
    props: {
      recipes: recipes,
    },
  };
};
