import React from "react";

class NewPoemForm extends React.Component {
  // state={
  //   author: "",
  //   content: "",
  //   title: ""
  // }

  // handleChange=(e)=>{

  //   console.log("handle change")
  //   // let {name,value} = e.target
  //   // this.setState({
  //   //   [name]: value
  //   // })
  // }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addPoem(e)
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={(e)=>this.handleSubmit(e)}>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
