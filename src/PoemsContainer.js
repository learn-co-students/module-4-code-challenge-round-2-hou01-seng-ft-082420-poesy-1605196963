import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
  
    return (
      <div className="poems-container">
        {
          this.props.allPoems.map(poemObj => {
            return <Poem
              poem = {poemObj}
              key = {poemObj.id}
              title = {poemObj.title}
              content = {poemObj.content}
              author = {poemObj.author}
              onClick = {this.props.onClick}
            />
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
