import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import NotFound from './app/components/NotFound';

const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  const html = renderToString(<NotFound />);
  fs.readFile('./dist/index.html', 'utf8', (err, file) => {
    if (err) {
      return console.log(err);
    }
    const document = file.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    res.send(document);
  }
  );
});

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });

app.listen(3000);
console.log('=== Go to http://localhost:3000 ===');
