import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

constructor(){
  super()
  this.state = {
    poems: []
  }
}

  componentDidMount() {
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        poems: data
      })
    })
  }

  deleteContent = (id) => {
    fetch(`http://localhost:6001/poems/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        poems: this.state.poems.filter(poem => poem.id !== id)
      })
    })
  }

  render() {
console.log(this.state.poems.length)
    return (
      <div className="poems-container">
        {
         this.state.poems.map(poem => <Poem poem = {poem} key = {poem.id} deleteContent = {this.deleteContent} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
