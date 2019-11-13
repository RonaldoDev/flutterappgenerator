
import 'package:flutter/material.dart';
import 'Camera.dart';
import 'Mapa.dart';
import 'Webview.dart';
import 'Confirmar.dart';


class Home extends StatefulWidget {
  final CameraDescription camera ;
  Home({Key key, this.camera}) : super(key: key);

  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  bool _isSelected = true;
  String dropdownValue = "Faixa etária";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Home"),
        ),
        body: Container(
            padding: EdgeInsets.all(15),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Text(
            'Cadastro',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: 12, color: Color(0xff000000)),
          )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:
        TextField(
            keyboardType: TextInputType.text,
            style: TextStyle(fontSize: 14),
            decoration: 
                InputDecoration(
                    labelText:"Nome completo",
                    labelStyle: TextStyle(color: Colors.black),
                    )
        )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:DropdownButton<String>(
        value: dropdownValue,
        icon: Icon(Icons.arrow_drop_down),
        iconSize: 24,
        elevation: 16,
        isExpanded: true,
        underline: 
          Container(
            decoration: const BoxDecoration(
                border: Border(bottom: BorderSide(color: Colors.grey))
            ),
          ),
        onChanged: (String newValue) {
          setState(() {
            dropdownValue = newValue;
          });
        },
        items: <String>["10-18","19-25"].map<DropdownMenuItem<String>>((String value) {
            return DropdownMenuItem<String>(
              value: value,
              child: Text(value),
            );
          }).toList(),
      )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:
         Row(
            children: 
                <Widget>[
                    Checkbox(
                        value: _isSelected, 
                        activeColor: Theme.of(context).primaryColor
                        checkColor: Theme.of(context).primaryColor
                        onChanged: (bool value) {
                            setState(() {
                                _isSelected = value;
                            });
                        }), 
                    Text("Possui Foto?")
                ]
            )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
            Text(
            'Avatar',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: 12, color: Color(0xff9c27b0)),
          ),
            IconButton(
                icon: Icon(Icons.person),
                color: Color(0xff9c27b0),
                iconSize: 48,
                onPressed: () {
                Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => CameraPage(camera: widget.camera),
                  ),

              );
                },
            )
            
            ],
        )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
            Text(
            'Endereço',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: 12, ),
          ),
            IconButton(
                icon: Icon(Icons.map),
                color: Theme.of(context).accentColor,
                iconSize: 48,
                onPressed: () {
                Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => MapaPage(),
                  ),

              );
                },
            )
            
            ],
        )
                ))
            )]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
            Text(
            'Perfil',
            textAlign: TextAlign.center,
            overflow: TextOverflow.ellipsis,
            style: TextStyle( fontSize: 12, ),
          ),
            IconButton(
                icon: Icon(Icons.web),
                color: Theme.of(context).primaryColor,
                iconSize: 48,
                onPressed: () {
                Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => WebviewPage(),
                  ),

              );
                },
            )
            
            ],
        )
                ))
            )]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Flexible(
            fit: FlexFit.tight,
            child: Center( child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child:FlatButton(
            color: Color(0xff2196f3),
            textColor: Colors.white,
            disabledColor: Colors.grey,
            disabledTextColor: Colors.black,
            splashColor: Colors.blueAccent,
            onPressed: () {
                Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => ConfirmarPage(),
                  ),

              );
            },
            child: 
                Text(
                    "Confirmar",
                    style: TextStyle(fontSize: 20.0),
                ),
        )
                ))
            )]),Row(children: <Widget>[Container(height: 50)]),Row(children: <Widget>[Container(height: 50)])],
            ),
        )
    );
  }
}
