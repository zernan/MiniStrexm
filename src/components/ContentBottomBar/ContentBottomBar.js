import React, { Component } from 'react';
import './ContentBottomBar.css';
import SocialItem from './SocialItems/SocialItem';

const socialItems = ['facebook', 'twitter', 'player.me'];

class ContentBottomBar extends Component {
  
  constructor() {
		super(),
		this.state = { isHidden : false }
  }

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
    return (
      <div className="ContentBottomBar">
        	{this.createSocialItems()}
      </div>
    );
  }
}

export default ContentBottomBar;