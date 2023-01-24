import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          path={ROUTES.LOGIN}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
