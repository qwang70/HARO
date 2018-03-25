export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const LOGIN_REQUEST = 'LOGON_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const POST_MATERIALS_REQUEST = 'POST_MATERIALS_REQUEST'
export const POST_MATERIALS_SUCCESS = 'POST_MATERIALS_SUCCESS'
export const GET_MATERIALS_REQUEST = 'GET_MATERIALS_REQUEST'
export const GET_MATERIALS_SUCCESS = 'GET_MATERIALS_SUCCESS'
export const REFRESH_MATERIALS = 'REFRESH_MATERIALS'

function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST
  }
}

function registrationSuccess(json) {
  return {
    type: REGISTRATION_SUCCESS,
    userId: json.userId
  }
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  }
}

function loginSuccess(json) {
  console.log(json.userId)
  return {
    type: LOGIN_SUCCESS,
    userId: json.userId
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

function postMaterialsRequest() {
  return {
    type: POST_MATERIALS_REQUEST
  }
}

function postMaterialsSuccess(json) {
  return {
    type: POST_MATERIALS_SUCCESS,
    materials: json
  }
}

function getMaterials(userId) {
  return dispatch => {
    dispatch(getMaterialsRequest())
    //TODO hardcode
    return fetch(`/users/2/materials`)
      .then(res => res.json())
      .then(json => dispatch(getMaterialsSuccess(json)))
  }
}

function shouldGetMaterials(state) {
  const materials = state.materials
  // if (!materials.items) {
  //   return true
  // } else if (materials.isFetching) {
  //   return false
  // } else {
  //   return materials.isOutdated
  // }
  return true
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

export function requestMaterial(material) {
  return (dispatch, getState) => {
    let userId = getState().userId
    dispatch(postMaterialsRequest())
    return fetch(`/users/${userId}/materials`, {
      method: 'POST',
      body: JSON.stringify(material),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
      .then(json => dispatch(postMaterialsSuccess()))
  }
}
export function loginUser(userInfo) {
  return dispatch => {
    dispatch(loginRequest())
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(
      res => {
        if (res.ok) {
          return res.json()
        }
      }).then(json => dispatch(loginSuccess(json)))
  }
}
