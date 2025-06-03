import { useState } from "react";
import Task from "./Task";

type TaskData = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};
const taskList: TaskData[] = [
  { id: 1, title: "Dishes", description: "Do the dishes", checked: false },
  { id: 2, title: "Kitchen", description: "Sweep the kitchen", checked: true },
  {
    id: 3,
    title: "Put away dishes",
    description: "Sort dishes and put them away",
    checked: false,
  },
];

function TaskList() {
  const [tasks, setTasks] = useState(taskList);
  const updateTasks = (id: number) => {
    const newTasks = tasks.map(task => ({...task}));
    const taskToUpdate = newTasks.find(task => task.id === id)
    if (taskToUpdate){
      taskToUpdate.checked = !taskToUpdate.checked
    }

    setTasks(newTasks);
  }

  const sortTasks = (tasks: TaskData[]) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.checked === b.checked) {
        return 0;
      }
      return a.checked ? -1 : 1;
    });
    return sortedTasks;
  };
  return (
    <div>
      {sortTasks(tasks)
        .map((task: TaskData) => (
          <Task
            updateCheck={updateTasks}
            key={task.id}
            taskData={task}
          />
        ))}
    </div>
  );
}

export default TaskList;
