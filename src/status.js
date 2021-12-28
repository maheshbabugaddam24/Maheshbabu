


import React from "react";
class ListTeam extends React.Component {  
  // Constructor
    constructor(props) {
      super(props);  
      this.state = {    items: [],  DataisLoaded: false    };

    }
    // ComponentDidMount is used to  execute the code
    componentDidMount() {
      fetch("http://localhost:3001/show").then((res) => res.json()).then((json) => {
        this.setState({items: json, DataisLoaded: true });
      })

    }
    render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div>

      return (
      <div>
        <h1 style={{color:'green'}} >List of project Record</h1>
        <table border='1' align='center' style={{marginCenter:"1000px",backgroundColor:'orange'}}>
          <tr><th>Team Member</th><th>Module</th><th>Task Status</th></tr>

         {             
         items.map((item) => (
            <tr key = {item._id} >
            <td style={{color:'blue'}} >{item.tmember}</td>
            <td style={{color:'blue'}}>{item.module}</td>
            <td style={{color:'blue'}}>{item.task}</td>

        </tr>
        ))        
      }
          </table>
          </div>
      );
    }
  }  
export default ListTeam;
