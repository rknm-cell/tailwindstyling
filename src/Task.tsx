import type { TaskData } from "./App";

type TaskProps = {
  taskData: TaskData
  updateCheck: (id: number) => void
}

const Task = ({ taskData, updateCheck}: TaskProps) => {
  // const [checkBox, setCheckBox] = useState(checked);

  const baseBgStyle =
    "flex flex-row items-center rounded-xl m-4 h-30 w-170 border-2 bg-white border-gray-300";
  const checkedBgStyle =
    "flex flex-row items-center rounded-xl  m-4 h-30 w-170 border-2 bg-green-100 border-gray-300";
  const checkedButtonStyle =
    "h-10 w-10 rounded-xl border border-gray-400 bg-lime-600 ml-7 mr-4";
  const baseButtonStyle =
    "h-10 w-10 rounded-xl border border-gray-400 ml-7 mr-4 ";

  return (
    <>
      <div id="div-task" className={taskData.checked ? checkedBgStyle : baseBgStyle}>
        <button
          onClick={() => updateCheck(taskData.id)}
          id="checkbox"
          className={taskData.checked ? checkedButtonStyle : baseButtonStyle}
        />
        <div id="div-text" className="p-2">
          <p id="title" className="text-2xl ">
            {taskData.title}
          </p>
          <p id="description" className="text-xl font-light text-gray-500 ">
            {taskData.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task;
