import React, { Component, createContext } from "react";
import { data } from "./content";

const DataInfo = createContext("hello world2");

class ContextData extends Component {
  state = {
    greet: "Hello world..",
    data: data,
  };
  render() {
    return (
      <DataInfo.Provider value={this.state}>
        {this.props.children}
      </DataInfo.Provider>
    );
  }
}
const ContextConsumer = ContextData.Consumer;

export { ContextData, ContextConsumer, DataInfo };
