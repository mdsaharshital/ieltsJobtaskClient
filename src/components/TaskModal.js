import React from "react";

const TaskModal = () => {
  const taskToDo = (e) => {};
  return (
    <>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <form onSubmit={taskToDo}>
            <input
              type="text"
              placeholder="Task to do here"
              class="input input-bordered w-full max-w-xs mt-2"
            />
            <select class="select select-bordered w-full max-w-xs mt-2">
              <option disabled selected>
                Select status
              </option>
              <option>TODO</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
            <select class="select select-bordered w-full max-w-xs mt-2">
              <option disabled selected>
                Importance
              </option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskModal;
