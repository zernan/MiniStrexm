import React, { Component } from 'react';
import './ContentContainer.css';
import ContentPane from './ContentPane/ContentPane';
import ControllerPanel from './ControllerPanel/ControllerPanel'
import ErrorBoundary from '../../ErrorBoundary'

class ContentContainer extends Component {
  
  render() {
  	
   	return (
      <div className="ContentContainer">
        <ErrorBoundary childName='controllerpanel'>
      	    <ControllerPanel onToggle={this.props.onToggle} /> {/*stateList={this.props.stateList}/>*/}
        </ErrorBoundary>
        <ErrorBoundary childName='contentpane'>
            <ContentPane stateList={this.props.stateList} />
        </ErrorBoundary>
      </div>

    )
  }
}

export default ContentContainer;