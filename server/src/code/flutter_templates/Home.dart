import 'package:camera/camera.dart';
import 'package:flutter/material.dart';




Future<void> main() async {
  // Obtain a list of the available cameras on the device.
  final cameras = await availableCameras();

  // Get a specific camera from the list of available cameras.
  final firstCamera = cameras.first;

  runApp(
    MaterialApp(
      title: Text("$appName"),
      home: $firstPage()
        // Pass the appropriate camera to the TakePictureScreen widget.
      //   camera: firstCamera,
      // ),
    ),
  );
}