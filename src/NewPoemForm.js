import React from "react";

class NewPoemForm extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "",
      content: "",
      author: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addData(this.state)
  }


  render() {
    return (
      <form onSubmit = {(e) => this.handleSubmit(e)} className="new-poem-form">
        <input placeholder="Title" name = "title" value = {this.state.title} onChange ={(e) => this.handleChange(e)}/>
        <input placeholder="Author" name = "author" value = {this.state.author} onChange ={(e) => this.handleChange(e)}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name = "content" value = {this.state.content} onChange ={(e) => this.handleChange(e)}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
