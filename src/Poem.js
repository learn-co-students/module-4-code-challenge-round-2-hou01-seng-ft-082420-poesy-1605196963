import React from "react";

class Poem extends React.Component {

  state = {
    read: true
  }

  handleClick = () => {
    this.setState({
      read: !this.state.read
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.allPoems.title}</h3>
        <p>{this.props.allPoems.content}</p>
        <p>
          <strong>- By {this.props.allPoems.author}</strong>
        </p>
    <button onClick={this.handleClick}>{this.state.read ? "Mark as read" : "Mark as unread" }</button>
      </div>
    );
  }
}

export default Poem;
