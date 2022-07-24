import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ManageProfile from "./pages/ManageProfile";

function App() {
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<ManageProfile />}></Route>
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
