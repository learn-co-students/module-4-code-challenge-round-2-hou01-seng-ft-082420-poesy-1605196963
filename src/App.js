import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
  
      showing: false,
      textValue: "Mark as read" 
    }
  }

  addData = (data) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
  }

 


  render() {
    const { showing } = this.state; 
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.setState({ showing: !showing })}>Show/hide new poem form</button>
          { showing 
                    ? <div><NewPoemForm addData = {this.addData}/></div>
                    : null
                }
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
