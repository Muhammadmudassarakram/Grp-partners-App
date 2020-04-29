import React, { Component } from 'react';
import axios from 'axios';

//import ReactDOM from 'react-dom';
import './App.css';
import Partners from "./components/Partners";
import SearchForm from "./components/SearchForm";
class showAllPartners extends Component {

  constructor(props) {
    super(props)

    this.state = {
      partners: []
    }
  }

  componentDidMount() {
    axios.get('./data.json')
    .then((response) => {
      let arr = response.data;
      console.log('arr', arr);
      this.setState({
        partners: arr
      });
      console.log("response data", arr);
      console.log('library it worked', response.status); // ex: 200
    })
    .catch(function (error) {
      console.log(error);
      console.log('error getting library', error.status);
    });

  }

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
        
        <Partners partners={this.state.partners} />
      </div>
    );
  }
}

export default showAllPartners;


