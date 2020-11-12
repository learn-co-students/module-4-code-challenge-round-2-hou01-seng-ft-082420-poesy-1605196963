import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {this.props.poemInfo.map((poem) =>(
          <Poem poemInfo= {poem}
          key = {poem.id}
          />

        ))}
      </div>
    );
  }
}

export default PoemsContainer;
