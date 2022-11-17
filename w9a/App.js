import React, { Component } from 'react';

import {Provider} from "mobx-react";
import TaskListScreen from "./TaskListScreen";
import store from "./TaskListStore";

export default class App extends Component {
  render() {
    return (
        <Provider>
          <TaskListScreen />
        </Provider>
    )
  }
}
