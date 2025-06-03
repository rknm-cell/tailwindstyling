import { useState } from "react";

type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

const Task = (taskProps: TaskData) => {
  const task = taskProps.task[0];
  const [checkBox, setCheckBox] = useState(false);
  console.log(task);

  

  const baseBgStyle =
    "flex flex-row items-center rounded-xl m-4 h-30 w-200 border-2 bg-white border-gray-300";
  const checkedBgStyle =
    "flex flex-row items-center rounded-xl  m-4 h-30 w-200 border-2 bg-green-100 border-gray-300";
  const checkedButtonStyle = "h-6 w-6 rounded-lg border border-lime-600 m-4 bg-lime-600 check";
  const baseButtonStyle = "h-6 w-6 rounded-lg border border-gray-400 m-4 ";
  return (
    <>
      <div id="div-task" className={checkBox ? checkedBgStyle : baseBgStyle}>
        <button
          onClick={() => setCheckBox(!checkBox)}
          id="checkbox"
          className={checkBox ? checkedButtonStyle : baseButtonStyle}
        />
        <div id="div-text" className="p-2 border border-red-400">
          <p id="title" className="text-2xl ">
            {task.title}
          </p>
          <p id="description" className="text-xl font-light ">
            {task.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task;
