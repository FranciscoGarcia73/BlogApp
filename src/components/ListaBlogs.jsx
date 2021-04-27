import { NavLink } from "react-router-dom";

import background from "../images/home-bg.jpg";
import "./styles/blog.css";
import "./styles/blog-min.css";

function ListaBlogs({ blogs }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/posted">New Post</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header
        class="masthead"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>Proyecto Final Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            {blogs.map((blog) => (
              <div class="post-preview">
                <NavLink to={{ pathname: "/blogs/" + blog._id }}>
                  <h2 class="post-title">{blog.titulo}</h2>
                  <h3 class="post-subtitle">{blog.categoria}</h3>
                </NavLink>
                <p class="post-meta">
                  Posted by {blog.nombre} on {blog.fecha}
                </p>
                <hr />
              </div>
            ))}
            <div class="clearfix">
              <a class="btn btn-primary float-right" href="#">
                Older Posts &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto" id="about">
              <ul class="list-inline text-center">
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                    <span class="fa-stack fa-lg">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p class="copyright text-muted">
                Copyright &copy; Francisco Garcia 2021
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ListaBlogs;
