import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Navbar from "./pages/Navbar";
import reducer from './redux/reducers/todos';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { combineReducers} from 'redux';
import configureStore from './redux/utlis/configureStore';
import Container from './container/container';
// const rootReducer = combineReducers({tasks: reducer/*, filter: reducerFilter*/})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Provider store={configureStore()}> <Container /> </Provider> } />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

///////////////////////////////////////store.subscribe(root);


// import { Observable } from 'rxjs';
 
// const observable = new Observable(function subscribe(subscriber) {
//   try {
//     subscriber.next(1);
//     subscriber.next(2);
//     subscriber.next(3);
//     subscriber.complete();
//   } catch (err) {
//     subscriber.error(err); // delivers an error if it caught one
//   }
// });