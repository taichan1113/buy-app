import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "react-beautiful-dnd";

class BuyList extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided) => (
          <li
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="buylist"
          >
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
        )}
      </Draggable>
    );
  }
}
export default BuyList;
