// react
import React, { useRef, useState } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../reducers/tasksSlice";
// react-router
import { useNavigate } from "react-router-dom";

const TaskEditForm = () => {
  const tasks = useSelector((state) => state.tasks);
  const idOfEdit = useSelector((state) => state.editTask);

  const [task, setTask] = useState(
    tasks.find((task) => task.id === idOfEdit.id)
  );
  const taskRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEditTask = () => {
    dispatch(editTask(task));
    navigate("/");
  };

  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <form
          className="row g-3"
          onSubmit={() => {
            e.preventDefault();
          }}
        >
          <div className="col-auto">
            <input
              ref={taskRef}
              type="text"
              className="form-control"
              id="task"
              placeholder="Task"
              value={task.name}
              onChange={() => {
                setTask({
                  ...task,
                  name: taskRef.current.value,
                });
              }}
            />
          </div>
          <div className="col-auto">
            <textarea
              ref={descriptionRef}
              rows={1}
              type="text"
              className="form-control mb-3"
              id="description"
              placeholder="Description"
              value={task.description}
              onChange={() => {
                setTask({
                  ...task,
                  description: descriptionRef.current.value,
                });
              }}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-dark mb-3"
              onClick={handleEditTask}
            >
              edit task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskEditForm;
