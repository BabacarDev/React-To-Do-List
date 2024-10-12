import React, {useState} from 'react';



function ToDoList(){
     const [tasks, setTasks] = useState(["Eat BreakFast", "Take a Shower", "Walk the Dog"]);
     const [newTask, setNewTask] = useState('');

     function handleInputChange(e){
       setNewTask(e.target.value);
     }
     function AddTask(){

     }
     function DeleteTask(index){

     }
     function moveTaskUp(index){

     }
     function moveTaskDown(index){

     }




    return(
       <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input 
            type="text" 
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}/>
            <button onClick={AddTask} className='add-button'>Add Task</button>
            <ol>
              {
                tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button'
                    onClick={() => DeleteTask(index)}>
                       Delete
                    </button>
                    <button className='move-button'
                    onClick={() => moveTaskUp(index)}>
                       ⬆
                    </button>
                    <button className='move-button'
                    onClick={() => moveTaskDown(index)}>
                       ⬇
                    </button>
                </li>)
              }
            </ol>

        </div>
       </div>
    )
}


export default ToDoList