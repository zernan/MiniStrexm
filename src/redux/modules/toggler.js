import {TOGGLE_VISIBILITY, DISPLAY_VISIBILITY} from './actions'
import { actionToggle, displayVisibility } from './actionCreators'
import { defaultStateList } from '../../components/MiniStrexmApp/MiniStrexmApp'

/*
//Apply initial state
const initialState = {
    Alerts:true, //checkboxes from Menu Pane
    TopBar:true,
    BottomBar:true,
    WebCam:true,
    WebCamLocation: { top:0, left:0 }, //relocating webcam from topleft corner
    NeedsToBeSaved:false, // save button from top toolbar, will do multiple things when pressed
  };
*/

// toggler reducer:
const togglerReducer = (state=defaultStateList, action)=> {
  
  let newState = {...state};
  
  newState['NeedsToBeSaved'] = true; //any actions would enabled the save button
  
  switch(action.type){
    case TOGGLE_VISIBILITY:
    {
      let label = action === undefined ? null : action.label;
      console.log('toggle visibility')
      console.log(action)
      console.log(action.label)
      console.log(label)
      
      if(label != null){
            newState[label] = !state[label];
      }
    
      console.log(newState)
      return newState;
    }
      
    default:
      return state;
  }
}

export default togglerReducer;
