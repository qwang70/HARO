# HARO
NYU Hackathon 2018
## Authentication
### Register
* **URL**

    `register`
* **Method**

    `POST`
* **Data Prams**

    `{userName: "john", password: "password", email: "abc@example.com", title: "Volunteer"}`
* **Success Response**
    * Code: `201`
    * Content: `{id: 3}`

* **Error Response**
    * Code: `409`
    * Content: `{error: "User already exists"}`

### Login
* **URL**

    `login`
* **Method**

    `POST`
* **Data Params**

    `{email: john@example.com, password: password}`
* **Success Response**
    * Code: `200`
    * Content: `{id: 3}`

* **Error Response**
    * Code: `404`
    * Content: `{error: "User does not exist"}`

## Resource Request
### Get requests status 
* **URL**

    `requests/`
* **Method**

    `GET`
* **Success Response**
    * Code: `200`
    * Content: `{[{requestId: 12, status: "Rejected", resource: "Apple", description: "Many"}, {...}]}`

* **Error Response**
    * Code: `404`
    * Content: `{error: "loser"}`
    
### Post a request
* **URL**

    `/request`
* **Method**

    `POST`
* **Data Prams**

    `{userId: 3, resource: "HooYa", description: "private", "location": {lat: 1, lng: 2}}`
* **Success Response**
    * Code: `200`

* **Error Response**
    * Code: `409`
    * Content: `{error: "Something happened"}`

### Delete a Playlist
* **URL**

    `api/playlists/:id`
* **Method**

    `DELETE`
* **Success Response**
    * Code: `200`
    * Content: `Delete Success`

* **Error Response**
    * Code: `404`
    * Content: `{error: user or list does not exist}`
