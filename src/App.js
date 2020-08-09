import React, { Component } from "react";
import Tab from "./components/tab";
import BuyLists from "./components/buylists";
import Fridge from "./components/fridge";


class App extends Component {
  state = {
    tabs: [
      { id: 1, name: "買い物", active: true, comp: BuyLists},
      { id: 2, name: "冷蔵庫", active: false, comp: Fridge},
    ],
  };
  activeTab = (itemId) => {
    const items = [...this.state.tabs];
    items.map(item => {
      item.active = item.id === itemId
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="container">
        <Tab items={this.state.tabs} activeTab={this.activeTab}></Tab>
      </div>
    );
  }
}

export default App;
