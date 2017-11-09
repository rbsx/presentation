import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleRestart() {
    this.setState({
      count: 0
    });
  }
  render() {
    const styles = {
      padding: 20,
      background: "#1dba7b",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
      {this.state.count < 5 ?
        this.state.count === 0 ?
          <div>
            <Heading size={5} textColor="black">
              Жми скорей!
            </Heading>
            <button style={styles} type="button" onClick={this.handleClick}>Кликай!</button>
          </div> :
          <div>
            <Heading size={5} textColor="black">
              Вы нажали {this.state.count} раз, слабо еще?
            </Heading>
            <button style={styles} type="button" onClick={this.handleClick}>Кликай!</button>
          </div> :
          <div>
            <Heading size={5} caps textColor="red">Технический перерыв</Heading>
            <button onClick={this.handleRestart} style={{ padding: "10px", background: "red", color: "white", border: "none", fontSize: "18px" }}>
              restart
            </button>
          </div>
        }
      </div>
    );
  }
}
