import React from 'react';
import ServicePage from "./pages/ServicePage";
import {BrowserRouter} from "react-router-dom"
import AppRoute from "./router/AppRoute";
function App() {
  return (
   <BrowserRouter>
       <AppRoute/>
   </BrowserRouter>
  );
}

export default App;

