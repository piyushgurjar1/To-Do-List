import { Task } from "../src/Todo"; 
type TaskListProps = {
    taskList: Task[]; 
    deleteTask: (taskIndex: number) => void; 
    completeTask: (taskIndex: number) => void; 
    index: number; 
    currTask: Task; 
  };

export default function TaskList({taskList,deleteTask,completeTask}: TaskListProps) {
    return (
        <ul>
            {taskList.map((currTask,index)=>{
               return (
                <div style={{ display: "flex items-center mb-2" }}>
                <div className={`mx-4 ${currTask.completed ? "line-through text-gray-500" : "text-white"}`}>
                  {currTask.task}
                </div>
                <button onClick={() => completeTask(index)}>Complete</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
               )
            })
            }
        </ul>
        
    );
  }
  