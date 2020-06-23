import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { value: "Benedikt", isInEditMode: false };

  onModif = () => {
    if(this.changeEditMode === true){
      return this.updateComponentValue
    }
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
    console.log("should go to edit mode now");
  };
  updateComponentValue = () => {
    this.setState({ isInEditMode: false, value: this.refs.theTextInput.value });
  };
  renderEditView = () => {
    return (
      <div>
        <input
          onSubmit={this.onModif}
          type="text"
          defaultValue={this.state.value}
          ref="theTextInput"
        />
        <div className="butwrap">
          <button className="butred" onClick={this.changeEditMode}>
            X
          </button>
          <button
            className="butgreen"
            id="okbut"
            onClick={this.updateComponentValue}
          >
            OK
          </button>
          <span className="cortext">{this.state.value}</span>
        </div>
      </div>
    );
  };

  renderDefaultView = () => {
    return (
      <div className="aanptekst" onDoubleClick={this.changeEditMode}>
        {this.state.value}
      </div>
    );
  };
  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default App;
