import { useState } from 'react';
import TodoForm from "../components/TodoForm";
import TaskList from "../components/TaskList";

export type Task = {
  task: string;
  completed: boolean;
  date: string;  // Add date to task
};

export default function Todo() {
  const [taskList, setTaskList] = useState<Task[]>([
    { task: "this is first", completed: true, date: "2025-01-01" },
    { task: "this is second", completed: false, date: "2025-01-02" },
    { task: "this is third", completed: false, date: "2025-01-03" },
  ]);



  const addTask = (newTask: string) => {
    if (!newTask.trim()) {
      return;
    }

    const newDate = new Date().toISOString();

    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { task: newTask, completed: false, date: newDate },
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
