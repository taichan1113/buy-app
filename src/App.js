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
    let ans = window.confirm("Clear all unselected lists?");
    if (!ans) {
      return;
    } else {
      const lists = [...this.state.lists];
      const lists_new = lists.filter((list) => list.selected);
      this.setState({ lists: lists_new });
    }
  };
  toFridge = () => {
    const lists = [...this.state.lists];
    let stocks = [...this.state.stocks];
    const lists_new = lists.filter((list) => !list.selected);
    const stocks_add = lists.filter((list) => list.selected);
    stocks_add.map((stock) => {
      stocks.push({
        id: this.getUniqueId(),
        name: stock.name,
        date: this.myDate(),
      });
    });
    this.setState({ lists: lists_new, stocks: stocks });
  };
  addStock = (e) => {
    e.preventDefault();
    if (this.state.item.trim() === "") {
      return;
    }
    const item = {
      id: this.getUniqueId(),
      name: this.state.item,
      date: this.myDate(),
    };
    const stocks = [...this.state.stocks];
    stocks.push(item);
    this.setState({ stocks: stocks, item: "" });
  };
  eatStocks = (stock) => {
    const stocks = [...this.state.stocks];
    stocks.splice(stocks.indexOf(stock), 1);
    this.setState({ stocks: stocks });
  };
  getUniqueId() {
    return new Date().getTime().toString(36) + "-" + Math.random().toString(36);
  }
  myDate() {
    let now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  }

  onDragEnd = (result) => {
    const { draggableId, type, source, destination } = result;
    console.log('---------------');
    console.log(`draggableId is ${draggableId}`);
    console.log(`type is ${type}`);
    console.log(`source is`);
    console.log(source);
    console.log(`destination is`);
    console.log(destination);

    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }


    const items = type === "BuyLists" ? Array.from(this.state.lists) : Array.from(this.state.stocks )
    const newItems = Array.from(items);
    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, items[source.index]);
    console.log(items);
    console.log(newItems);
    type === "BuyLists" ? this.setState({lists: newItems}) : this.setState({stocks: newItems});
    return;
  };

  componentDidUpdate() {
    localStorage.setItem("lists", JSON.stringify(this.state.lists));
    localStorage.setItem("stocks", JSON.stringify(this.state.stocks));
  }
  componentDidMount() {
    this.setState({
      lists: JSON.parse(localStorage.getItem("lists")) || [],
      stocks: JSON.parse(localStorage.getItem("stocks")) || [],
    });
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
          addStock={this.addStock}
          eatStocks={this.eatStocks}
          onDragEnd={this.onDragEnd}
        ></Tab>
      </div>
    );
  }
}

export default App;
