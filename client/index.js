import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom"
import App from './App';

process.env.DEVEVELOPMENT ? render(<App />, document.getElementById('app')) :
hydrate(<App />, document.getElementById('app'));
