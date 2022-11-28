import { NavLink } from "react-router-dom";
import classes from "./navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <NavLink className={classes.title} to="/">Portfolio</NavLink>
      <ul>
        <li>
          <NavLink activeClassName={classes.active}  to="/about">About</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active}  to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active}  to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
