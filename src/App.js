// @flow
import * as React from "react";
import "./App.css";
import { Title } from "./components/Title";
import { LayersList } from "./components/LayersList/LayersList";

export const App = () => {
  return (
    <div className="App">
      <Title />
      <LayersList />
    </div>
  );
};
