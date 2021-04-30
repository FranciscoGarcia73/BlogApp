import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

import cocina from "../images/cocina.jpg";
import programacion from "../images/programacion.jpg";
import deportes from "../images/deportes.jpg";
import videojuegos from "../images/videojuegos.jpg";
import motor from "../images/motor.jpg";
import defecto from "../images/defecto.jpg";

import "./styles/blog.css";
import "./styles/blog-min.css";

function Blogs({ blogs }) {
  const value = useParams();
  const blogSelect = blogs.filter((blog) => blog._id == value.idBlog);
  const blog = blogSelect[0];
  let background = "";

  switch (blog.categoria.toLowerCase()) {
    case "cocina":
      background = cocina;
      break;
    case "programacion":
      background = programacion;
      break;
    case "deportes":
      background = deportes;
      break;
    case "videojuegos":
      background = videojuegos;
      break;
    case "motor":
      background = motor;
      break;
    default:
      background = defecto;
      break;
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/posted">New Post</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{blog.titulo}</h1>
                <h2 className="subheading">{blog.categoria}</h2>
                <span className="meta">
                  Posted by {blog.nombre} on {blog.fecha}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p className="texto">{blog.texto}</p>
            </div>
          </div>
        </div>
      </article>
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">
                Copyright &copy; Francisco Garcia 2021
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blogs;
