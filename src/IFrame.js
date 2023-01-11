import React from 'react'

const htmlCode = "<h1>Hello World</h1>"

function MyComponent() {
  return (
    <iframe
      width="100%"
      height="500"
      frameBorder="0"
      dangerouslySetInnerHTML={{ __html: htmlCode }}
    ></iframe>
  );
}

export default MyComponent