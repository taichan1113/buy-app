import React, { Component } from "react";
import Stock from "./stock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable } from "react-beautiful-dnd";

class Fridge extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="list-input" onSubmit={(e) => this.props.addStock(e)}>
          <input
            type="text"
            placeholder="input stock"
            value={this.props.item}
            autoFocus={!this.props.item}
            onChange={(e) => this.props.handleChange(e)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} />
          </button>
        </form>
        <div id="table-container">
          <Droppable droppableId={"Fridge"} type={"Fridge"}>
            {(provided) => (
              <table>
                <thead>
                  <tr>
                    <th className="column1">name</th>
                    <th className="column2">purchased at</th>
                    <th className="column3">eat</th>
                  </tr>
                </thead>
                <tbody {...provided.droppableProps} ref={provided.innerRef}>
                  {this.props.stocks.map((stock, index) => {
                    return (
                      <Stock
                        key={stock.id}
                        index={index}
                        stock={stock}
                        eatStocks={this.props.eatStocks}
                      />
                    );
                  })}
                  {provided.placeholder}
                </tbody>
              </table>
            )}
          </Droppable>
        </div>
      </React.Fragment>
    );
  }
}

export default Fridge;
