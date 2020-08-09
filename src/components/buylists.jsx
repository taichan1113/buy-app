import React, { Component } from "react";
import BuyList from "./buylist";

class BuyLists extends Component {
  render() {
    return (
      <ul>
        {this.props.lists.map((list) => (
          <BuyList key={list.id} item={list} />
        ))}
      </ul>
    );
  }
}

export default BuyLists;