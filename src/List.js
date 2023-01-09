import React, { useState } from 'react';

const List = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Item 1',
      children: [
        { id: '1.1', name: 'Item 1.1' },
        { id: '1.2', name: 'Item 1.2' },
      ],
    },
    {
      id: '2',
      name: 'Item 2',
      children: [
        { id: '2.1', name: 'Item 2.1' },
        { id: '2.2', name: 'Item 2.2' },
      ],
    },
    {
      id: '3',
      name: 'Item 3',
      children: [
        { id: '3.1', name: 'Item 3.1' },
        { id: '3.2', name: 'Item 3.2' },
      ],
    },
  ]);

  const [filter, setFilter] = useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    if (item.name.includes(filter)) {
      return true;
    }
    if (item.children) {
      return item.children.some((child) => child.name.includes(filter));
    }
    return false;
  });

  return (
    <div>
      <input value={filter} onChange={handleChange} />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.children && (
              <ul>
                {item.children.map((child) => (
                  <li key={child.id}>{child.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
