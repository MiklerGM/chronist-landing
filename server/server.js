import { createServer } from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import http from 'http';
import express from 'express';
import fs from 'fs';
import AppRoutes from '../app/routes';

const index = fs.readFileSync('dist/client.html', 'utf8');
const PORT = process.env.PORT || 3000;

// Create HTTP server
const app = new express();
const server = new http.Server(app);

// Serve static files
app.use(express.static('dist'));

// Serve everything else through react-router
app.use((req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <AppRoutes />
    </StaticRouter>
  );


  if (context.url) {
    res.writeHead(301, { Location: context.url });
    res.end();
  } else {
    res.write(index.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`
    ));
    res.end();
  }
});

// Listen incoming HTTP requests
server.listen(PORT);
console.log(`\nApplication available at http://localhost:${PORT}\n`);
