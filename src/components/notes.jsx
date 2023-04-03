import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

const notes = () => {
  return (
  
    <div style={containerStyles}>
      <Header />
      <Link to={"/transformation"} className="link">Transformation</Link>
      <Link to={"/modelTest"} className="link">Final Model Test Solution</Link>
      <Link to={"/tense"} className="link">Tense</Link>
      <Link to={"/wh"} className="link">Wh Questions</Link>
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
