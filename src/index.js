import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Navbar from "./pages/Navbar";
import reducer from './redux/reducers/todos';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Provider store={createStore(reducer)}> <App /> </Provider> } />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);