import React, {Component} from "react";

const SayHello = (props) =>
  <h1>Hello to {props.name}</h1>

export default class PropsPower extends Component {
  render() {
    let greetings = null;
    if (this.props.multy) {
      greetings = (
        <div>
          <SayHello name="React"/>
          <SayHello name="ES6"/>
          <SayHello name="Webpack"/>
        </div>
      );
    } else {
      greetings = <SayHello name="React"/>;
    }

    return (
      <div>
        ok let`s say
        {greetings}
      </div>
    );
  }
}
