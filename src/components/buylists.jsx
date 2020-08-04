import React, { Component } from "react";
import BuyList from "./buylist"

class BuyLists extends Component {
  render() {
    const lists = [
      { id: 1, name: "とまと" },
      { id: 2, name: "たまご" },
      { id: 3, name: "キャベツ" },
      { id: 4, name: "豚肉" },
    ];
    return (
      <ul>
        {lists.map((list) => (
          <BuyList key={list.id} item={list}/>
        ))}
      </ul>
    );
  }
}

export default BuyLists;
