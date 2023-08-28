import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import logoImage from '../../Assets/Images/logo2_ecommerce-removebg-preview.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('Login');
      GetUserDataForChecking();
    }, 6000);
  }, []);

  const GetUserDataForChecking = async () => {
    const userEmail = await AsyncStorage.getItem('EMAIL');
    const userPassword = await AsyncStorage.getItem('PASSWORD');
    // console.log(userEmail);
    // console.log(userPassword);
    if (userEmail == '' || userEmail == null || userEmail == undefined) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60,
      }}>
      <StatusBar hidden={true} />
      <Image source={logoImage} />
    </View>
  );
};

export default Splash;
