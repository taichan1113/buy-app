import React, { Component } from "react";
import Tab from "./components/tab";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "買い物", active: true },
      { id: 2, name: "冷蔵庫", active: false },
    ],
  };
  activeTab = (itemId) => {
    const items = [...this.state.items];
    items.map(item => {
      item.active = item.id === itemId
    });
    this.setState({ items });
  };

  render() {
    return (
      <div className="container">
        <Tab items={this.state.items} activeTab={this.activeTab}></Tab>
      </div>
    );
  }
}

export default App;
