import React, { useRef, useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/htmlmixed/htmlmixed';

import MyComponent from './IFrame';
function CodeEditor({ value }) {
  const editorRef = useRef(null);
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
  useEffect(() => {
    const editor = CodeMirror.fromTextArea(editorRef.current, {
      value: value,
      lineNumbers: true,
      mode: 'htmlmixed',
      theme: 'material',
    });
  }, []);

  return (
    <>
      <textarea ref={editorRef} defaultValue={value} />
      <MyComponent />
    </>
  );
}

export default CodeEditor;
