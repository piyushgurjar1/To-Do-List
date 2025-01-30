import { Task } from "../src/Todo"; 
type TaskItemProps = {
  currTask: Task; 
  deleteTask: (taskIndex: number) => void; 
  completeTask: (taskIndex: number) => void; 
  index: number; 
};
export default function TaskItems({currTask, deleteTask, completeTask, index}:TaskItemProps) {
  const deleteCurrentTask = () => {
    deleteTask(index);
  };
  return (
    <div style={{ display: "flex items-center mb-2" }}>
      <div className={`mx-4 ${currTask.completed ? "line-through text-gray-500" : "text-white"}`}>
        {currTask.task}
      </div>
      <button onClick={() => completeTask(index)}>Complete</button>
      <button onClick={deleteCurrentTask}>Delete</button>
    </div>
  );
}
