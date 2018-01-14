import React, { Component } from "react";
import StoriesBuilder from "./StoriesBuilder";

class StoriesBuilderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      newCharacter: "",
      characters: []
    };
  }
  funcInputData = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addNewCharacter = event => {
    const { newCharacter, characters } = this.state;
    if (newCharacter !== "") {
      characters.push(newCharacter);
      this.setState({ characters: characters, newCharacter: "" });
    }
  };
  render() {
    const { title, content, newCharacter, characters } = this.state;
    return (
      <StoriesBuilder
        stateTitle={title}
        stateContent={content}
        funcInputData={this.funcInputData}
        stateNewCharacter={newCharacter}
        funcAddNewCharacter={this.addNewCharacter}
      />
    );
  }
}

export default StoriesBuilderComponent;
