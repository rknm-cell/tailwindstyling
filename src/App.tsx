// import { useState } from "react";
import TaskList from "./TaskList";
import MessageThread from "./MessageThread"
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
        <div id="directMessages">
          <h1 className="text-7xl m-4">Message Thread</h1>
          <MessageThread />
        </div>
        <div id="taskList">
          <h1 className="text-7xl m-4">Task List</h1>
          <p className="text-2xl font-light ml-4"> Sorted by completion</p>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
