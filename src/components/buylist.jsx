import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BuyList extends Component {
  render() {
    return (
      <li className="buylist">
        <div>
          <p
            onClick={() => this.props.toggleSelect(this.props.item.id)}
            className={this.props.item.selected ? "selected" : ""}
          >
            {this.props.item.name}
          </p>
          <span>
            <FontAwesomeIcon
              icon={["fas", "trash"]}
              onClick={() => this.props.deleteItem(this.props.item)}
            />
          </span>
        </div>
      </li>
    );
  }
}
export default BuyList;
