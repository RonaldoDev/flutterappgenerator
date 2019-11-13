import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebviewPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Webview"),
      ),
      body: WebView(
        initialUrl: "'https://ufsc.com'",
        javascriptMode: JavascriptMode.unrestricted,
      ), 
    );
  }
}
