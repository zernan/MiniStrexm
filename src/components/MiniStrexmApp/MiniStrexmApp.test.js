import React from 'react';
import ReactDOM from 'react-dom';
import MiniStrexmApp from './MiniStrexmApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MiniStrexmApp />, div);
});
