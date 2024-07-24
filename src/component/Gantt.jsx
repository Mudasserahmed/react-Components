import React from 'react'
import Gantt from 'react-gantt';


const GanttChart = () => {
    const tasks = [
        {
          id: 1,
          name: 'Task 1',
          start: '2024-07-01',
          end: '2024-07-10',
        },
        {
          id: 2,
          name: 'Task 2',
          start: '2024-07-05',
          end: '2024-07-15',
        },
        // Add more tasks as needed
      ];
      return (
        <div>
          <h2>My Gantt Chart</h2>
          <Gantt tasks={tasks} />
        </div>
      );
    };


export default GanttChart