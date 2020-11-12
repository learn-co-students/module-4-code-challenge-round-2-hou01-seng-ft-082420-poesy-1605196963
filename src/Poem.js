import React from "react";

class Poem extends React.Component {

  state = {
    isClicked: false
  }

  // handleClick = () => {
  //   this.setState({
  //     isCLicked: !this.state.isClicked
  //   })
  // }

  render() {
    return (
      <div>
        <h3>{this.props.poemInfo.title}</h3>
        <p>{this.props.poemInfo.content}</p>
        <p>
          <strong>- {this.props.poemInfo.author}</strong>
        </p>
        <button onClick={this.state.isClicked ? "Unread" : "Read"}>Mark as Read</button>
          
      </div>
    );
  }
}

export default Poem;
