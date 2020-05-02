import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
class App extends Component {

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GRP Partners</h1>
          <p className="Partners-intro">Partners are organisations active in resilience who 
            share GRP’s vision and objective and who have joined the Partnership.</p>
            <h2 className="Partners-inlude"> Current partners include:</h2>
           
        </header>
        <SearchForm/> 
      </div>
    );
  }
}

export default App;


