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

## Get User Info

* **URL**

    `/users/:userId`
* **Method**

    `GET`
* **Success Response**
    * Code: `200`
    * Content: `{id 1, username julie, password secret, email email@gmail.com, title volunteer}`

* **Error Response**
    * Code: `404`
    * Content: `{error: "User does not exist"}`
    

## Resource Request
### Get materials status 
* **URL**

    `/users/:userId/materials`
* **Method**

    `GET`
* **Success Response**
    * Code: `200`
    * Content: `{[{materialId: 12, status: "requested", resource: "Apple", description: "Many"}, {...}]}`

* **Error Response**
    * Code: `404`
    * Content: `{error: "loser"}`
    
### Post a request
* **URL**

    `/users/:userId/materials`
* **Method**

    `POST`
* **Data Prams**

    `{userId: 3, resource: "HooYa", description: "private", "location": {lat: 1, lng: 2}}`
* **Success Response**
    * Code: `200`

* **Error Response**
    * Code: `409`
    * Content: `{error: "Something happened"}`

### Deliver materials 
* **URL**

    `/users/:userId/materials/:materialId`
* **Method**

    `PUT`
* **Body**
    `{status: delivering/delivered}`
* **Success Response**
    * Code: `200`
    * Content: `{requestId: 12, userId:2, providerId:1, status: "delivering", resource: "Apple", description: "Many"}`

* **Error Response**
    * Code: `404`
    * Content: `{error: "Something happened"}`