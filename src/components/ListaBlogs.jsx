import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import background from "../images/home-bg.jpg";
import "./styles/blog.css";
import "./styles/blog-min.css";

function ListaBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blogs", {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiJGcmFuIiwiY2FkdWNhIjoxNjIyMjI5MDM1LCJpYXQiOjE2MTk2MzcwMzV9.CjkOxlicrjUo5J1yRqSKGPXG8RwnwyS_vD27PFbaIi8",
        },
      })
      .then((response) => {
        console.log(response);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <div className="site-heading">
                <h1>Proyecto Final Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {blogs.map((blog) => (
              <div className="post-preview">
                <NavLink to={{ pathname: "/blogs/" + blog._id }}>
                  <h2 className="post-title">{blog.titulo}</h2>
                  <h3 className="post-subtitle">{blog.categoria}</h3>
                </NavLink>
                <p className="post-meta">
                  Posted by {blog.nombre} on {blog.fecha}
                </p>
                <hr />
              </div>
            ))}
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">
                Older Posts &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto" id="about">
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

export default ListaBlogs;
