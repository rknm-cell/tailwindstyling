import React from "react";
import Task from "./Task";

type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};
const tasks: TaskData[] = [
  { id: 1, title: "Dishes", description: "Do the dishes", checked: false },
  { id: 2, title: "Kitchen", description: "Sweep the kitchen", checked: true },
  { id: 3, title: "Put away dishes", description: "Sort dishes and put them away", checked: false},
];

function TaskList() {
//   {tasks.sort(function (x, y){ return (x === y) ? 0 : x ? -1 : 1}).map((task) => <Task id={task.id} title={task.title} description={task.description} checked={task.checked}/>)}
  return (
    <div>
      {/* <Task task={tasks} /> */}
      {/* {tasks.sort(function (x, y){ return (x === y) ? 0 : x ? 1 : -1}).map((task) => <Task key={task.id} title={task.title} description={task.description} checked={task.checked}/>)} */}
      {tasks.sort(function (x, y){ return (x === y) ? 0 : x ? -1 : 1}).map((task) => <Task key={task.id} title={task.title} description={task.description} checked={task.checked}/>)}
    </div>
  );
}

export default TaskList;
