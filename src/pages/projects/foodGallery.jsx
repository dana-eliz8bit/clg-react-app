import FoodList from "../../components/foodList/index";

import classes from "../../components/foodList/foodListItem.module.css";

const FoodGallery = () => {
  return (
    <section>
      <h2>Food</h2>
      <div className={classes["flex-group"]}>
        <FoodList />
      </div>
    </section>
  );
};

export default FoodGallery;
