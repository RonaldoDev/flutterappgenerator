## Flutter App Generator 
is a project made for Final project in Universidade Federal de Santa Catarina.
http://flutterappgenerator.herokuapp.com

Using a graphical interface you can generate cross-platform app's base on Dart/Flutter.

Our architecture
![FlutterAppGenerator Structure](https://github.com/RonaldoDev/flutterappgenerator/blob/develop/Software%20architecture.png)

## THIS PROJECT IS WORK IN PROCESS AND WILL BE RELEASE IN NOVEMBER 4th
When monography finished, this file will be improved.

## Preparing environment

Put your firebase config on firebase.js on client root directory
```
const config = {
    apiKey: ${YOUR_API_KEY},
    authDomain: "${YOUR_FIREBASE_DOMAIN}.firebaseapp.com",
    databaseURL: "https://${YOUR_FIREBASE_DOMAIN}r.firebaseio.com",
    projectId: "${YOUR_FIREBASE_DOMAIN}",
    storageBucket: "${YOUR_FIREBASE_DOAMIN}.appspot.com",
    messagingSenderId: "${YOUR_FIREBASE_ID}",
    appId: ${YOUR_APP_KEY}
};
```

## Docker build
On root directory exec
### `docker-compose build up --build`
to build and run docker containers.

## Local build
To add dependencies set in /server and /cliet
### `yarn install` 

## Debugging Client
### Set `debugger;` sintax on line desired to debug

## Debugging Server
Config your environment to inspect node and add breakpoint in server file desired.
### Start with `yarn debug`


## Run local
### `yarn dev`on server
### `yarn start`on client

