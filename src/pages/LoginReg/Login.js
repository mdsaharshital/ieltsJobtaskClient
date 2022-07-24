import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-[110vh]">
      <div className="bg-slate-700 w-80 p-4">
        <h1 className=" text-xl text-center mb-4 text-white font-bold">
          Login Here
        </h1>
        <div className="">
          <form className="mx-auto">
            <input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-xs mt-2 block mx-auto"
            />
            <input
              type="password"
              placeholder="Passwords"
              class="input input-bordered w-full max-w-xs mt-2"
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
      </div>
    </div>
  );
};

export default Login;
