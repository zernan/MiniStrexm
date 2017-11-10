import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiniStrexmApp from './components/MiniStrexmApp/MiniStrexmApp';
import EditorWrapper from './components/EditorWrapper/EditorWrapper';
import TopToolbar from './components/EditorWrapper/TopToolBar/TopToolbar';
import ContentContainer from './components/EditorWrapper/ContentContainer/ContentContainer';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<MiniStrexmApp>
	               <EditorWrapper>
                      <TopToolbar />
                      <ContentContainer />
                   </EditorWrapper>
                 </MiniStrexmApp>, document.getElementById('root'));
registerServiceWorker();
