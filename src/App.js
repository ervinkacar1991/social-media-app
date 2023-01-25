import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Signup from "./pages/signup";

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
        <Route
          index
          path={ROUTES.SIGN_UP}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Signup />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
