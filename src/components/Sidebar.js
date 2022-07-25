import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import auth from "./../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <Link to="/">TODO list</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      {user && (
        <li>
          <Link
            to="/login"
            onClick={() => signOut(auth)}
            className="btn btn-md btn-dark w-1/2 rounded-none"
          >
            Logout
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col bg-slate-800">
        {/* <!-- Page content here --> */}
        {children}
        <label for="my-drawer-2" class="absolute top-6 right-6 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
