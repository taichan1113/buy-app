import React, { Component } from "react";
import Stock from "./stock";

class Fridge extends Component {
  render() {
    return (
      <ul>
        {this.props.stocks.map((stock) => (
          <Stock key={stock.id} stock={stock}/>
        ))}
      </ul>
    );
  }
}

export default Fridge;
