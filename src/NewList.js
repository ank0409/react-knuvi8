import React, { useState } from 'react';
import DraggableList from './DraggableList';
import DraggableListComponent from './DraggableListComponent';
import CodeEditor from './CodeEditor';
const NewList = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  // const [items, setItems] = useState([]);
  // const [senditem, setsenditem] = useState('');

  const [openingtagsend, setopeningtagsend] = useState([]);

  const [closingtagsend, setclosingtagsend] = useState([]);

  const onclickbthHandler = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  function btnclickPush(openingtag, closingtag, tagname) {
    // setItems([...items, openingtag]);
    // setsenditem(openingtag);
    // console.log(openingtag, closingtag);
    setopeningtagsend([...openingtagsend, openingtag]);
    setclosingtagsend([...closingtagsend, closingtag]);
  }

  return (
    <div>
      <h1>Tag List</h1>
      {props.sendsearchresult.map((item, index) => (
        <div key={item.id}>
          <button onClick={() => onclickbthHandler(index)}>
            {item.category_name}
          </button>

          {activeIndex === index && (
            <>
              {item.tags.map((x) => {
                return (
                  <li>
                    {x.tag_name}
                    <button
                      onClick={() => {
                        btnclickPush(x.opening_tag, x.closing_tag, x.tag_name);
                      }}
                    >
                      +
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </div>
      ))}
      {/* 
      <DraggableList
        senddata={{ openingtag: openingtag, closingtag: closingtag }}
      /> */}
      <DraggableList openingtags={{ openingtagsend, closingtagsend }} />
      <CodeEditor />
      {/* <DraggableListComponent item={senditem} /> */}
    </div>
  );
};

export default NewList;
