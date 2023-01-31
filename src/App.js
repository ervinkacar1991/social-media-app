import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import UseAuthListener from "./hooks/use-auth-listener";

const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const { user } = UseAuthListener();
  return (
    <UserContext.Provider value={user}>
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
          <Route
            index
            path={ROUTES.NOT_FOUND}
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <NotFound />
              </Suspense>
            }
          />
          <Route
            index
            path={ROUTES.DASHBOARD}
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
