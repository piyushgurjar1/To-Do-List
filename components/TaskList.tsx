import { Task } from "../src/Todo";
type TaskListProps = {
  taskList: Task[];
  deleteTask: (taskIndex: number) => void;
  completeTask: (taskIndex: number) => void;
};

export default function TaskList({
  taskList,
  deleteTask,
  completeTask,
}: TaskListProps) {
  return (
    <ul>
      {taskList.map((currTask, index) => (
        <li key={index}  className="pb-3 mb-3 border-b border-gray-300">
          <div
            className={`flex-1 ${
              currTask.completed ? "line-through text-gray-500" : "text-white"
            }`}
          >
            <p>{currTask.task}</p>
          </div>
          <p className=" text-gray-400 mt-1"> {new Date(currTask.date).toLocaleString()} </p>
          <button onClick={() => completeTask(index)}>Complete</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

