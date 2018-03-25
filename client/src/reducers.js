import { combineReducers } from 'redux'
import {
  LOGIN_SUCCESS,
  REGISTRATION_SUCCESS,
  REFRESH_MATERIALS,
  GET_MATERIALS_REQUEST,
  GET_MATERIALS_SUCCESS
} from './actions'

function userId(state = '', action) {
  switch (action.type) {
    case REGISTRATION_SUCCESS:
      return action.userId
    case LOGIN_SUCCESS:
      return action.userId
    default:
      return state
  }
}

function entities(state = {materials: []}, action) {
  switch (action.type) {
    case GET_MATERIALS_SUCCESS:
      return Object.assign({}, state, {
        materials: action.materials
      })
    default:
      return state
  }
}


function materials(state = {}, action) {
  switch (action.type) {
    case GET_MATERIALS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isOutdated: false
      })
    case GET_MATERIALS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isOutdated: false,
        items: action.materials.map(material => material.materialId)
      })
    case REFRESH_MATERIALS:
      return Object.assign({}, state, {
        isOutdated: true
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userId,
  entities,
  materials
})

export default rootReducer