import { useState } from "react";

const Task = ({title, description, checked}) => {
  const [checkBox, setCheckBox] = useState(checked);

  const baseBgStyle =
    "flex flex-row items-center rounded-xl m-4 h-30 w-200 border-2 bg-white border-gray-300";
  const checkedBgStyle =
    "flex flex-row items-center rounded-xl  m-4 h-30 w-200 border-2 bg-green-100 border-gray-300";
  const checkedButtonStyle =
    "h-10 w-10 rounded-lg border border-lime-600 m-4 bg-lime-600 check";
  const baseButtonStyle = "h-10 w-10 rounded-lg border border-gray-400 ml-5 mr-4 ";
  return (
    <>
      <div id="div-task" className={checkBox ? checkedBgStyle : baseBgStyle}>
        <button
          onClick={() => setCheckBox(!checkBox)}
          id="checkbox"
          className={checkBox ? checkedButtonStyle : baseButtonStyle}
        />
        <div id="div-text" className="p-2">
          <p id="title" className="text-2xl ">
            {title}
          </p>
          <p id="description" className="text-xl font-light text-gray-500 ">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task;
