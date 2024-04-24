import React from "react";

import { BrowserRouter } from "react-router-dom";
import AdminApp from "./components/adminApp/AdminApp";

/**
 * We set up the AdminRoute to use
 * react router in the app
 * @returns The app with the adminroute
 */
function App() {
  return (
    <BrowserRouter>
      <AdminApp />
    </BrowserRouter>
  );
}

export default App;
