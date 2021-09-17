import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Menu from './components/Menu';
import Products from './admin/Products';

function App() {
  return (
    <div className="App">
      <Nav />

<div className="container-fluid">
  <div className="row">
    <Menu />
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
      <Products />
    </main>
  </div>
</div>
</div>
  );
}

export default App;
