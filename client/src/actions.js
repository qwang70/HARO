export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const LOGIN_REQUEST = 'LOGON_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const GET_MATERIALS_REQUEST = 'GET_MATERIALS_REQUEST'
export const GET_MATERIALS_SUCCESS = 'GET_MATERIALS_SUCCESS'
export const REFRESH_MATERIALS = 'REFRESH_MATERIALS'

function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST
  }
}

function registrationSuccess(json) {
  console.log(json.userId)
  return {
    type: REGISTRATION_SUCCESS,
    userId: json.userId
  }
}

function loginRequest(json) {
  return {
    type: LOGIN_REQUEST,
    userId: json.userId
  }
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

function getMaterialsRequest() {
  return {
    type: GET_MATERIALS_REQUEST
  }
}

function getMaterialsSuccess(json) {
  return {
    type: GET_MATERIALS_SUCCESS,
    materials: json
  }
}

function getMaterials(userId) {
  return dispatch => {
    dispatch(getMaterialsRequest())
    return fetch(`/users/${userId}/requests`)
      .then(res => res.json())
      .then(json => dispatch(getMaterialsSuccess(json)))
  }
}

function shouldGetMaterials(state) {
  const materials = state.materials
  if (!materials) {
    return true
  } else if (materials.isFetching) {
    return false
  } else {
    return materials.isOutdated
  }
}

export function refreshMaterials(userId) {
  return {
    type: refreshMaterials    
  }
}

export function getMaterialsIfNecessary(userId) {
  return (dispatch, getState) => {
    if (shouldGetMaterials(getState())) {
      return dispatch(getMaterials(userId))
    }
  }
}

export function registerUser(userInfo) {
  console.log(userInfo)
  return dispatch => {
    dispatch(registrationRequest())
    return fetch('/register', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(json => dispatch(registrationSuccess(json)))
  }
}

export function requestMaterial(userInfo){
  return dispatch => {
    dispatch(getMaterialsRequest())
    //TODO: change 2 to be the sotred user id
    return fetch('/users/2/materials', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
      }).then(res => res.json())
      .then(json => dispatch(getMaterialsRequest()))
  }
}
export function loginUser(userInfo) {
  console.log(userInfo)
  return dispatch => {
    dispatch(loginRequest())
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(json => dispatch(loginSuccess(json)))
  }
}
