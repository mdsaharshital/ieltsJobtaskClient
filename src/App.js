import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/LoginReg/Login";
import RequireAuth from "./pages/LoginReg/RequireAuth";
import ManageProfile from "./pages/ManageProfile";
import SignUp from "./pages/LoginReg/SignUp";

function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <ManageProfile />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
