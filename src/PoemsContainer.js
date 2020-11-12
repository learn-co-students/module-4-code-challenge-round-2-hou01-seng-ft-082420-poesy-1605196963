import React from "react";
import Poem from "./Poem";

const poemUrl = "http://localhost:6001/poems"

class PoemsContainer extends React.Component {

  state = {
    allPoems: []
  }

  componentDidMount = () => {
    fetch(poemUrl)
    .then(resp => resp.json())
    .then(poem => {
      this.setState({
        allPoems: poem
      })
    })
  }
  render() {
    return (
      <div className="poems-container">
        {
          this.state.allPoems.map(poem => <Poem allPoems={poem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
