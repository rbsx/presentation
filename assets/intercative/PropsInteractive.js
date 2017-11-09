import React, {Component} from "react";

const SayHello = (props) =>
  <h1>Hello to {props.name}</h1>

export default class PropsPower extends Component {
  render() {
    return (
      <div>
        ok let`s say
        <SayHello name="React" />
      </div>
    );
  }
}
