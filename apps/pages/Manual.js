import React from 'react';
import WebView from 'react-native-webview';

export default class manualScreen extends React.Component {
  render() {
      return (
          <WebView
              source={{ uri: 'https://data.tmd.go.th/api/index1.php' }}
              style={{
                  flex: 1,
                  backgroundColor: '#66B2FF'
              }}
          />
      );
  }
}