import React, { useState } from 'react';
import Form from './Form';
const DraggableList = ({ items }) => {
  return (
    <div>
      <hr />
      <h1>List items will be added here...</h1>
      {items.map((x, index) => {
        return (
          <li key={index}>
            {x}
            <Form />

            {'>'}
            <br />
            <input placeholder={x + 'name'} />
            <br />
            {x + '>'}
          </li>
        );
      })}
    </div>
  );
};

export default DraggableList;
