import React, { useState } from 'react';

import styles from './QuickTasks.scss';

import { v4 as uuidv4 } from 'uuid';

function QuickTasks({ tasks }) {
  const [newTask, setNewTask] = useState('');
  const [quickTaskList, setQuickTaskList] = useState([]);

  console.log(newTask);
  console.log(quickTaskList);

  const inputNewTask = (value) => {
    setNewTask(value);
  };

  const addNewQuickTask = () => {
    const newQuickTask = {
      id: uuidv4(),
      content: newTask,
      data: new Date(),
      status: 'inProgress',
    };
    setQuickTaskList((prev) => {
      return [...prev, newQuickTask];
    });
    setNewTask('');
  };

  return (
    <div className={styles.quickTasks}>
      <h2 className={styles.quickTasks__title}>Fast Tasks</h2>
      <div className={styles.quickTasks__addNewTask}>
        <input
          className={styles.quickTasks__inputNewTask}
          placeholder="Write new task"
          value={newTask}
          onChange={(event) => inputNewTask(event.target.value)}
        ></input>
        <button
          className={styles.quickTasks__addNewTaskBtn}
          onClick={addNewQuickTask}
        >
          GO
        </button>
      </div>
      <div className={styles.quickTasks__list}>
        {quickTaskList.length > 0 ? (
          quickTaskList.map((task, index) => (
            <div key={index} className={styles.quickTask}>
              {task.content}
            </div>
          ))
        ) : (
          <h2 className={styles.quickTasks__empty}>No quick tasks yet</h2>
        )}
      </div>
    </div>
  );
}

export default QuickTasks;