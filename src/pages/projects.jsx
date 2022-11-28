import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      <div>
        <Link to="/projects/foodgallery">Food Gallery</Link>
      </div>
      <div>
        <Link to="/projects/todo">To Do List</Link>
      </div>
    </section>
  );
};

export default Projects;
