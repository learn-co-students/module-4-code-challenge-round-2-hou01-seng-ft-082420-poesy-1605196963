import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    allPoems: [],
    displayForm: false, 
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(poems => this.setState({
      allPoems: poems
    }))
  }

  addPoem = (newPoem) => {
    let postPoem = {
      title: newPoem.title,
      author: newPoem.author,
      content: newPoem.content
    }
    fetch('http://localhost:6001/poems',{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(postPoem)
    })
    .then(res => res.json())
    .then(newPoem => {
      this.setState({
        allPoems: [...this.state.allPoems, newPoem]
      })
    })
  }

  ToggleButton = () => {
    this.setState({
      displayForm: !this.state.displayForm
    })
    
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.ToggleButton}>Show/hide new poem form</button>
          {this.state.displayForm ? 
          <NewPoemForm addPoem={this.addPoem}/> : null}
        </div>
        <PoemsContainer poemInfo = {this.state.allPoems}/>
      </div>
    );
  }
}

export default App;
