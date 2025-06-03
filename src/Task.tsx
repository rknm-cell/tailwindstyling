import { useState } from "react";

type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

const Task = (taskProps: TaskData) => {
  const task = taskProps.task[0]
  const [checkBox, setCheckBox] = useState(false);
  console.log(task);


  return (
    <>
      <div id="div-task" className="border flex flex-row items-center rounded-xl bg-gray-100 h-30 w-200">
        <button onClick={() => setCheckBox(!checkBox)} id="checkbox" className="h-6 w-6 bg-gray-100 rounded border-2 border-gray-400 m-4"></button>
        <div id="div-text" className="p-2 border border-red-400">
          <p id="title" className="text-lg ">{task.title}</p>
          <p id="description" className="text-sm">{task.description}</p>
        </div>
      </div>
    </>
  );
};

export default Task;
