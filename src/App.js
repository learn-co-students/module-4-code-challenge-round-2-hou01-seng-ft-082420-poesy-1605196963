import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
      .then(res => res.json())
      .then(poemData => {this.setState({poems: poemData})})
  }

  onSubmit = event => {
    event.preventDefault();
    console.log(event.target.title.value)
    fetch('http://localhost:6001/poems', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: event.target.title.value,
        content: event.target.content.value,
        author: event.target.author.value
      })
    })
    .then(res => res.json())
    .then(data => {
      let poems = [...this.state.poems, data]
      this.setState({poems: poems})
    })
  }

  handleRead = event => {
    console.log(event.target.innerText)
    const text = event.target.innerText

    if(text === "Mark as read"){
      event.target.innerText = "Mark as unread"
    }else{
      event.target.innerText = "Mark as read"
    }
  }

  handleForrm = event => {
    if(this.state.showForm === false){
      this.setState({showForm: true})
    }else{
      this.setState({showForm: false})
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleForrm}>Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm onSubmit={this.onSubmit}/>}
        </div>
        <PoemsContainer state={this.state} handleRead={this.handleRead}/>
      </div>
    );
  }
}

export default App;
