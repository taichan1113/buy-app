import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Stock extends Component {
  dangerLevel = (date) => {
    let dt = new Date(Date.parse(date));
    let level;
    const now = new Date();
    if (dt.setDate(dt.getDate() + 14) <= now) {
      level = "warning";
    } else if (dt.setDate(dt.getDate() + 7) <= now) {
      level = "caution";
    } else {
      level = "notice";
    }
    return level;
  };
  render() {
    return (
      <tbody>
        <tr>
          <td className={this.dangerLevel(this.props.stock.date)}>
            {this.props.stock.name}
          </td>
          <td className={this.dangerLevel(this.props.stock.date)}>
            {this.props.stock.date}
          </td>
          <td className={this.dangerLevel(this.props.stock.date)}>
            <FontAwesomeIcon
              icon={["fas", "utensils"]}
              onClick={() => this.props.eatStocks(this.props.stock)}
            />
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Stock;
