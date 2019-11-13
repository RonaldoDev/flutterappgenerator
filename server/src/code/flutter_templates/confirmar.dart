
import 'package:flutter/material.dart';


class Confirmar extends StatefulWidget {
  final CameraDescription camera ;
  Confirmar({Key key, this.camera}) : super(key: key);

  @override
  _ConfirmarState createState() => _ConfirmarState();
}

class _ConfirmarState extends State<Confirmar> {
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Confirmar"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Text(
            'Cadastro realizado!',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: 12, ),
          )
                ))
            )]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)])],
            ),
        )
    );
  }
}
