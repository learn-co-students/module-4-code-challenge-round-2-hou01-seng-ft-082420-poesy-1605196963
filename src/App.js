import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
      poems: [],
      addPoem: true,
      
    }
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poems => {
      //let arr = 
      this.setState({
        poems: poems
      })

    })
  }

  addPoem = (e) => {
    let newPoem = {
      title: e.target.title.value,
      content: e.target.content.value,
      author: e.target.author.value,
     
    }
  
    fetch('http://localhost:6001/poems', {
      method:'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(newPoem)
    })
    .then(res => res.json())
    .then(newestPoem => {
      this.setState({
        poems:[...this.state.poems, newestPoem]
      })
    })

    
    
    
    }
    render() {
      return (
        <div className="app">
        <div className="sidebar">
        <button>{this.state.addPoem}</button>
        {true && <NewPoemForm addPoem = {this.state.addPoem} />}
        </div>
        <PoemsContainer poems = {this.state.poems}/>
        </div>
        );
      }
    }
    
export default App;
