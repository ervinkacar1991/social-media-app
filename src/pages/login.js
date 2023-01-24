import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
  const navigate = useNavigate();

  const { firebase } = useContext(FirebaseContext);

  return (
    <div>
      <h1>Login page</h1>
    </div>
  );
};

export default Login;
