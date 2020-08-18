import React, { Component } from "react";
import BuyList from "./buylist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable } from "react-beautiful-dnd";

class BuyLists extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="list-input" onSubmit={(e) => this.props.addItem(e)}>
          <input
            type="text"
            placeholder="input buy list"
            value={this.props.item}
            autoFocus={!this.props.item}
            onChange={(e) => this.props.handleChange(e)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
          </button>
        </form>
        <Droppable droppableId={"BuyLists"}>
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.lists.map((list, index) => {
                return (
                  <BuyList
                    key={list.id}
                    index={index}
                    item={list}
                    toggleSelect={this.props.toggleSelect}
                    deleteItem={this.props.deleteItem}
                  />
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <div className="btn" onClick={() => this.props.toFridge()}>
          To Stocks
        </div>
        <div className="btn" onClick={() => this.props.deleteAll()}>
          Clear All
        </div>
      </React.Fragment>
    );
  }
}

export default BuyLists;
