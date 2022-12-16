import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import classes from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { ThemeContext } from "../../theme/themeProvider";
import AuthContext from "../../auth/auth-context";
import BooksButton from "../booksButton";
import AvatarButton from "../avatarButton";

function Navigation() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);
  const { isLoggedIn } = useContext(AuthContext);
  let history = useHistory();

  return (
    <nav className={classes.nav}>
      <NavLink className={classes.title} to="/">
        Portfolio
      </NavLink>
      <ul>
        <li>
          <NavLink activeClassName={classes.active} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <ToggleSwitch
            isOn={darkMode}
            handleToggle={() => theme.setDarkMode(!darkMode)}
            leftAriaLabel="toggle dark mode"
            leftEmoji={<>&#127769;</>}
            rightAriaLabel="toggle light mode"
            rightEmoji={<>&#127774;</>}
          ></ToggleSwitch>
        </li>
        <li>
          {isLoggedIn && (
            <AvatarButton onClick={() => history.push("/profile")}>
              {/* Settings */}
            </AvatarButton>
          )}
        </li>
        <li>
          {!isLoggedIn && (
            <BooksButton onClick={() => history.push("/login")}>
              Sign In
            </BooksButton>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
