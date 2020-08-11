import React, { Component } from "react";

class Stock extends Component {
  render() {
    return <li>{this.props.stock.name}</li>;
  }
}

export default Stock;
