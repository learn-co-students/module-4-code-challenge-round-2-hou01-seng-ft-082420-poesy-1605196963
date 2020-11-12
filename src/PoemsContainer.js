import React from "react";
import Poem from "./Poem";
//import NewPoemForm from "./NewPoemForm";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poem => <Poem poem={poem}/>)
        }
      </div>
    );
  }
}

export default PoemsContainer;
