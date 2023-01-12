import React, { useState } from 'react';
import Data from './Data';
import NewList from './NewList';

const NewSearch = (props) => {
  const searchResults = Data.filter((item) => {
    return (
      item.category_name
        .toLowerCase()
        .includes(props.searchitem.toLowerCase()) ||
      item.name_definition
        .toLowerCase()
        .includes(props.searchitem.toLowerCase()) ||
      item.search_tags
        .toLocaleString()
        .includes(props.searchitem.toLocaleString()) ||
      item.tags.some((x) =>
        x.browser_support
          .toLocaleString()
          .includes(props.searchitem.toLowerCase())
      ) ||
      item.tags.some((x) =>
        x.default_value.toLowerCase().includes(props.searchitem.toLowerCase())
      )
    );
  });
  return (
    <div>
      <hr />
      <NewList sendsearchresult={searchResults} />
    </div>
  );
};

export default NewSearch;
