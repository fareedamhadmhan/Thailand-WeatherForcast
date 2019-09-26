import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WeatherForecastDaily extends React.Component {
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
      'https://data.tmd.go.th/api/WeatherForecastDaily/V1/?type=json',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
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
    }else if (this.state.dataSource.DailyForecast.RegionsForecast == null) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#66B2FF',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={style.textheader}>{'รายงานสภาพอากาศประจำวัน'}</Text>
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
            {'ขออภัยในความไม่สะดวก ขณะนี้เจ้าหน้าที่กำลังอัพเดทข้อมูลสภาพอากาศ'}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={style.container}>
          <ScrollView>
            <View style={style.container}>
              <Text style={style.textheader}>{'รายงานสภาพอากาศประจำวัน'}</Text>
              <Text style={style.textupdate}>
                อัพเดทล่าสุด: {this.state.date}
              </Text>
            </View>

            {/* Northern */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[0]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/northern.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[0]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* Northeast */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[1]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/northeast.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[1]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* Central */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[2]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/central.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[2]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* East */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column', //วางแนวตั้งชิดซ้าย
                  marginRight: 10, //ระยะห่างขอบเขต
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[3]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/eastern.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[3]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* Southern East coast */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[4]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/southern.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[4]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* Southern West coast */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[5]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/southern.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[5]
                      .Description
                  }
                </Text>
              </View>
            </View>

            {/* Metropolitan */}
            <View style={style.itemContainer}>
              <View
                style={{
                  width: 100,
                  flexDirection: 'column',
                  marginRight: 10,
                  marginLeft: 10,
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[6]
                      .RegionName
                  }
                </Text>
                <Image
                  source={require('../img/metropolitan.png')}
                  style={style.img}
                />
              </View>
              <View style={{width: 290}}>
                <Text style={{color: '#FFFFFF', fontSize: 20}}>
                  {
                    this.state.dataSource.DailyForecast.RegionsForecast[6]
                      .Description
                  }
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
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
