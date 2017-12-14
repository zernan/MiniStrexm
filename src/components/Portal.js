
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    let element = document.getElementById('scene-screen')
    element.appendChild(this.el)
    //console.log(document.body)
    //console.log(this.el)
  }

  componentWillUnmount() {
    let element = document.getElementById('scene-screen')
    element.removeChild(this.el)
    //console.log(document.body)
  }
 
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);//document.getElementById('portal-target'));
  }
}

export default Portal;
