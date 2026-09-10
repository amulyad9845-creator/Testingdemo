function TaskCard(props) {
    return(
        <div className="task-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.progress}</p>
            <button onClick={props.onToggle}>Change status </button>
        </div>
    );
}
export default TaskCard;
