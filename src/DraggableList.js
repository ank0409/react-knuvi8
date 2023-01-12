import React, { useState } from 'react';
import Form from './Form';

const DraggableList = ({ sendtags }) => {
  return (
    <div>
      <hr />
      <h1>List items will be added here.</h1>

      {sendtags.syntaxgtagsend.map((syntax, index) => {
        return <li key={index}>{syntax}</li>;
      })}
    </div>
  );
};

export default DraggableList;
