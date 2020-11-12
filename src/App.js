import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

const url = 'http://localhost:6001/poems'


class App extends React.Component {
  state = {
    allPoems: [],
    form: true
  }
  
  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({allPoems: data}))
  }


  onSubmit = e => { 
    e.preventDefault()
    fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: e.target.title.value,
        author: e.target.author.value,
        content: e.target.content.value
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        allPoems: [...this.state.allPoems, data]
      })
    })

  }

  form = e => {
    if(this.state.form === true){
      this.setState({
        form: false
      })

    }
    if(this.state.form === false){
      this.setState({
        form: true
      })
    }

  }

  onClick = e => {
    console.log(e.target.innerText, "omgomgomgomgomgomgomgomgomgomgpogpogpogpogpogpog")
    if(e.target.innerText === "Mark as read"){
      e.target.innerText = "Mark as unread"
    }
    else if(e.target.innerText === "Mark as unread"){
      e.target.innerText = "Mark as read"
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.form}>Show/hide new poem form</button>
          {this.state.form && <NewPoemForm addPoem={this.addPoem} handleSubmit={this.onSubmit}/>}
        </div>  
        <PoemsContainer allPoems={this.state.allPoems} onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
