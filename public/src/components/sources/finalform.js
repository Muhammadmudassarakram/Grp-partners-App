import React, { Component } from 'react';
import axios from 'axios';


class DynamicSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       partners: [],
       continent: "",
        theme:""
      };    
    }

    handleChange = event => {
      this.setState({ continent: event.target.value });
      this.setState({ theme: event.target.value });
    };
      getUnique(arr, comp) {
      const unique = arr
        //store the comparison values in array
        .map(e => e[comp])
  
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
  
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e])
  
        .map(e => arr[e]);
  
      return unique;
    }

    /*
    componentDidMount(){
    this.setState({
        partners: this.props.partners
      });
    }
      */
    
     

    componentDidMount() {
        axios.get('./data.json')
        .then((response) => {
          const arr = response.data;
          this.setState({
            partners: arr
          });
                 
        })
        .catch(function (error) {
          console.log(error);
          console.log('error getting library', error.status);
        });
    
      }
           
    render() {
      const uniqueContinent = this.getUnique(this.state.partners, "continent");
      const partners = this.state.partners;
      const continent = this.state.continent;
  
      const filterDropdown = partners.filter(function(result) {
        return result.continent === continent;
      });
  
      const uniqueTheme = this.getUnique(this.state.partners, "theme");
      const partners1 = this.state.partners;
      const theme= this.state.theme;
  
       const filterDropdown1 = partners1.filter(function(result) {
          return result.theme === theme;
        });
  
      return (
    
           <form >
          
           <div className="Search-filter">
               <div>
              Search by continent
              <select
                value={this.state.continent}
                onChange={this.handleChange}
              >
                <option value=''>Select Continent</option>
                {uniqueContinent.map(continent => (
                  <option key={continent.partnerId} value={continent.continent}>
                    {continent.continent}
                  </option>
                ))}
              </select>
              </div>
             <div>
              Search by theme
              <select
                value={this.state.theme}
                onChange={this.handleChange}
              >
                <option value=''>Select Theme</option>
                {uniqueTheme.map(theme => (
                  <option key={theme.partnerId} value={theme.theme}>
                    {theme.theme}
                  </option>
                ))}
              </select>
              </div>
              </div>
            
              
    <div className="container">
    <div className="row">
    { filterDropdown.map(continent => 
       (
        <div key={continent.partnerId} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="partners__box">
            <img 
              className="partners__box-img" 
              src={continent.logo} 
              alt={continent.partnerName}/>
              <div className="partners__text">
                <h5 className="partners__title">
                  { continent.partnerName.length < 20 ? `${continent.partnerName}` : `${continent.partnerName.substring(0, 100)}` }
                  {console.log(continent.partnerName.length)}
                </h5>
                <p className="partners__subtitle">Region is<span>
                  { continent.continent }, working Region is {continent.workingRegion} and Type {continent.type}
                </span></p>
              </div>
              
          </div>
        </div>
      )
    )}
    </div>
  </div>        
            

    <div className="container">
    <div className="row">
    { filterDropdown1.map(theme => 
       (
        <div key={theme.partnerId} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="partners__box">
            <img 
              className="partners__box-img" 
              src={theme.logo} 
              alt={theme.partnerName}/>
              <div className="partners__text">
                <h5 className="partners__title">
                  { theme.partnerName.length < 20 ? `${theme.partnerName}` : `${theme.partnerName.substring(0, 100)}` }
                  {console.log(theme.partnerName.length)}
                </h5>
                <p className="partners__subtitle">Region is<span>
                  { theme.continent }, working Region is {theme.workingRegion} and Type {theme.type}
                </span></p>
              </div>
              
          </div>
        </div>
      )
    )}
     </div>
     </div>       
       
        </form>
        
  );
              
    }
              
    
  }
  export default DynamicSelect;
  
 // ReactDOM.render(<DynamicSelect />, document.querySelector("#root"));

  