import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class $titlePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("$title"),
      ),
      body: WebView(
        initialUrl: "$url",
        javascriptMode: JavascriptMode.unrestricted,
      ), 
    );
  }
}
