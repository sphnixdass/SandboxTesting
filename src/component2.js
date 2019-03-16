import React, { Component } from "react";

class Component2 extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentwillmount");
  }

  render() {
    return (
      <div>
        <h1 onClick={this.switchNamehandler}>Functional Component</h1>
        <h1 onClick={this.props.changed}>Props changed</h1>
      </div>
    );
  }
}
export default Component2;
