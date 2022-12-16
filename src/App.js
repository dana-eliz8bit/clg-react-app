import { Route, Switch } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./App.css";

import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import FoodGallery from "./pages/projects/foodgallery";
import Todo from "./pages/projects/todo";
import Book from "./pages/projects/book";
import Contact from "./pages/contact";
import FourOhFour from "./pages/fourohfour";
import Footer from "./components/footer";

import { ThemeContext } from "./theme/themeProvider";
import AuthContext from "./auth/auth-context";
import Login from "./pages/login";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password, name) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setName(name);
    setEmail(email);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        name: name,
        email: email,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      <div className={darkMode ? "dark-theme" : ""}>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/projects/foodgallery">
              <FoodGallery />
            </Route>
            <Route exact path="/projects/todo">
              <Todo />
            </Route>
            <Route exact path="/projects/books">
              <Book />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            {!isLoggedIn && (
              <Route exact path={`/login`}>
                <Login />
              </Route>
            )}
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
