// react
import React from "react";

// react-router-dom
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../reducers/tasksSlice";
import { idOfEdit } from "../reducers/taskEditSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id) => {
    dispatch(idOfEdit(id));
    navigate("/edit-task");
  };

  return (
    <>
      <div className="container d-flex flex-column align-item-center justify-content-center">
        <Link to={"/create-task"} className="btn btn-dark my-3 mx-auto w-25">
          Create Task
        </Link>
        <ul>
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="rounded border border-dark p-2 mb-2"
              >
                <li>
                  <input type="checkbox" value={task.isCompleted} />
                  <p className="d-inline fw-bold"> {task.name}:</p>
                  <p className="d-inline"> {task.description}</p>
                  <div>
                    <button
                      className="btn btn-secondary p-1 me-1"
                      onClick={() => {
                        handleEditTask(task.id);
                      }}
                    >
                      edit task
                    </button>
                    <button
                      className="btn btn-secondary p-1"
                      onClick={() => {
                        handleDeleteTask(task.id);
                      }}
                    >
                      delete task
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
