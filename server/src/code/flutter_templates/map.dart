
import 'package:flutter/material.dart';


class Map extends StatefulWidget {
  Map({Key key, this.camera}) : super(key: key);

  @override
  _MapState createState() => _MapState();
}

class _MapState extends State<Map> {
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Map"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)])],
            ),
        )
    );
  }
}
