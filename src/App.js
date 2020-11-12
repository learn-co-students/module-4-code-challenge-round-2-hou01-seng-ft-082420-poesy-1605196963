import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    hiddenForm: false
  } 

  handleForm = () => {
    this.setState({
      hiddenForm: !this.state.hiddenForm
    })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleForm}>Show/hide new poem form</button>
          {this.state.hiddenForm && <NewPoemForm />}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
