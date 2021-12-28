/*  import React, {Component} from 'react'; 
class App extends Component{
  constructor(props){
    super(props);
    this.state= {module1:'',module2:'',module3:'',module4:''};
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 

  }
  handleChange(event){
    this.setState({
        [event.target.name] : event.target.value 
      })
  }
  handleSubmit(event){
    const {module1,module2,module3,module4} = this.state
    event.preventDefault();
    alert(`
      Module1: ${this.state.module1}
      Module2: ${this.state.module2}
      Module3: ${this.state.module3}
      Module4: ${this.state.module4}
           
    `)
   
    document.getElementById("sp").innerHTML= '<br/> you have submitted the input successful ' +this.state.module1;
    document.getElementById("sp").innerHTML= '<br/> you have submitted the input successful ' +this.state.module2;
    document.getElementById("sp").innerHTML= '<br/> you have submitted the input successful ' +this.state.module3;
    document.getElementById("sp").innerHTML= '<br/> you have submitted the input successful ' +this.state.module4;
  }
  render(){
    return( 
      <form onSubmit={this.handleSubmit}>
        <h1> Project info </h1>
          Module1:<input type="text" name='module1' value={this.state.module1} onChange={this.handleChange} />   <br/>
          Module2:<input type="text" name='module2' value={this.state.module2} onChange={this.handleChange} />   <br/>
          Module3:<input type="text" name='module3' value={this.state.module3} onChange={this.handleChange} />   <br/>
          Module4:<input type="text" name='module4' value={this.state.module4} onChange={this.handleChange} />   <br/>
          <button>submit</button>
          <span id='sp'></span>
      </form>
                                       
    );
  }
}

export default App; */



/* import React, {Component} from 'react';
function Friend(props){
  return<li type="1">  {props.module} </li>;
}
function Project(){
  const friends=[
    {module:'java'},
    {module:'c'},
    {module: 'c++'},
    {module:'dot net'},
    {module:'python'}
  ];
  return(
<>
    <h1 align="center" style={{color:'pink'}}> Project information </h1>
    <ul>
      {friends.map((friend)=><Friend  module={friend.module}/>)}
    </ul>
    </>
  )
}
  class App extends React.Component{
    render(){
      return(<React.Fragment><Project/></React.Fragment>);
    }

  }
export default App; */


/* import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props);
    this.state={module1:'', module2:'', module3:'', module4:'' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})

  } 
  handleSubmit(event){
    const {module1,module2,module3,module4}= this.state
    event.preventDefault()
    alert(`
    ____Your Details____\n
    Module1 : ${module1}
     Module2: ${module2}
     Module3: ${module3}
     Module4:${module4}
     `)
      document.getElementById("sp").innerHTML=this.state.module1 +'' +module2+''  +  module3+''  +module4

  } 
  render(){
    return(
       <div >
         <React.Fragment >
           <h1 style={{color:"green",marginRight:"10px"}}>Available modules in a project </h1>

  <table border="1" style={{marginCenter:"100px",backgroundColor:"pink"}} >
<tr><th><label style={{fontFamily:"serif" , color:"blue" }}>Module1</label></th><input type="text" name='module1'  value={this.state.module1} onChange={this.handleChange}/></tr>
<tr><th><label style={{fontFamily:"serif", color:"blue"}}>Module2</label></th><input  type="text" name='module2' value={this.state.module2} onChange={this.handleChange}/></tr> 
<tr><th><label style={{fontFamily:"serif" ,color:"blue"}}>Module3</label></th><input  type="text" name='module3'  value={this.state.module3} onChange={this.handleChange}/></tr>
<tr><th><label style={{fontFamily:"serif",color:"blue"}}>Module4</label></th><input type="text" name='module4'  value={this.state.module4} onChange={this.handleChange}/></tr>
<th><button style={{backgroundColor:"orange"}} onClick={this.handleSubmit} > Submit</button></th>

</table>

<span id="sp" style={{fontFamily:"serif" , color:"red" }}></span>
</React.Fragment>

</div>
)
}
}
export default App; */


import React, { Component } from "react";
class Project extends Component {
   constructor(props) {
     super(props);
     this.state = {
       selectValue: ""
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
 }
       handleDropdownChange(e) {this.setState({ selectValue: e.target.value });}
  render() {
    return (
    <div className="body" >
      <div>
        <div>
          <h1 style={{color:'blue'}}>Available Modules</h1>
             <select style={{backgroundColor:'pink'}} id="dropdown" onChange={this.handleDropdownChange}>
            <option value=" "></option>
            <option value="JavaScript">JAVA SCRIPT</option>
            <option value="React">REACT</option>
            <option value="Html">HTML</option>
            <option value="CSS">CSS</option>
            </select>

          </div>
          <div style={{color:'blue'}}>Selected Module in The Project : {this.state.selectValue}</div>
          </div>
           </div>

    );
  }
}
export default Project;
