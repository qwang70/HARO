export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST' 
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'

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

export function loginUser(userInfo) {
  return {}
}