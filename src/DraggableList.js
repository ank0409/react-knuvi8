import React, { useState } from 'react';
import Form from './Form';

const DraggableList = ({ sendtags }) => {
  const [testval, settestval] = useState('');
  return (
    <div>
      <hr />
      <h1>List items will be added here.</h1>
      {/* {sendtags.map((x) => {
        return (
          <>
            {x.closingtagsend.map((x) => {
              if (x == 'true') {
                return (
                  // <>{x}</>
                  sendtags.map((x) => {
                    return (
                      <>
                        {x.syntaxgtagsend.map((x) => {
                          return <li>{x}</li>;
                        })}
                      </>
                    );
                  })
                );
              }
            })}
          </>
        );
      })} */}

      {/* {x.syntaxgtagsend.map((x) => {
              return <li>{x}</li>;
            })} */}
      {/* {sendtags.syntaxgtagsend.map((syntax, index) => {
        return <li key={index}>{syntax}</li>;
      })} */}
    </div>
  );
};

export default DraggableList;
