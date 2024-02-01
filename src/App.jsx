import TaskEditForm from "./pages/TaskEditForm";
import TaskForm from "./pages/TaskForm";
import TaskList from "./pages/TaskList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task" element={<TaskEditForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
