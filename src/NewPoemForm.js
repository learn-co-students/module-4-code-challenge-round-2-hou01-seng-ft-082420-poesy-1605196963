import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target[0].value, e.target[1].value, e.target[2].value,)
    this.setState({
      title: e.target[0].value,
      content: e.target[1].value,
      author: e.target[2].value
    })
    
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type":"application/json",
        "accept":"application/json"
      },
      body: JSON.stringify()
    })
    .then(resp => resp.json())
    .then(post => console.log(post))
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit} >
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
