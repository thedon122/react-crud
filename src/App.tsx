import React from 'react';
import './App.css';
import Nav from "./components/Nav";
import Menu from './components/Menu';
import Products from './admin/Products';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Route path='/' exact component={Main}/>
                <Route path='/admin/products' exact component={Products}/>
      </BrowserRouter>
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
