// import { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

export type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

function App() {
  return (
    <>
      <div className="bg-gray-100 h-dvw p-10">
        <h1 className="text-7xl m-4">Task List</h1>
        <p className="text-2xl font-light ml-4"> Sorted by completion</p>
        <TaskList />
      </div>
    </>
  );
}

export default App;
