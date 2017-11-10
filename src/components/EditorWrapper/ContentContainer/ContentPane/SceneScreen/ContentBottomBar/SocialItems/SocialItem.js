import React, { Component } from 'react';

class SocialItem extends Component {
  constructor(){
  	super()
  }

  render() {
  	const {label} = this.props;
  	
    return (
      <div className="SocialItem">
        {label}	
      </div>
    );
  }
}

export default SocialItem;