import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state={
    click: false,
    poem: []
  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        poem: data
      })
    })
  }

  addPoem=(poem)=>{
    console.log(poem.target[0].value)
    let title = poem.target[0].value
    let auth = poem.target[1].value
    let cont = poem.target[2].value


    fetch('http://localhost:6001/poems',{
      method: 'Post',
      headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        'title': title,
        "content":cont,
        "author": auth
      })
    })
    .then(res => res.json())
    .then(newpoem =>{
      return this.setState({
        poem: [...this.state.poem, newpoem]
      })
    })
  }

  delete=(poem)=>{
    console.log("delete")
    let pd = this.state.poem.filter(p => p.id !== poem.id)

    fetch(`http://localhost:6001/poems/${poem.id}`,{
      method: 'DELETE'
    })
    .then(this.setState({poem: pd}))
  }

  handleClick=()=>{
    let clicked = !this.state.click
    this.setState({
      click: clicked
    })
  }
  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.click && <NewPoemForm addPoem={this.addPoem}/>}
        </div>
        <PoemsContainer poem={this.state.poem} delete={this.delete}/>
      </div>
    );
  }
}

export default App;
