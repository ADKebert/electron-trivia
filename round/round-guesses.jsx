import React from 'react';

function RoundGuesses(props) {
  const RoundGuessesStyles = {
    'list-style' : 'none',
    'display' : 'flex',
  }
  return (
    <ul style={RoundGuessesStyles}>
      <li>5</li>
      <li>3</li>
      <li>1</li>
    </ul>
  );
}

export default RoundGuesses;
