import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" onSubmit={this.props.onSubmit}>
        <input placeholder="Title" name="title"/>
        <input placeholder="Author" name="author"/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content"/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
