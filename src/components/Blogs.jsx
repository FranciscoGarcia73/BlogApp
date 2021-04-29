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

function Blogs(props) {
  const value = useParams();
  const blogSelect = props.blogs.filter((blog) => blog._id == value.idBlog);
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
              <div class="post-heading">
                <h1>{blog.titulo}</h1>
                <h2 class="subheading">{blog.categoria}</h2>
                <span class="meta">
                  Posted by {blog.nombre} on {blog.fecha}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <article>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <p className="texto">{blog.texto}</p>
            </div>
          </div>
        </div>
      </article>
      <hr />
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
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

export default Blogs;
