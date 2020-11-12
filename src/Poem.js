import React from "react";

class Poem extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
    <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.author}</strong>
        </p>
    <button onClick={this.props.readPoems}>READ</button>
      </div>
    );
  }
}

export default Poem;
