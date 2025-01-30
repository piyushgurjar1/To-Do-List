import { useState } from 'react';
type TodoFormProps = {
  addTask: (task: string) => void;  
};

export default function TodoForm({addTask}:TodoFormProps) {
    const [task, setTask] = useState("");
    const handleFormSubmission = (event:React.FormEvent)=>{
        event.preventDefault();
        addTask(task);
    }
    
    return (
      <>
        <form onSubmit={handleFormSubmission}>
          <input style={{background:"white", color:"black"}}
            type="text"
            name="todo-task"
            value = {task}
            placeholder="Enter the task"
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </>
    );
  }
  
  