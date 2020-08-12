import React, { Component } from "react";
import Stock from "./stock";

class Fridge extends Component {
  render() {
    return (
      <div id="table-container">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>purchased at</th>
              <th>eat</th>
            </tr>
          </thead>
          {this.props.stocks.map((stock) => (
            <Stock key={stock.id} stock={stock} eatStocks={this.props.eatStocks} />
          ))}
        </table>
      </div>
    );
  }
}

export default Fridge;
