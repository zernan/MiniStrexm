import React, { Component } from 'react';

import logo from '../../logo.svg';
import './MiniStrexmApp.css';
import EditorWrapper from '../EditorWrapper/EditorWrapper';

let counter = 0;


//backround image array
export const backgroundImages = ['https://files.gamebanana.com/img/ss/skins/566eb67915eb3.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1P8trD3eAUtwtaocu9kUs976HlEpRrDSRk_-ZULA-93o3Cdtr',
'https://pbs.twimg.com/media/CzeoyJAXAAADm6y.jpg:large',
'https://i.ytimg.com/vi/6nhdR_Hda0g/maxresdefault.jpg',
'https://steamuserimages-a.akamaihd.net/ugc/882984447753219894/D947D4FA6CC0CA4D3DE8D67D8B40A3EFC462EE19/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C637%3A358&composite-to=*,*%7C637%3A358&background-color=black',
'https://vignette.wikia.nocookie.net/cswikia/images/6/6f/Csgo-de-dust2.png/revision/latest?cb=20140820131233']


/*
// Declare some function that would return the url of the background image
const getImageURL = (index) => {
  console.log('get image url');
  console.log(backgroundImages);
  console.log(index);
  return backgroundImages[index];
}*/

//Apply initial state
export const defaultStateList = {
    Alerts:true, //checkboxes from Menu Pane
    TopBar:true,
    BottomBar:true,
    WebCam:true,
    AlertsSelected:false,    // selected elements from Content Pane 
    TopBarSelected:false,    // through mouse left click in preparation
    BottomBarSelected:false, // for drag drop functionality
    WebCamSelected:false,
    WebCamLocation: { top:0, left:0 }, //relocating webcam from topleft corner
    Background: backgroundImages[0], //initial background scene CSGO
    AlertTypes: ['Tip', 'Follower', 'Host', 'Subscribe', 'Cheer'], // kind of alert items
    NeedsToBeSaved:false, // save button from top toolbar, will do multiple things when pressed
    counter:0,
    hasError:false, // error boundary implementation
    tooltipVisible:false //for tooltip on various display elements
  };

class MiniStrexmApp extends Component {
  constructor(props){
    super(props)
    this.handleAsyncChangeBackground = this.handleAsyncChangeBackground.bind(this)
  }

  handleAsyncChangeBackground(index) {
    // Call the asyncIncrement action
    console.log('handle async');
    console.log(this.props.changeBackground);
    this.props.changeBackground(index);
  }
  
  render() {

    const { stateList, onToggle, changeBackground} = this.props;
    console.log(stateList);
    return (
      <div className="MiniStrexmApp">
        
           <EditorWrapper onToggle={onToggle} stateList={stateList} 
                 changeBackground={()=>this.handleAsyncChangeBackground(stateList['counter']) }/>
      </div>
    );
  }
}

export default MiniStrexmApp;
