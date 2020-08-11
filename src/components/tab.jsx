import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="tabs">
          {this.props.tabs.map((tab) => (
            <li
              onClick={() => this.props.activeTab(tab.id)}
              className={[tab.active ? "active" : "inactive"]}
              key={tab.id}
            >
              {tab.name}
            </li>
          ))}
        </ul>
        <div className="contents">
          {this.props.tabs.map((tab) => (
            <section
              className={[tab.active ? "active" : "inactive"]}
              key={tab.id}
            >
              <tab.comp
                lists={this.props.lists}
                stocks={this.props.stocks}
                toggleSelect={this.props.toggleSelect}
                addItem={this.props.addItem}
                item={this.props.item}
                handleChange={this.props.handleChange}
                deleteItem={this.props.deleteItem}
                toFridge={this.props.toFridge}
              />
            </section>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tab;
