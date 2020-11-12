import React from "react";

class NewPoemForm extends React.Component {
handleSubmit = (e)=>{

  e.preventDefault()
  this.props.addPoem(e)
}

  render() {
    return (
      <form className="new-poem-form"onSubmit={(e)=>{this.props.handleSubmit(e)} } >
  
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
