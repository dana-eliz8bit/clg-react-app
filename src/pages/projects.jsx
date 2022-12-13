import { useRouteMatch, Link } from "react-router-dom";

const Projects = () => {
  const { url } = useRouteMatch();

  return (
    <section>
      <h1>Projects</h1>
      <div>
        <Link to={`${url}/foodgallery`}>Food Gallery</Link>
      </div>
      <div>
        <Link to={`${url}/todo`}>To Do List</Link>
      </div>
      <div>
        <Link to={`${url}/books`}>Books</Link>
      </div>
    </section>
  );
};

export default Projects;
