//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

import ReactDOM from 'react-dom';
//import React, { Component } from 'react';
import './App.css';

import DynamicSelect from "./components/Form";
import Partners from "./components/Partners";
class showAllPartners extends Component {

  constructor(props) {
    super(props)

    this.state = {
      partners: [],
      selectedValue: 'Nothing selected'
    }
  }


  handleSelectChange = (selectedValue) =>{
    this.setState({
      selectedValue: selectedValue
    });
  }


  /*
  searchSpace=(event)=>{
    let coninentId = event.target.elements.coninentId.value;
    this.setState({search:coninentId})
    console.log(coninentId)
  }


  getPartner = async (e) => {
    const continentId = e.target.elements.continentId.value;
    e.preventDefault();
    const json_call = await fetch('./data.json');

    const data = await json_call.json();
    this.setState({ partners: data.partners });
    console.log(this.state.partners);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("partners");
    const partners = JSON.parse(json);
    this.setState({ partners });
  }
  componentDidUpdate = () => {
    const partners = JSON.stringify(this.state.partners);
    localStorage.setItem("partners", partners);
  }*/



  componentDidMount() {
    axios.get('./data.json')
    .then((response) => {
      const arr = response.data;
     // console.log('arr', arr);
      this.setState({
        partners: arr
      });
     // console.log("response data", arr);
      //console.log('library it worked', response.status); // ex: 200
    })
    .catch(function (error) {
      //console.log(error);
      //console.log('error getting library', error.status);
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

        <DynamicSelect />
        
        
      </div>
    );
  }
}

export default showAllPartners;


//<Form getRecipe={this.getRecipe} />
//<Partners partners={this.state.partners} />