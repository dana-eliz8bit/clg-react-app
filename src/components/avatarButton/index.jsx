import { useContext } from "react";
import AuthContext from "../../auth/auth-context";
import classes from "./avatarButton.module.css";

const AvatarButton = ({ onClick }) => {
  const { name } = useContext(AuthContext);
  return (
    <button
      style={{
        backgroundImage: `url(https://robohash.org/${name}.png)`
      }}
      className={classes["avatar-button"]}
      onClick={onClick}
    />
  );
};

export default AvatarButton;