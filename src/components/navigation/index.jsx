import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { ThemeContext } from "../../theme/themeProvider";

function Navigation() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);

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
      </ul>
      <ToggleSwitch
        isOn={darkMode}
        handleToggle={() => theme.setDarkMode(!darkMode)}
      ></ToggleSwitch>
    </nav>
  );
}

export default Navigation;
