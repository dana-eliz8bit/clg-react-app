import { useContext } from "react";
import AuthContext from "../auth/auth-context";
import BooksButton from "../components/booksButton";

const Profile = () => {
  const { onLogout, name, email } = useContext(AuthContext);

  return (
    <section>
      <h1>User Settings</h1>
      <h2>{name}</h2>
      <p>{email}</p>
      <BooksButton onClick={onLogout}>Sign Out</BooksButton>
    </section>
  );
};

export default Profile;
