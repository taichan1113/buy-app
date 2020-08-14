import React, { Component } from "react";
import Stock from "./stock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Fridge extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="list-input" onSubmit={(e) => this.props.addStock(e)}>
          <input
            type="text"
            placeholder="input stock"
            value={this.props.item}
            autoFocus={!this.props.item}
            onChange={(e) => this.props.handleChange(e)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
          </button>
        </form>
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
              <Stock
                key={stock.id}
                stock={stock}
                eatStocks={this.props.eatStocks}
              />
            ))}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Fridge;
