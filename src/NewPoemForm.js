import React from "react";

class NewPoemForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    this.props.addPoem(e)
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}className="new-poem-form">
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
