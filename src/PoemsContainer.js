import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {
          this.props.allPoems.map(poems => {
            return <Poem poem={poems}/>
          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
