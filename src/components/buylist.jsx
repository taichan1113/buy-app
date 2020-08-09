import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BuyList extends Component {
  render() {
    return (
      <li className="buylist">
        <div>
          <p onClick={}>{this.props.item.name}</p>
          <span>
            <FontAwesomeIcon icon={["fas", "trash"]} />
          </span>
        </div>
      </li>
    );
  }
}

export default BuyList;
