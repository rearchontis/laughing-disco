import React from 'react';
import {WebView} from 'react-native-webview';
import {SQLiteConnection, queryTables} from './db';

export class WebViewWrapper extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.webViewRef = React.createRef();
  }

  render() {
    // setTimeout(() => {
    //   console.log('webref', this.webref.postMessage('getClients'));
    // }, 3000);

    return (
      <WebView
        source={{
          uri: 'http://127.0.0.1:5173/',
        }}
        ref={this.webViewRef}
        onMessage={async event => {
          if (event.nativeEvent.data === 'queryTables') {
            // const db = await SQLiteConnection();
            this.webViewRef.current.postMessage(
              JSON.stringify(await queryTables()),
            );
            // console.log(await db.executeSql('SELECT * FROM Clients'));
          }
        }}
      />
    );
  }
}
