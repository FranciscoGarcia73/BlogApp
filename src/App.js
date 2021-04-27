import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';
import ListaBlogs from './components/ListaBlogs';
import Blogs from './components/Blogs';
import Posted from './components/Posted';

function App() {

   const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/blogs", {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiJGcmFuIiwiY2FkdWNhIjoxNjIwMzE1MTk2LCJpYXQiOjE2MTk0NTExOTZ9.Otc4JL__2dsBAC2_4fRs1Dne3M7IRv-jqG3JZ8APCfc",
        },
      })
      .then((response) => {
        console.log(response.data);
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
              <Blogs blogs={blogs}/>
            </Suspense>
          </Route>
           <Route path="/posted" exact>
            <Suspense fallback={<div>Cargando...</div>}>
              <Posted />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
