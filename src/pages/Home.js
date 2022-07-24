import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import TaskModal from "../components/TaskModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(null);
  return (
    <div className="p-5 ">
      <h1 className="text-3xl font-bold">Tasks you got</h1>

      {/* <!-- The button to open modal --> */}
      <div className="font-bold mt-4 flex items-center btn w-36">
        <label for="my-modal-6" class="btn modal-button">
          <span className="mr-2">Add new</span>{" "}
          <span className="bg-white rounded-full p-1">
            <GrAdd />
          </span>
        </label>
      </div>

      {/* <!-- Put this part before </body> tag --> */}
      <TaskModal />
    </div>
  );
};

export default Home;
