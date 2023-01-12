import React, { useState } from 'react';
import Form from './Form';

const DraggableList = ({ sendtags }) => {
  return (
    <div>
      <hr />
      <h1>List items will be added here.</h1>
      {/* {items.map((x, index) => {
        return (
          <li key={index}>
            {x}
            <Form />

            {'>'}
            <br />
            <input placeholder={x + 'name'} />
            <br />
            {x + '>'}
            <button>+add more atts +</button>
          </li>
        );
      })} */}

      {/* {senddata.map((x) => {
        return <li>{x.openingtag}</li>;
      })} */}
      {/* {
        senddata.openingtag.map((x)=>{
          return <li>{senddata.openingtag}</li>
        })
      } */}

      {/* <li>Opening Tag: {senddata.openingtag}</li>
      <li>Closing Tag: {senddata.closingtag}</li> */}

      {sendtags.syntaxgtagsend.map((x, index) => {
        return <li key={index}>{x}</li>;
      })}
      {/* {sendtags.closingtagsend.map((x, index) => {
        return <li key={index}>{x}</li>;
      })} */}
    </div>
  );
};

export default DraggableList;
