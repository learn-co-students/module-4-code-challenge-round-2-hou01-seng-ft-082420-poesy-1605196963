import React from "react";

class Poem extends React.Component {

constructor() {
  super()
  this.state = {
    text: "Mark as Read"
  }
}


changeText = (text) => {

  this.setState({ text }); 
}


  render() {
    const { text } = this.state
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button 
     onClick={ () => { this.changeText("Mark as unread")}  }> {text} </button>
     <button onClick = {() => this.props.deleteContent(this.props.poem.id)}>DeleteME:)</button>
      </div>
    );
  }
}

export default Poem;
