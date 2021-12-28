
import React from 'react';
import Project from './project';
import Team from './team';

import './App.css';

import ListTeam from './status';
import DelMem from './deltask';
import UpdMem from './updtask';
import FindMem from './findtask';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
function Home(){
     return(<div className="body1" align='left'>
       <p >Define Your Goals.First things first: decide what you want to achieve.Put thought into the goals of the project.
Identify Your Team Members.The second step on the ladder to beginning any project is the identification of the various team members to be involved.
Define Your Work. What is the actual work you will need to do in order to achieve your goals? Develop Your Plan. Create an actionable, systematic, and logical plan that you know you can achieve.
 Delegate (smartly) So simple, yet so vital! Delegating work will not only allow you to work faster but it will also develop the skills of the rest of the
 Execute and Monitor. The final step is to get working on your project and monitor it continuously throughout the process using a project management tool.</p>

  </div>);

}
function App(){
  return(
  <div>
    <React.Fragment>
      <Router>

    <center>
      <div >
        <h1 style={{color:"red"}} align="center">Project Planning</h1>
      
             <button className='button'><Link to="/home">Home</Link></button> 
             <button className='button'><Link to="/project">Modules</Link></button>
             <button className='button'><Link to="/team">Add</Link> </button>
             <button className='button'><Link to="/updtask">Update</Link> </button>
             <button className='button'><Link to="/deltask">Delete</Link> </button>
             <button className='button'><Link to="/findtask">Find</Link> </button>
             <button className='button'><Link to="/status">Status</Link> </button>

          <Route path="/home" component={Home}/>
          <Route path="/project" component={Project} />
          <Route path="/team" component={Team} />
          <Route path="/updtask" component={UpdMem}/>
          <Route path="/deltask" component={DelMem}/>
          <Route path="/findtask" component={FindMem}/>
          <Route path="/status" component={ListTeam}/>

        </div>
        </center>
    </Router>
    </React.Fragment>

    </div>
    );
}
export default App;


