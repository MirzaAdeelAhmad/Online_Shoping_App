import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginlogo from '../../Assets/Images/logo2_ecommerce-removebg-preview.png';
import CustomTextInput from '../Component/CustomTextInput';
import CustomButton from '../Component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import EyeIcon from '../../Assets/Images/eye.png';
import EyeSlashIcon from '../../Assets/Images/eyeSlash.png';

const Login = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('screen');
  const [changeIcone, setchangeIcone] = useState(true);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [BadEmail, setBadEmail] = useState(false);
  const [BadPassword, setBadPassword] = useState(false);

  const changeIconeFunc = () => {
    setchangeIcone(!changeIcone);
  };

  const LoginButtonFunc = () => {
    if (Email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (Password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
      GetUserData();
    }
    // GetUserData();
  };

  const GetUserData = async () => {
    const UserEmail = await AsyncStorage.getItem('EMAIL');
    const UserPassword = await AsyncStorage.getItem('PASSWORD');
    // const userPhone = await AsyncStorage.getItem('PHONENO');
    // const userName = await AsyncStorage.getItem('NAME');

    // console.log(UserEmail);
    // console.log(UserPassword);
    // console.log(userPhone);
    // console.log(userName);
    if (Email == UserEmail && Password == UserPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('ERROR', '*Incorrect Email or Password');
    }
  };
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{width: width, height: height, backgroundColor: 'black'}}>
        <StatusBar hidden={true} />
        <Image source={loginlogo} style={CustomStyle.imageStyle} />
        <Text style={CustomStyle.loginTitle}>Login</Text>
        <CustomTextInput
          placeHolder={'Enter Your Email'}
          placeholderTextColor={'white'}
          icone={require('../../Assets/Images/email.png')}
          inputTopMargin={30}
          keybaordType={'email-address'}
          Value={Email}
          OnChangeText={text => setEmail(text)}
          textcolor={'white'}
        />
        {BadEmail === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 25, marginTop: 10}}>
            Please Enter Your Name
          </Text>
        )}

        <CustomTextInput
          placeHolder={'Enter Your Password'}
          placeholderTextColor={'white'}
          icone={require('../../Assets/Images/password.png')}
          PasswordIcon={changeIcone ? EyeIcon : EyeSlashIcon}
          ChangeTheIcone={changeIconeFunc}
          inputTopMargin={30}
          secureTextEntry={changeIcone ? true : false}
          Value={Password}
          OnChangeText={text => setPassword(text)}
          textcolor={'white'}
        />
        {BadPassword === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 25, marginTop: 10}}>
            Please Enter Your Password
          </Text>
        )}

        <CustomButton
          width={'90%'}
          height={60}
          backgroundColor={'rgb(110, 65, 216)'}
          borderRadius={10}
          color={'white'}
          fontSize={20}
          OnPress={LoginButtonFunc}
          ButtonName={'Login'}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={CustomStyle.createAccountText}>Create New Account?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const CustomStyle = StyleSheet.create({
  imageStyle: {
    height: 230,
    width: 230,
    alignSelf: 'center',
    marginTop: 20,
  },
  loginTitle: {
    color: 'rgb(110, 65, 216)',
    fontSize: 40,
    fontWeight: '800',
    alignSelf: 'center',
  },
  createAccountText: {
    color: 'rgb(234, 234, 234)',
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
  },
});
