import React from "react";

import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";

import background from "../images/newposted.jpg";
import "./styles/blog.css";
import "./styles/blog-min.css";

function Posted() {
  const { register, handleSubmit } = useForm();
  const routerHistory = useHistory();

  function enviarPost(data) {
    axios
      .post("http://localhost:3000/api/blogs", data, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiJGcmFuIiwiY2FkdWNhIjoxNjIyMjI5MDM1LCJpYXQiOjE2MTk2MzcwMzV9.CjkOxlicrjUo5J1yRqSKGPXG8RwnwyS_vD27PFbaIi8",
        },
      })
      .then((response) => {
        console.log(response);
        routerHistory.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
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
              <div className="page-heading">
                <h1>Nuevo Post</h1>
                <span className="subheading">
                  Alguna pregunta? Tenemos las respuestas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form
              name="sentMessage"
              id="contactForm"
              novalidate
              onSubmit={handleSubmit(enviarPost)}
            >
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    id="name"
                    required
                    data-validation-required-message="Please enter your name."
                    {...register("nombre")}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    id="title"
                    required
                    data-validation-required-message="Please enter title."
                    {...register("titulo")}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Categoria</label>
                  <input
                    type="texto"
                    className="form-control"
                    placeholder="Categoria"
                    id="phone"
                    required
                    data-validation-required-message="Please enter category."
                    {...register("categoria")}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls">
                  <label>Texto</label>
                  <textarea
                    rows="10"
                    cols="30"
                    className="form-control"
                    placeholder="Texto"
                    id="texto"
                    required
                    data-validation-required-message="Please enter a post."
                    {...register("texto")}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessageButton"
              >
                Crear Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posted;
