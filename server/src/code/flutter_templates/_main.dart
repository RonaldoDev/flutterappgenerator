import 'package:camera/camera.dart';
import 'package:flutter/material.dart';

$import


Future<void> main() async {
  // Obtain a list of the available cameras on the device.
  // final cameras = await availableCameras();
  // final firstCamera = cameras.first;

  final CameraDescription camera = new CameraDescription();
  final firstCamera = camera;

  runApp(
    MaterialApp(
      title: "$appName",
      theme:ThemeData(
        primaryColor: $colorPrimary,
        accentColor: $colorSecondary,
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
      home: $firstPage(camera: firstCamera)
        // Pass the appropriate camera to the TakePictureScreen widget.
      //   camera: firstCamera,
      // ),
    ),
  );
}