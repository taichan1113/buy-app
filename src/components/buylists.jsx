import React, { Component } from "react";
import BuyList from "./buylist";
import { Fragment } from "react";

class BuyLists extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          {this.props.lists.map((list) => (
            <BuyList
              key={list.id}
              item={list}
              toggleSelect={this.props.toggleSelect}
              deleteItem={this.props.deleteItem}
            />
          ))}
        </ul>
        <p className="btn" onClick={() => this.props.toFridge()}>
          To Fridge
        </p>
      </Fragment>
    );
  }
}

export default BuyLists;
