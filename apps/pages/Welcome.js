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
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Image source={require('../img/cloudy.png')} style={style.img} />
        <Text style={style.textheader}>{'Thailand Weather Forcast'}</Text>
        <Button
          containerStyle={style.btn}
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="white"
              style={{
                marginRight: 10,
              }}
            />
          }
          title="เข้าใช้งาน" //iconRight
        />
        <Button
          icon={
            <Icon
              name="book"
              size={15}
              color="white"
              style={{
                marginRight: 10,
              }}
            />
          }
          containerStyle={style.btn}
          title="คู่มือการใช้งาน"
        />
        <Text style={style.textfooter}>
          {'Powered API by Thai Meteorological Department'}
        </Text>
      </View>
    );
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
  img: {
    height: 200,
    width: 200,
    marginTop: 20,
    marginBottom: 10,
  },
  textheader: {
    color: '#FFFFFF',
    fontSize: 30,
    margin: 15,
  },
  textfooter: {
    color: '#FFFFFF',
    marginTop: 40,
  },
  btn: {
    margin: 5,
    width: 200,
  },
});
