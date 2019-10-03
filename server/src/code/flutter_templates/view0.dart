
import 'package:flutter/material.dart';


class view0 extends StatefulWidget {
  view0({Key key}) : super(key: key);

  @override
  _view0State createState() => _view0State();
}

class _view0State extends State<view0> {
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("view0"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:[object Object]
                )
            )]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)])],
            ),
        )
    );
  }
}
