import React from "react";

class Poem extends React.Component {
  state={
    read: true
  }

  handleRead=()=>{
    let boo = !this.state.read
    this.setState({
      read: boo
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleRead}>{this.state.read ? "Mark as read" : "Mark as unread" }</button>
        <button onClick={(e)=> this.props.delete(this.props.poem)}>Delete</button>
      </div>
    );
  }
}

export default Poem;
