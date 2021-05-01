import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import ListaBlogs from './components/ListaBlogs';
import Blogs from './components/Blogs';
import Posted from './components/Posted';
import { set } from 'react-hook-form';


function App() {

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
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact >
             <Suspense fallback={<div>Cargando...</div>}>
              <ListaBlogs blogs={blogs}/>
            </Suspense>
          </Route>
          <Route path="/blogs/:idBlog" exact>
            <Suspense fallback={<div>Cargando...</div>}>
              <Blogs blogs={blogs} />
            </Suspense>
          </Route>
           <Route path="/posted" exact>
            <Suspense fallback={<div>Cargando...</div>}>
              <Posted />
            </Suspense>
          </Route>
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
