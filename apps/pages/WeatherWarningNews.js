import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Linking,
  Alert,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WeatherWarningNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });

    this.setState.isLoading = true;

    return fetch(
      'https://data.tmd.go.th/api/WeatherWarningNews/v1/?uid=demo&ukey=demokey&format=json',
    )
      .then(response => {
        try {
          response.json();
        } catch (error) {
          this.setState({raw: response.text()})
          response = null;
        }
      })
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }else if (this.state.responseJson == null) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#66B2FF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={style.textheader}>{'ประกาศเหตุฉุกเฉิน'}</Text>
          <Text style={style.textupdate}>อัพเดทล่าสุด: {this.state.date}</Text>
          <Image
            source={require('../img/barrier.png')}
            style={{
              height: 200,
              width: 200,
              marginTop: 20,
              marginBottom: 10,
            }}
          />
          <Text style={style.textheader}>
            {'Sorry. API format error!'}
          </Text>
          <Button title="View raw data" onPress={ ()=>{ Linking.openURL('https://data.tmd.go.th/api/WeatherWarningNews/v1/?uid=demo&ukey=demokey&format=json')}} />
        </View>
      );
    }else{


    }
  }
}

function convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g, function(a, b) {
    var charcode = parseInt(b, 16);
    return String.fromCharCode(charcode);
  });
}

function delEscape(input) {
  let temp = input.replace(/<br>|\\r|\\n|\\t|\\/gi, function(x) {
    return '';
  });
  return temp;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#66B2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#0066cc',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100,
    marginTop: 20,
    marginBottom: 10,
  },
  textheader: {
    color: '#FFFFFF',
    fontSize: 30,
    margin: 15,
  },
  textupdate: {
    color: '#FFFFFF',
    marginBottom: 50,
  },
  btn: {
    margin: 5,
    width: 200,
  },
});
