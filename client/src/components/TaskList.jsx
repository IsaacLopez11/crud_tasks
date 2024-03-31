import { useEffect, useState } from "react";
import { getAllTask } from '../api/task.api.js';

import { TaskCard } from "./TaskCard.jsx";


export function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            try {
                const res = await getAllTask();
                console.log(res);
                setTasks(res.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        }
        loadTasks();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            )
            )
            }
        </div>
    );
}
