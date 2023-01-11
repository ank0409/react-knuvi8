import React, { useState } from 'react';
import DraggableList from './DraggableList';
import DraggableListComponent from './DraggableListComponent';
const NewList = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [items, setItems] = useState([]);
  const [senditem, setsenditem] = useState('');

  const onclickbthHandler = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const btnclickPush = (e) => {
    setItems([...items, e.target.value]);
    setsenditem(e.target.value);
  };

  return (
    <div>
      <h1>Tag List</h1>
      {props.sendsearchresult.map((item, index) => (
        <div key={item.id}>
          <button onClick={() => onclickbthHandler(index)}>
            {item.category_name} - {item.name_definition}
          </button>

          {activeIndex === index && (
            <>
              {item.tags.map((x) => {
                return (
                  <li>
                    {x.tag_name}
                    <button onClick={btnclickPush} value={x.tag_name}>
                      +
                    </button>
                  </li>
                );
              })}
            </>
          )}
        </div>
      ))}

      <DraggableList items={items} />
      {/* <DraggableListComponent item={senditem} /> */}
    </div>
  );
};

export default NewList;
