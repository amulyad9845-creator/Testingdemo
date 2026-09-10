import StatCard  from "./StatCard";
import TaskCard from "./TaskCard";
import {useState} from "react";
import AddTask from "./AddTask";

function Dashboard(){
    const [tasks, setTasks] = useState([
        { id : 1, title:"Learn React", description:"Complete the React tutorial", progress:"In Progress"},
        { id : 2, title:"Build a Project", description:"Create a simple React app", progress:"To Do"},
        { id : 3, title:"Deploy App", description:"Deploy the app to a hosting service", progress:"Completed"},
    ]); 
    function toggleTask(id){
        setTasks(
            tasks.map((task)=>{
                if(task.id === id){
                    return {...task, progress: task.progress === "Completed" ? "To Do" :
                        (task.progress === "To Do"?"In Progress":(task.progress === "In Progress"?"Completed":"To Do"))};
                }
                return task;
            })
        )
    }    
    function addTask(newTask){
        setTasks([...tasks, newTask]);

    }
    return(
        <main>
            
            <div className= "stats-container">
                <StatCard title="Total Tasks" value="10"/>
                <StatCard title="Completed" value="7"/>
                <StatCard title="Pending" value="3"/>
                <StatCard title="Time Taken" value="2 hrs" />
            </div>

            <AddTask onAddTask={addTask} />

            <h2>Recent Tasks</h2>
            <div className= "tasks-container">
                {tasks.map((task) => (
                    <TaskCard key={task.id} title={task.title} description={task.description} 
                    progress={task.progress} onToggle={() => toggleTask(task.id)} />
                        
                ))}
            </div>
        </main>

    );
}
export default Dashboard;
