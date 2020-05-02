import React from 'react';

const Form=props=> (
  <form onSelectChange={props.getPartner} style={{ marginBottom:"2rem" }}>
        <div className="Search-filter">
        <div>Search by region
         <select name='continentId' id='continentId'>
          <option value=''>--Continent--</option>
          <option value='1'>Africa </option>
          <option value='2'>Europe</option>
          <option value='3'>Asia </option>
          <option value='4'>America</option>
          <option value='5'>Australia </option>
          </select>
          </div>
        
        <div>
        Search by Theme
          <select name='themeId' id='themeID'>
          <option value=''>--Theme--</option>
          <option value='1'>----- </option>
          <option value='2'>-----</option>
          <option value='3'>-----</option>
          <option value='4'>-----</option>
          <option value='5'>-----</option>
          <option value='6'>-----</option>
          <option value='7'>-----</option>
          <option value='8'>-----</option>
          <option value='9'>-----</option>
          <option value='10'>-----</option>
          </select>
          </div>
        </div>
        
      </form>
    );
  

export default Form;
