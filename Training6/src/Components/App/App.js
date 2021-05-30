import React from "react";
import { useSelector } from "react-redux";
import Connection from "../Connection/Connection";
import Input from "../Input/Input";
import List from "../List/List";

export default function App() {
  return (
    <div>
      <Connection />
      <div className="wrapper">
        <header>Event Channel </header>
        <Input />
        <List />
      </div>
    </div>
  );
}
