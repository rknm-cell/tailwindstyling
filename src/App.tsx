// import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

function App() {
  return (
    <>
      <div>
        <h1 className="text-5xl p-4">Task</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
