import React,{useState} from "react";
import Axios from 'axios';
import './App.css';
function DelMem(){
    const [tmember,settmember]=useState('')
    const delEmployee=()=>{
         alert("deleting Record");
          Axios.post("http://localhost:3001/delRec",{tmember:tmember})
        }
return(
      <div><h1 >Delete Team member</h1>
      <label style={{color:"blue"}}>Team member name  to delete:</label>
      <input type="text" style={{color:"green"}}  onChange={(event)=>{settmember(event.target.value)}} />
      <button style={{color:"orange"}} onClick={delEmployee}>Delete Team member</button>
      </div>
);
}
export default DelMem;