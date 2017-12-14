import {
  TOGGLE_VISIBILITY,
  DISPLAY_VISIBILITY,
  CHANGE_ALERT,
  DISPLAY_ALERT,
  CHANGE_BACKGROUND_SCENE,
  DISPLAY_BACKGROUND_SCENE,
  AUTO_SAVE
} from './actions'

// Action Creators
export const actionToggle = (label) => ({
  type: TOGGLE_VISIBILITY, label
});

export const displayVisibility = (label) => ({
  type: DISPLAY_VISIBILITY, label
})

export const displayAlert = (alertType) => ({
  type: DISPLAY_ALERT, alertType
});

export const createAlert = (seconds) => ({
  type: CHANGE_ALERT, seconds
});

export const changeBackground = (index) => ({
  type:CHANGE_BACKGROUND_SCENE, index
});

export const autoSave = () => ({
  type:AUTO_SAVE
});