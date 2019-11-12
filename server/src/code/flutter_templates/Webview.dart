import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebViewPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(Webview),
      ),
      body: WebView(
  initialUrl: 'https://ufsc.br',
  javascriptMode: JavascriptMode.unrestricted,
), 
    );
  }
}
