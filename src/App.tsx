import React from "react";

import { BrowserRouter } from "react-router-dom";
import AdminApp from "./components/adminApp/AdminApp";
import ContextsProvider from "./providers/ContextsProvider";

/**
 * We set up the AdminRoute to use
 * react router in the app
 * @returns The app with the adminroute
 */
function App() {
  return (
    <BrowserRouter>
      <ContextsProvider>
        <AdminApp />
      </ContextsProvider>
    </BrowserRouter>
  );
}

export default App;
