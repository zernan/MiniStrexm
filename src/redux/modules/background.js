import {AUTO_SAVE, CHANGE_BACKGROUND_SCENE} from './actions'
import { changeBackground, autoSave } from './actionCreators'
import { defaultStateList, backgroundImages } from '../../components/MiniStrexmApp/MiniStrexmApp'

/*
const initialState = {
    Background: backgroundImages[0], //initial background scene CSGO
    NeedsToBeSaved:false, // save button from top toolbar, will do multiple things when pressed
  };
*/

  // background reducer:
const backgroundReducer = (state=defaultStateList, action)=> {
  
  let newState = {...state};
  
  switch(action.type){

    case AUTO_SAVE: {
      alert('PROJECT SAVED AUTOMATICALLY!')
      return newState;
    }

    case CHANGE_BACKGROUND_SCENE: {
      newState['Background'] = backgroundImages[(action.index)%6];
      
      //newState['Background'] = backgroundImages[counter%6];
      return newState;
    }
      
    default:
      return state;
  }
}

export default backgroundReducer;
