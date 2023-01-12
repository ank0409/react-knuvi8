// import React from 'react';

// const htmlCode = '<h1>Hello World</h1>';
// function MyComponent() {
//   return (
//     <iframe
//       width="100%"
//       height="500"
//       frameBorder="0"
//       dangerouslySetInnerHTML={{ __html: htmlCode }}
//     ></iframe>
//   );
// }

// export default MyComponent;

import React, { useState } from 'react';

import Frame from 'react-frame-component';
// import IframeResizer from 'iframe-resizer-react';

const MyComponent = (props) => {
  var valueone = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>HTML 5 Boilerplate</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
   `;
  var valuetwo = ` <script src="index.js"></script>
  </body>
</html>`;

  var valueinbetween = `<h1>Heading One</h1>`;

  var value = valueone + valueinbetween + '\n' + valuetwo;
  // const [text, setText] = useState(

  // );
  // var text =
  //   '<html><head></head><body><h1>i wont be changed</h1></body></html>';

  var starttag = '<html><head></head><body>';
  var htmltag = '<input type="text" value="Submit">';
  var closetag = '</body></html>';

  var text = starttag + htmltag + closetag;

  const [initialtext, setinitialtext] = useState(props.sendhtml);

  const btnHandler = () => {
    setText(props.sendhtml);
    console.log(text);
  };

  return (
    <div>
      {/* <button onClick={btnHandler}>update code</button> */}
      <Frame initialContent={initialtext}></Frame>
      {/* <Frame initialContent={text} mountTarget="#mountHere"></Frame> */}
    </div>
  );
};

export default MyComponent;
