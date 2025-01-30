import { useState } from 'react';
import TodoForm from "../components/TodoForm";
import TaskList from "../components/TaskList";

export type Task = {
  task: string;
  completed: boolean;
};

export default function Todo() {
  const [taskList, setTaskList] = useState([
    { task: "this is first", completed: true },
    { task: "this is second", completed: false },
    { task: "this is third", completed: false },
  ]);

  const addTask = (newTask:string) => {
    if (!newTask.trim()) {
      return;
    }
  
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { task: newTask, completed: false },
    ]);
  };


  const deleteTask = (taskIndex:number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((_, index) => index !== taskIndex)
    );
  };

  const completeTask = (taskIndex:number) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList]; 
      updatedTaskList[taskIndex].completed = true; 
      return updatedTaskList; 
    });
  };
  

  return (
    <>
      <TodoForm addTask={addTask} />
      <TaskList taskList={taskList} deleteTask={deleteTask} completeTask={completeTask}/>
    </>
  );
}
