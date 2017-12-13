import React, { Component } from 'react';

import './ContentWebCam.css';

export default class ContentWebCam extends Component {

  state = { throw: false };

  onClick = () => this.setState({ throw: true });
  
  render() {
    
    if (this.state.throw) throw new Error('What did I tell you?!!!');

    if(this.props.visible === true)
    {
    return (
      <div className="ContentWebCam">
        	WebCam
          <button onClick={this.onClick}>Click me anywhere but here!!!</button>
      </div>
    );
    }
    else {return null;}
  }
}

