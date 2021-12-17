import React ,{useState} from 'react';
import './todo.css';
function Todo(){
   var[inputList,Setlist]=useState("");
   var[items,setitms]=useState([]); 
    function Item(event) {
        Setlist(event.target.value);
    }
    function listitem(){
      setitms((old)=>{
          return[...old,inputList]
      })
      Setlist("")
    }
    function dlt() {
        setitms("")
    }
    return(
        <>
        <div className="main">
        <div className="mid">
            <br/>
         <h1>ToDo List</h1>   
         <br/>
         <input type="text"placeholder="Add a Items" onChange={Item} value={inputList}/>
         <button onClick={listitem}>+</button>
         <ul>
             {items.map((itemval)=>{
                 return <li>{itemval}
                 <button onClick={dlt}>-</button></li>

             })}
         </ul>
         
        </div>
        </div>
        </>
    )
}
    
export default Todo;
