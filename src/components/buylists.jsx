import React, { Component } from "react";
import BuyList from "./buylist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

class BuyLists extends Component {
  render() {
    return (
      <Fragment>
        <form className="list-input" onSubmit={(e) => this.props.addItem(e)}>
          <input
            type="text"
            placeholder="input buy list"
            value={this.props.item}
            autoFocus ={!this.props.item}
            onChange={(e) => this.props.handleChange(e)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
          </button>
        </form>
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
        <div className="btn" onClick={() => this.props.toFridge()}>
          To Stocks
        </div>
        <div className="btn" onClick={() => this.props.deleteAll()}>
          Clear
        </div>
      </Fragment>
    );
  }
}

export default BuyLists;
