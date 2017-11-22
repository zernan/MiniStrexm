import React, { Component } from 'react';
import './ContentBottomBar.css';
import SocialItem from './SocialItems/SocialItem';

const socialItems = ['facebook', 'twitter', 'player.me'];

class ContentBottomBar extends Component {
  
  createSocialItem = label => (
    	<SocialItem
      		label={label}
      		key={label}
    	/>
  	)

  	createSocialItems = () => (
    	socialItems.map(this.createSocialItem)
  	)


  render() {
    if(this.props.visible === true)
    {
    return (
      <div className="ContentBottomBar">
        	{this.createSocialItems()}
      </div>
    );
    }
    else {return null;}
  }
}

export default ContentBottomBar;