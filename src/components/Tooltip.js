import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal'

class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false,
    };
    
    this.width = props.width || 256;
    this.space = props.space || 16;
    
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }
  
  showTooltip() {
    // some maths to align the tooltip with whatever you just hovered over (the 'target')
    // or maybe it's 'math' in your weird country
    const style = { width: this.width, background:'white', position:'relative'}; // this style object will be passed as the tooltip's 'style' prop
    //console.log(style)
    const dimensions = this.el.getBoundingClientRect(); // where on the screen is the target
    //console.log(dimensions)
    // center align the tooltip by taking both the target and tooltip widths into account
    style.left = (dimensions.left + (dimensions.width / 2)) - (this.width / 2);
    style.left = Math.max(this.space, style.left); // make sure it doesn't poke off the left side of the page
    style.left = Math.min(style.left, document.body.clientWidth - this.width - this.space); // or off the right

    //console.log(style)
    if (dimensions.top < window.innerHeight / 2) { // the top half of the page
      // when on the top half of the page, position the top of the tooltip just below the target (it will stretch downwards)
      style.top = dimensions.top + dimensions.height + this.space;
    } else {
      // when on the bottom half, set the bottom of the tooltip just above the top of the target (it will stretch upwards)
      style.bottom = (window.innerHeight - dimensions.top) + this.space;
    }
    
    //console.log(style)
    
    this.setState({
      visible: true,
      style,
    });
    //console.log(style)
  }
  
  hideTooltip() {
    this.setState({visible: false});
  }
  
  render() {
    return (
      <span // a span so it's valid HTML no matter where it's used
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
        className="tooltip-trigger-text"
        ref={el => this.el = el}
      >
        {this.props.children}
        
        {this.state.visible && (
          <Portal>
            <div // this <div> isn't actually a child of the <span> above.
              className="tooltip-body"
              style={this.state.style}
            >
              {this.props.text}

            </div>
          </Portal>
        )}
      </span>
    );
  }
}

export default Tooltip;