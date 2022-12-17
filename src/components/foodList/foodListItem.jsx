// import Button from "../button";
import classes from "./foodListItem.module.css";

function FoodListItem(props) {
  return (
    <div className={classes["list-item"]}>
      {!props.foodData.haveTried && (
        <h3 className={classes.accent}>Must try!</h3>
      )}
      <img src={props.foodData.image} alt={props.foodData.title} />
      <h3>
        {props.foodData.title} | {""}
        {props.foodData.rating > 0 ? `${props.foodData.rating}/5` : `No Rating`}
      </h3>
      <p>{props.foodData.description}</p>
      {/* <div className={classes["flex-group"]}>
        <Button name="👍" isActive={true} />
        <Button name="👎" isActive={false} />
      </div> */}
    </div>
  );
}

export default FoodListItem;
