import React from 'react';
import { Link } from 'react-router-dom';

const notes = () => {
  return (
    <div style={containerStyles}>
      <Link to={"/transformation"} className="link">Transformation</Link>
      <Link to={"/modelTest"} className="link">Final Model Test Solution</Link>
    </div>
  )
}

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#000',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'
}

export default notes;
