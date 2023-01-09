import React, { useState } from 'react';
import Data from './Data';
import DraggableList from './DraggableList';

const DraggableListComponent = (props) => {
  const [tagName, settagName] = useState('');

  const filtereditems = Data.filter((item) => {
    return item.tags.some((x) => x.tag_name.includes(props.item));
  });

  const filter_tag_value = filtereditems.map((x) => {
    return x.tags
      .filter((x) => x.tag_name.includes(props.item))
      .map((x) => {
        return x.tag_name;
      });
  });

  return (
    <div>
      {/* {filter_tag_value} */}
      <DraggableList items={filter_tag_value} />
    </div>
  );
};

export default DraggableListComponent;
