import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="tabs">
          {this.props.items.map((item) => (
            <li
              onClick={() => this.props.activeTab(item.id)}
              className={[item.active ? "active" : "inactive"]}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="contents">
          {this.props.items.map((item) => (
            <section
              className={[item.active ? "active" : "inactive"]}
              key={item.id}
            >
              test {item.id}
            </section>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Tab;
