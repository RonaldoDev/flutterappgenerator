
import 'package:flutter/material.dart';
$import

class $title extends StatefulWidget {
  $title({Key key}) : super(key: key);

  @override
  _$titleState createState() => _$titleState();
}

class _$titleState extends State<$title> {
  $variavel
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("$title"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[$components],
            ),
        )
    );
  }
}
