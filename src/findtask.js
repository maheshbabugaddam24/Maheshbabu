import React,{ useState } from "react";
import Axios from 'axios';
import './App.css';
function FindMem(){
  const [tmember,settmember]=useState('')
  const [module,setmodule]=useState('')
  const [task,settask]=useState('')
  
      const findEmployee=()=>{
        alert("Searching")
        Axios.post("http://localhost:3001/findByName",{tmember:tmember, module:module,task:task}).then((res)=>{settmember(res.data.tmember); console.log(res.data.tmember); setmodule(res.data.module); console.log(res.data.module); settask(res.data.task); console.log(res.data.task)})
      }
    return(
         <div><h1>Searching Team Member</h1>
         <label>Team member</label>
         <input type="text"  onChange={(event)=>{settmember(event.target.value)}} />
         <button onClick={findEmployee}>Find Team member</button>
         <br/>
         <br/>
         <br/>
        Name:{tmember}<br/>
        Module:{module}<br/>
        Task:{task}<br/>
        
          </div>
      ); 
 }    
export default FindMem;