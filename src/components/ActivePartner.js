import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Partner extends React.Component{
    state = {
        partners:[],
        activePartner:[]
      }
      componentDidMount() {
        axios.get('../data.json')
        .then((res) => {
          const data = res.data;
          this.setState({
           partners: data,
           activePartner:this.props.location.state.partner
          });
          
        })   
      }
    
    render(){    
            const partners=this.state.partners;
            const activePartner=this.state.activePartner;
            const filterDropdown3 = partners.filter(function(partner) {
            return partner.partnerName === activePartner;
              });
            return(
           <div className="container">        
           { filterDropdown3.map(activePartner => 
          (
           <div key={activePartner.partnerId} >
            <div className="active-partner">
           <img className="active-partner__img" src={activePartner.logo} alt={activePartner.partnerName}/>
           <h3 className="active-partner__title">{activePartner.partnerName }</h3>
           <h4 className="active-partner__details">
            Working Region: <span>{ activePartner.workingRegion}</span>
           </h4>
           <h4 className="active-partner__details">
            Type: <span>{ activePartner.type}</span>
           </h4>
           <h5 className="active-partner__details">
            Vision: <span>{ activePartner.vision}</span>
           </h5>
           <h5 className="active-partner__details">
            Mission: <span>{ activePartner.Mission}</span>
           </h5>
           <p className="active-partner__website">Website: 
            <span><a href={activePartner.website} rel="noopener noreferrer" target="_blank">Visit web site</a></span>
            </p>
           
           <button className="active-partner__button">
            <Link to="/">Go back</Link>
           </button>
          </div>
          </div>
        )
    )
   } 
  </div>             
         );
            }
               }

export default Partner;

