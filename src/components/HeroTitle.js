import React from 'react';

const HeroTitle = () => {
  const headingStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    color: 'cadetblue',
    padding: '20px',
    border: '1px solid cadetblue',
    width: '50%',
    margin: '10px auto',
    borderRadius: '10px',
  };
  return (
    <div>
      <h1 style={headingStyle}>
        Get users clicking the get user link in the nav
      </h1>
    </div>
  );
};

export default HeroTitle;
