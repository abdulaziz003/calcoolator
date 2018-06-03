import React from 'react';
import            './Display.css';

const Display = props => {
  return (
    <section id="Display">
      <h1 >{props.result}</h1>
      <small id="display">{props.expr}</small>
    </section>
  );
};

export default Display;
