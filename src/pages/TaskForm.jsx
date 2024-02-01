// react
import React from "react";
import { useRef, useState } from "react";

// react-router
import { useNavigate } from "react-router-dom";

// redux
import { addTask } from "../reducers/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskForm = () => {
  const [task, setTask] = useState();

  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    if (task) {
      dispatch(
        addTask({
          name: task.name,
          description: task.description,
          id: tasks.length + 1,
          isCompleted: false,
        })
      );
      navigate("/");
    }
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
              ref={taskNameRef}
              type="text"
              className="form-control"
              id="task"
              placeholder="Task"
              onChange={() => {
                setTask({
                  ...task,
                  name: taskNameRef.current.value,
                });
              }}
            />
          </div>
          <div className="col-auto">
            <textarea
              ref={taskDescriptionRef}
              rows={1}
              type="text"
              className="form-control mb-3"
              id="description"
              placeholder="Description"
              onChange={() => {
                setTask({
                  ...task,
                  description: taskDescriptionRef.current.value,
                });
              }}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-dark mb-3"
              onClick={handleAddTask}
            >
              add task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
