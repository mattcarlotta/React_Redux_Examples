import './styles/app.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './routes/root';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
