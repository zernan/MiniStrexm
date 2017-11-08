import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiniStrexmApp from './components/MiniStrexmApp/MiniStrexmApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MiniStrexmApp />, document.getElementById('root'));
registerServiceWorker();
