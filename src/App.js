import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const poemUrl = "http://localhost:6001/poems"

class App extends React.Component {

  state = {
    poems: [],
    display: false
  }


  componentDidMount(){

    fetch(poemUrl)
    .then(res => res.json())
    .then(data =>{
      this.setState({
        poems: data
      })
    })

  }
  handleClick =() => {
    console.log("you cant see me")
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addPoem =(e) => {
    e.preventDefault()
    console.log(e.target[1].value)
    let title = e.target[0].value
    let author = e.target[1].value
    let content = e.target[2].value

    fetch(poemUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "title": title,
        "content": content,
        "author": author
      })
    })
    .then(res => res.json())
    .then(newPoem => {
      return this.setState({
        poems: [...this.state.poems, newPoem]
      })
    })

  }
  

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.display
          ? <NewPoemForm addPoem={this.addPoem}/>
          : null
          }
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
