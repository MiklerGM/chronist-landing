import path from 'path';
import { createServer } from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { hydrate } from "react-dom";
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router';
import http from 'http';
import express from 'express';
import compression from 'compression';
import fs from 'fs';
import AppStatic from '../client/AppStatic';

const index = fs.readFileSync('dist/client.html', 'utf8');
const PORT = process.env.PORT || 3030;

// Create HTTP server
const app = new express();
const server = new http.Server(app);


// Use gzip compression;
app.use(compression());
// Serve static files
app.use(express.static('dist'));


app.get('/richpreview.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'richpreview.png'));
});

// Serve everything else through react-router
app.use((req, res) => {
  const context = {};

  const body = ReactDOMServer.renderToString(
    <AppStatic location={req.url} context={context} />
  );

  const head = Helmet.rewind();

  // console.log('helmet head', head.meta.toString());

  const html = index
      .replace(/<div id="app"><\/div>/, `<div id="app">${body}</div>`)
      .replace(/<title>Хронист<\/title>/, `<title>Хронист</title>${head.meta.toString()}${head.title.toString()}`);

  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.set('Content-Type', 'text/html');
    res.write(html);
    res.end();
  }
});

// Listen incoming HTTP requests
server.listen(PORT, () => console.log(`Application available at http://localohost:${PORT}`));
