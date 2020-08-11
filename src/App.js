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
    stocks: [
      { id: 5, name: "tomato" },
      { id: 6, name: "egg" },
      { id: 7, name: "cabedge" },
      { id: 8, name: "pork" },
    ],
  };
  activeTab = (tabId) => {
    const tabs = [...this.state.tabs];
    tabs.map((tab) => {
      tab.active = tab.id === tabId;
    });
    this.setState({ tabs: tabs });
  };
  toggleSelect = (listId) => {
    const lists = [...this.state.lists];
    lists.map((list) => {
      list.selected = list.id === listId ? !list.selected : list.selected;
    });
    this.setState({ lists: lists });
  };
  deleteItem = (item) => {
    const lists = [...this.state.lists];
    lists.splice(lists.indexOf(item), 1);
    this.setState({ lists: lists });
  };
  toFridge = () => {
    const lists = [...this.state.lists];
    let stocks = [...this.state.stocks];
    const lists_new = lists.filter((list) => !list.selected);
    const stocks_add = lists.filter((list) => list.selected);
    stocks_add.map((stock) => {
      stocks.push({ id: this.getUniqueId(), name: stock.name });
    });
    this.setState({lists: lists_new, stocks: stocks});
  };

  getUniqueId() {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  };

  render() {
    return (
      <div className="container">
        <Tab
          tabs={this.state.tabs}
          activeTab={this.activeTab}
          lists={this.state.lists}
          stocks={this.state.stocks}
          toggleSelect={this.toggleSelect}
          deleteItem={this.deleteItem}
          toFridge={this.toFridge}
        ></Tab>
      </div>
    );
  }
}

export default App;
