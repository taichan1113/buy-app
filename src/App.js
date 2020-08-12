import React, { Component } from "react";
import Tab from "./components/tab";
import BuyLists from "./components/buylists";
import Fridge from "./components/fridge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        { id: 1, name: "Lists", active: true, comp: BuyLists },
        { id: 2, name: "Stocks", active: false, comp: Fridge },
      ],
      item: "",
      lists: [],
      stocks: [],
    };
  }

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
  addItem = (e) => {
    e.preventDefault();
    if (this.state.item.trim() === "") {
      return;
    }
    const item = {
      id: this.getUniqueId(),
      name: this.state.item,
      selected: false,
    };
    const lists = [...this.state.lists];
    lists.push(item);
    this.setState({ lists: lists, item: "" });
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  deleteItem = (item) => {
    const lists = [...this.state.lists];
    lists.splice(lists.indexOf(item), 1);
    this.setState({ lists: lists });
  };
  deleteAll = () => {
    const lists = [...this.state.lists];
    const lists_new = lists.filter((list) => list.selected);
    this.setState({ lists: lists_new });
  };
  toFridge = () => {
    const lists = [...this.state.lists];
    let stocks = [...this.state.stocks];
    const lists_new = lists.filter((list) => !list.selected);
    const stocks_add = lists.filter((list) => list.selected);
    stocks_add.map((stock) => {
      stocks.push({ id: this.getUniqueId(), name: stock.name });
    });
    this.setState({ lists: lists_new, stocks: stocks });
  };
  getUniqueId() {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  }

  render() {
    return (
      <div className="container">
        <Tab
          tabs={this.state.tabs}
          activeTab={this.activeTab}
          lists={this.state.lists}
          stocks={this.state.stocks}
          toggleSelect={this.toggleSelect}
          addItem={this.addItem}
          item={this.state.item}
          handleChange={this.handleChange}
          deleteItem={this.deleteItem}
          deleteAll={this.deleteAll}
          toFridge={this.toFridge}
        ></Tab>
      </div>
    );
  }
}

export default App;
