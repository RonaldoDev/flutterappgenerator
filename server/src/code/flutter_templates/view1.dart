
import 'package:flutter/material.dart';


class view1 extends StatefulWidget {
  view1({Key key}) : super(key: key);

  @override
  _view1State createState() => _view1State();
}

class _view1State extends State<view1> {
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("view1"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:[object Object]
                )
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:
        TextField(
            keyboardType: TextInputType.text,
            style: TextStyle(color: Colors.blue, fontSize: 30),
            decoration: 
                InputDecoration(
                    labelText:"default",
                    labelStyle: TextStyle(color: Colors.black),
                    )
        )
                )
            )]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)])],
            ),
        )
    );
  }
}
