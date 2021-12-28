import React,{ useState } from "react";
import Axios from 'axios';
import './App.css';
function AddMem(){
  const [tmember,setTmember]=useState('')
  const [module,setModule]=useState('')
  const [task,setTask]=useState('')
  const addEmployee=()=>{
       alert("adding")
       Axios.post("http://localhost:3001/insert",{tmember:tmember, module:module,task:task})

    }
    return(    

      <div align='center'><h1 style={{color:'purple'}}>Enter Details of Team Member</h1>
      <table align='center' border="2" style={{marginCenter:"1000px",backgroundColor:'pink'}} >

        <tr><th><label style={{color:'blue'}}>Team Member:</label></th>
        <input type="text"  style={{color:'red'}}  onChange={(event)=>{setTmember(event.target.value)}} /></tr>
  
      <tr><th><label style={{color:'blue'}}>Module:</label></th>
      <input type="text" style={{color:'red'}}   onChange={(event)=>{setModule(event.target.value)}} /></tr>   

      <tr><th><label style={{color:'blue'}}>Task:</label></th>
      <input type="text" style={{color:'red'}}  onChange={(event)=>{setTask(event.target.value)}} /></tr>

    <button style={{backgroundColor:'olive'}} onClick={addEmployee}>Submit</button>

    </table>
   </div>
   );    

}
export default AddMem;
