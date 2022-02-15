import React from "react";
import { hydrate, render } from "react-dom";
import HomeScreen from "./containers";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<HomeScreen />, rootElement);
} else {
  render(<HomeScreen />, rootElement);
}
