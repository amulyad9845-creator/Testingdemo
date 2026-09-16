import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function TaskDetails(props){
   const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // FIXED: Ensured the URL template literal is clean
    fetch(`http://localhost:5000/api/tasks/${id}`)
      .then((response) => {
        if (!response.ok) { 
          throw new Error("Task Not Found");
        }
        return response.json();
      })
      .then((data) => {
        setTask(data); // Saves the fetched task successfully
      })
      .catch((error) => {
        console.log(error);
        setTask(null); // Clear data ONLY if an error actually happens
      })
      .finally(() => {
        setLoading(false); // FIXED: Only turn off the loading screen here!
      });
  }, [id]);

    if(!task){
        return <h2> Task not found </h2>
    }
    
    return (
        <div>
            <h1>Task Details</h1>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>
    );
}
export default TaskDetails;
