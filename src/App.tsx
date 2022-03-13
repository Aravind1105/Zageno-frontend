import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Paths } from "./constants";
import "./App.css";
import AllLists from "./components/AllLists";
import SelectedList from "./components/SelectedList";
import { ShoppingListContext } from "./list-context";
import { ShoppingList } from "./interfaces";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.ALL_LISTS} element={<AllLists />} />
        <Route path={`${Paths.LIST_BY_ID}/:listId`} element={<SelectedList />} />
        <Route path="*" element={<Navigate to={Paths.ALL_LISTS} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
