import React from "react";

import { BrowserRouter } from "react-router-dom";
import AdminApp from "./components/adminApp/AdminApp";

function App() {
  return (
    <BrowserRouter>
      <AdminApp />
    </BrowserRouter>
  );
}

export default App;
