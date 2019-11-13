import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

import 'Home.dart';


Future<void> main() async {
  // Obtain a list of the available cameras on the device.
  // final cameras = await availableCameras();
  // final firstCamera = cameras.first;

  final CameraDescription camera = new CameraDescription();
  final firstCamera = camera;

  runApp(
    MaterialApp(
      title: "TCC Ronaldo",
      theme:ThemeData(
        primaryColor: Color(0xffffa000),
        accentColor: Color(0xff388e3c),
        // Define the default font family.
        fontFamily: 'Montserrat',

        // Define the default TextTheme. Use this to specify the default
        // text styling for headlines, titles, bodies of text, and more.
        // textTheme: TextTheme(
        //   headline: TextStyle(fontSize: 72.0, fontWeight: FontWeight.bold),
        //   title: TextStyle(fontSize: 36.0, fontStyle: FontStyle.italic),
        //   body1: TextStyle(fontSize: 14.0, fontFamily: 'Hind'),
        // ),
      ),
      home: Home(camera: firstCamera)
        // Pass the appropriate camera to the TakePictureScreen widget.
      //   camera: firstCamera,
      // ),
    ),
  );
}