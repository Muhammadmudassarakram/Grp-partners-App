import React from 'react';

const Partners = props => (
  <div className="container">
    <div className="row">
    { props.partners.map((partner) => {
      return (
        <div key={partner.partnerId} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="partners__box">
            <img 
              className="partners__box-img" 
              src={partner.logo} 
              alt={partner.partnerName}/>
              <div className="partners__text">
                <h5 className="partners__title">
                  { partner.partnerName.length < 20 ? `${partner.partnerName}` : `${partner.partnerName.substring(0, 100)}` }
                  {console.log(partner.partnerName.length)}
                </h5>
                <p className="partners__subtitle">Region is<span>
                  { partner.continent }, working Region is {partner.workingRegion} and Type {partner.type}
                </span></p>
              </div>
              
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Partners;