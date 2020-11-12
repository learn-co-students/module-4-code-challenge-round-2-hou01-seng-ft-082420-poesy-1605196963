import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    allPoems: [],
    read: false
  }

  componentDidMount () {
    fetch("http://localhost:6001/poems")
    .then(r => r.json())
    .then(allPoems => {
      this.setState({allPoems})
    })
  }

  addNewPoem = (poem) => {
    let postOption ={
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(poem),
    }
    fetch("http://localhost:6001/poems", postOption)
    .then(r => r.json())
    .then(newPoem => {
      this.setState({
        allPoems: [...this.state.allPoems, newPoem]
          })
    })
  }
  readPoems = () => {
    this.setState(
      prevState => {
        return {read: !prevState.read}
      }
    )
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button>Show/hide new poem form</button>
          {false && <NewPoemForm addNewPoem={this.addNewPoem}/>}
        </div>
        <PoemsContainer allPoems={this.state.allPoems} />
      </div>
    );
  }
}

export default App;



