import classes from "./booksButton.module.css";

const BooksButton = (props) => {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default BooksButton;