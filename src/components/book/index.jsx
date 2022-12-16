import classes from "./book.module.css";

const Book = (props) => {
  return (
    <li className={classes.Book}>
      <>{props.name}</>
    </li>
  );
};

export default Book;