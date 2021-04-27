import React from "react";

import axios from "axios";
import { NavLink } from "react-router-dom";

import { useForm } from "react-hook-form";

import background from "../images/newposted.jpg";
import "./styles/blog.css";
import "./styles/blog-min.css";

function Posted() {
  const { register, handleSubmit } = useForm();

  function enviarCliente(data) {
    console.log(data);
    axios
      .post("http://localhost:3000/api/blogs", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
              <div class="page-heading">
                <h1>Nuevo Post</h1>
                <span class="subheading">
                  Alguna pregunta? Tenemos las respuestas.
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <form
              name="sentMessage"
              id="contactForm"
              novalidate
              onSubmit={handleSubmit(enviarCliente)}
            >
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                    id="name"
                    required
                    data-validation-required-message="Please enter your name."
                    {...register("nombre")}
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Titulo</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Titulo"
                    id="title"
                    required
                    data-validation-required-message="Please enter title."
                    {...register("titulo")}
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group col-xs-12 floating-label-form-group controls">
                  <label>Categoria</label>
                  <input
                    type="texto"
                    class="form-control"
                    placeholder="Categoria"
                    id="phone"
                    required
                    data-validation-required-message="Please enter category."
                    {...register("categoria")}
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Texto</label>
                  <textarea
                    rows="10"
                    cols="30"
                    class="form-control"
                    placeholder="Texto"
                    id="texto"
                    required
                    data-validation-required-message="Please enter a post."
                    {...register("texto")}
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <button
                type="submit"
                class="btn btn-primary"
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
