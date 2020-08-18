import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Draggable } from "react-beautiful-dnd";

class Stock extends Component {
  dangerLevel = (date) => {
    let dt = new Date(Date.parse(date));
    let level;
    const now = new Date();
    if (dt.setDate(dt.getDate() + 14) <= now) {
      level = "warning";
    } else if (dt.setDate(dt.getDate() + 7) <= now) {
      level = "caution";
    } else {
      level = "notice";
    }
    return level;
  };
  render() {
    return (
      <Draggable draggableId={this.props.stock.id} index={this.props.index}>
        {(provided) => (
          <tr
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <td className={this.dangerLevel(this.props.stock.date) + ' ' + "column1"}>
              {this.props.stock.name}
            </td>
            <td className={this.dangerLevel(this.props.stock.date) + ' ' + "column2"}>
              {this.props.stock.date}
            </td>
            <td className={this.dangerLevel(this.props.stock.date) + ' ' + "column3"}>
              <FontAwesomeIcon
                icon={["fas", "utensils"]}
                onClick={() => this.props.eatStocks(this.props.stock)}
              />
            </td>
          </tr>
        )}
      </Draggable>
    );
  }
}

export default Stock;
