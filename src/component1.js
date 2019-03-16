import React, { Component } from "react";
import Component2 from "./component2";
import { connect } from "react-redux";

import "./component.css";

class Component1 extends Component {
  state = {
    persons: [
      { name: "dass", age: 37 },
      { name: "praveen", age: 37 },
      { name: "lokesh", age: 37 }
    ],

    hidebool: true
  };

  togglePersonhandler = () => {
    const doesshow = this.state.hidebool;
    this.setState({ hidebool: !doesshow });
  };
  switchNamehandler = () => {
    this.setState({
      persons: [
        { name: "dass2", age: 37 },
        { name: "praveen2", age: 37 },
        { name: "lokesh2", age: 37 }
      ]
    });
  };

  deletePersonhandler = personIndex => {
    //const persons = this.state.persons;
    console.log("ss" + personIndex + this.state.persons);
    const persons = [...this.state.persons];
    persons.slice(personIndex, 1);
    this.setState({ persons: persons });
  };
  nameChangedhandler = (event, id) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 37 },
        { name: "praveen3", age: 37 },
        { name: "lokesh3", age: 37 }
      ]
    });
  };
  componentWillMount() {
    console.log("componentwillmount");
  }

  render() {
    let persons = null;
    if (this.state.hidebool) {
      persons = (
        <div>
          {" "}
          {this.state.persons.map((mapperson, index) => {
            return (
              <h5 onClick={() => this.deletePersonhandler(index)}>
                "test"
                {mapperson.name}
              </h5>
            );
          })}
          <Component2 />{" "}
        </div>
      );
    }

    return (
      <div>
        {persons}
        <button onClick={this.props.onDecrementCounter}>Toggle Click</button>
        {this.state.hidebool ? (
          <div>
            <h1 className="Person" onClick={this.props.onIncrementCounter}>
              Functional Component ctr {this.props.ctr}
            </h1>
            <Component2
              changed={this.nameChangedhandler}
              clicktemp={this.switchNamehandler}
            />
          </div>
        ) : (
          <h1 onClick={this.togglePersonhandler}>hidden is working</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1);
