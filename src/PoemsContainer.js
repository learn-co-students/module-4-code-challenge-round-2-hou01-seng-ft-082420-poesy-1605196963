import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.state.poems.map(poem => <Poem poem={poem} handleRead={this.props.handleRead}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
