import React from "react";

class Poem extends React.Component {

  state ={
    marked: false
  }

  handleMark = () => {
    console.log ('read or not')
    let newBoolean = !this.state.marked
    this.setState({
      marked: newBoolean
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        
        <p>{this.props.poem.content}</p>
        
        <p>
          <strong>- {this.props.poem.author}</strong>
          
        </p>
        <button onClick={this.handleMark}>
          {this.state.marked
          ? "read "
          : "Mark as unread"
          }
        </button>
      </div>
    );
  }
}

export default Poem;
