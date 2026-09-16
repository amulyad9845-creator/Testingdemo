//bring express in Node.js
const express=require("express")
const cors=require("cors");

//create express app using what we imported
const app=express();

//use cors middleware to handle requests
app.use(cors());
app.use(express.json());

const tasks=[
          {
              id:1,
              title:"Learn React",
              description:"Understanding Components",
              status: "Completed"
          },
          {
              id:2,
              title:"Learn JavaScript",
              description:"Understanding Variables, Functions",
              status: "Pending"
          },
      ];
app.get("/api/tasks",(req,res)=>{res.json(tasks);});

app.get("/api/tasks/:id",(req,res)=>{
    const id= Number(req.params.id);
    const task=tasks.find((task)=>task.id===id);
    if(!task){
        return res.status(404).json({message:"task not found!!"})
    }
    res.json(task);

});

app.put("/api/tasks/:id",(req,res)=>{
    const id= Number(req.params.id);
    const taskIndex=tasks.find((task)=>task.id===id);
    if(task){
        return res.status(404).json({message:"task not found!!"})
    }
    tasks.status=req.body.status ;
    res.json(tasks[taskIndex]);
});

app.post("/api/tasks",(req,res)=>{
    const newTask=req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
})
//our api route(testing)
app.get("/",(req,res)=>{
    res.send("Backend is working!!")
});
//start the server and listen to port 5000
app.listen(5000,()=>{
    console.log("Server us running on port 5000")
});