import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSearch: true,
      keySearch: 'ยะลา',
      tableHead: [
        'วันที่',
        'สภาพอากาศ',
        'อุณหภูมิสูงสุด',
        'อุณหภูมิต่ำสุด',
        'โอกาสฝนตก',
      ],
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

    return fetch(
      'https://data.tmd.go.th/api/WeatherForecast7Days/V1/?type=json&Province=' +
        this.state.keySearch,
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            tableData: [
              [
                responseJson.Provinces[0].SevenDaysForecast[0].Date,
                responseJson.Provinces[0].SevenDaysForecast[0]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[0].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[0].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[0].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[1].Date,
                responseJson.Provinces[0].SevenDaysForecast[1]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[1].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[1].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[1].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[2].Date,
                responseJson.Provinces[0].SevenDaysForecast[2]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[2].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[2].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[2].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[3].Date,
                responseJson.Provinces[0].SevenDaysForecast[3]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[3].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[3].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[3].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[4].Date,
                responseJson.Provinces[0].SevenDaysForecast[4]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[4].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[4].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[4].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[5].Date,
                responseJson.Provinces[0].SevenDaysForecast[5]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[5].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[5].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[5].Rain.Value,
              ],
              [
                responseJson.Provinces[0].SevenDaysForecast[6].Date,
                responseJson.Provinces[0].SevenDaysForecast[6]
                  .WeatherDescription,
                responseJson.Provinces[0].SevenDaysForecast[6].MaxTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[6].MinTemperature
                  .Value,
                responseJson.Provinces[0].SevenDaysForecast[6].Rain.Value,
              ],
            ],
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
    } else {
      const state = this.state;
      return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <TextInput style={{backgroundColor: '#FFFFFF', margin: 10, width:250}} />
            <Button
              containerStyle={{
                marginTop:10,
              }}
              icon={
                <Icon
                  name="search"
                  size={15}
                  color="white"
                  style={{
                    margin: 10,
                  }}
                />
              }
              title="ค้นหา" //iconRight
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              backgroundColor: '#66B2FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textheader}>{'สภาพอากาศล่วงหน้า 7 วัน'}</Text>
            <Text style={styles.textheader}>{this.state.keySearch}</Text>
            <Text style={styles.textupdate}>
              อัพเดทล่าสุด: {this.state.date}
            </Text>
          </View>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={state.tableData} textStyle={styles.text} />
          </Table>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#66B2FF'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  btn: {
    margin: 5,
    width: 200,
  },
  textheader: {
    color: '#FFFFFF',
    fontSize: 30,
    margin: 5,
  },
});