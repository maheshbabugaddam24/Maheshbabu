import React,{ useState } from "react";

import Axios from 'axios';

import './App.css';

function UpdMem(){

    const [tmember,setTmember]=useState('')

    const [module,setModule]=useState('')

    const [task,setTask]=useState('')

    const updEmployee=()=>{

        alert("updating")

        Axios.post("http://localhost:3001/update",{tmember:tmember, module:module, task:task})

    }  
    return(

        <div><h1>Update  Team Record</h1>

        <table border='2' align='center' style={{marginCenter:"1000px",backgroundColor:'orange'}}>

        <tr><th><label style={{color:'blue'}}>Member Name:</label></th>

        <input type="text"  onChange={(event)=>{setTmember(event.target.value)}} /></tr>

        <tr><th><label style={{color:'blue'}}>Module:</label></th>

        <input type="text"  onChange={(event)=>{setModule(event.target.value)}} /></tr>

        <tr><th><label style={{color:'blue'}}>Task:</label></th>

        <input type="text"  onChange={(event)=>{setTask(event.target.value)}} /></tr>       
        <button style={{color:'blue'}} onClick={updEmployee}>Update Team member </button>

        </table>

        </div>

        );

    }

export default UpdMem;