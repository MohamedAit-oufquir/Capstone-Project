import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import{BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
 
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>


   </BrowserRouter>

);
