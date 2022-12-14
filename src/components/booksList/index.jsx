import Book from "../book";
import styles from "./booksList.module.css";

const BooksList = (props) => {
  if (props.books.length === 0) {
    return null;
  }

  return (
    <section>
      <ul className={styles["books-list"]}>
        {props.books.map((book) => (
          <Book key={book.key} name={book.name} />
        ))}
      </ul>
    </section>
  );
};

export default BooksList;