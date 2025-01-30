import TaskItems from "./TaskItems";
import { Task } from "../src/Todo"; 
type TaskListProps = {
    taskList: Task[]; 
    deleteTask: (taskIndex: number) => void; 
    completeTask: (taskIndex: number) => void; 
  };

export default function TaskList({taskList,deleteTask,completeTask}: TaskListProps) {
    return (
        <ul>
            {taskList.map((currTask,index)=>{
               return <TaskItems key = {index} currTask = {currTask} deleteTask={deleteTask} completeTask={completeTask} index = {index}/>
            })
            }
        </ul>
        
    );
  }
  