import React from 'react';

const TitleBar = (props) => {
return (
  <div>
    <h1>Hogwarts Yearbook</h1>
      <select onChange={props.handleSelectChange} id="house-selector" defaultValue="default">
        <option disabled value="default">Select house from drop down</option>
        {props.houses.map((house) => {
          return <option key={house.name} value={house.url}>{house.name}</option>
        })}
      </select>
    </div>

  );

};

export default TitleBar;
