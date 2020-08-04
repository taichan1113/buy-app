import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BuyList extends Component {
  render() {
    return (
      <li className="buylist">
        <div>{this.props.item.name}</div>
        <span>
          <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
        </span>
      </li>
    );
  }
}

export default BuyList;
