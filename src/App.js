import { Route, Switch } from "react-router-dom";
import "./App.css";

import Navigation from "./components/navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import FoodGallery from "./pages/projects/foodgallery";
import Todo from "./pages/projects/todo";
// import Book from "./pages/projects/book";
import Contact from "./pages/contact";
import FourOhFour from "./pages/fourohfour";
import Footer from "./components/footer";

function App() {
  return (
    <div>
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
          {/* <Route exact path="/projects/books">
            <Book />
          </Route> */}
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
