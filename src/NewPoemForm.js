import React from "react";

class NewPoemForm extends React.Component {
  state = {
    showform: true,
    title: "",
    author: "",
    content: ""

  }
  handleChange = (e) => {
    this.setState({
      [e.target.placeholder]: e.target.value
    })

  }
  
  handleClick = () => {
    let newBool = !this.state.showform
    this.setState({
      showform: newBool
    })
    }
    //this.props.addNewPoem(this.state)
  

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewPoem(this.state)

  }

  render() {
    
    return (
      <form className="new-poem-form"onClick={(e) => this.handleClick(e)}>
        {this.state.showform ? this.state.showform : !this.state.showform}
        <input placeholder="Title" onChange={this.handleChange} />
        <input placeholder="Author" onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" onSubmit={(e) => this.handleSubmit(e)} />
      </form>
    );
  }
}

export default NewPoemForm;
