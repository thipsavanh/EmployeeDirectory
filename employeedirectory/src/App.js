import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Table />
      {/* <Employee /> */}
    </div>
  );
}

export default App;
