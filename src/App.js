import React, { Component } from "react";
import Tab from "./components/tab";
import BuyLists from "./components/buylists";
import Fridge from "./components/fridge";

class App extends Component {
  state = {
    tabs: [
      { id: 1, name: "買い物", active: true, comp: BuyLists },
      { id: 2, name: "冷蔵庫", active: false, comp: Fridge },
    ],
    lists: [
      { id: 1, name: "とまと", selected: false },
      { id: 2, name: "たまご", selected: false },
      { id: 3, name: "キャベツ", selected: false },
      { id: 4, name: "豚肉", selected: false },
    ],
  };
  activeTab = (tabId) => {
    const tabs = [...this.state.tabs];
    tabs.map((tab) => {
      tab.active = tab.id === tabId;
    });
    this.setState({ items: tabs });
  };

  render() {
    return (
      <div className="container">
        <Tab
          tabs={this.state.tabs}
          activeTab={this.activeTab}
          lists={this.state.lists}
        ></Tab>
      </div>
    );
  }
}

export default App;
