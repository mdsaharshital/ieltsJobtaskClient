import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [getUser] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const signInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  // navigate
  useEffect(() => {
    if (getUser) {
      navigate(from, { replace: true });
    }
  }, [getUser, from, navigate]);
  return (
    <div className="flex justify-center items-center h-[110vh]">
      <div className="bg-slate-700 w-80 p-4">
        <h1 className=" text-xl text-center mb-4 text-white font-bold">
          Login Here
        </h1>
        <div className="">
          <form onSubmit={signInForm}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs mt-2 block mx-auto"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              class="input input-bordered w-full max-w-xs mt-2"
              required
            />
            <input
              class="input input-bordered w-full max-w-xs bg-slate-500 text-white font-bold cursor-pointer mt-8"
              type="submit"
              value="Login"
            />
          </form>
        </div>
        <p className="mt-2">
          <small>
            New Here?{" "}
            <Link to="/signup" className="underline text-blue-400">
              SignUp{" "}
            </Link>{" "}
            Now
          </small>
        </p>
        {error && (
          <p className="text-error">
            <small>{error?.message}</small>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
