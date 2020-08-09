import React, { Component } from "react";
import BuyList from "./buylist";

class BuyLists extends Component {
  render() {
    const lists = [
      { id: 1, name: "とまと", selected: false },
      { id: 2, name: "たまご", selected: false },
      { id: 3, name: "キャベツ", selected: false },
      { id: 4, name: "豚肉", selected: false },
    ];
    return (
      <ul>
        {lists.map((list) => (
          <BuyList key={list.id} item={list} />
        ))}
      </ul>
    );
  }
}

export default BuyLists;
