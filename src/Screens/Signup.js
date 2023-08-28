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
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ----------------- Importing Component ------------------
import CustomTextInput from '../Component/CustomTextInput';
import CustomButton from '../Component/CustomButton';
// ----------------- importing Logo And Images --------------------
import leftAngle from '../../Assets/Images/leftangle.png';
import usericon from '../../Assets/Images/user.png';
import EmailIcom from '../../Assets/Images/email.png';
import PasswordIcon from '../../Assets/Images/password.png';
import eyeIcon from '../../Assets/Images/eye.png';
import eyeSlashIcon from '../../Assets/Images/eyeSlash.png';
import MobileLogo from '../../Assets/Images/mobile.png';

const Signup = () => {
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  // -------------------  States  ----------------------
  const [ChangeIcon, setChangeIcon] = useState(true);
  const [Name, setName] = useState('');
  const [BadName, setBadName] = useState(false);
  const [Email, setEmail] = useState('');
  const [BadEmail, setBadEmail] = useState(false);
  const [PhoneNo, setPhoneNo] = useState('');
  const [BadPhoneNo, setBadPhoneNo] = useState(false);
  const [Password, setPassword] = useState('');
  const [BadPassword, setBadPassword] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [BadConfirmPassword, setBadConfirmPassword] = useState(false);

  const ChangeIconFunction = () => {
    setChangeIcon(!ChangeIcon);
  };

  const SignupButtonFunc = () => {
    if (Name === '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (Email === '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (PhoneNo === '') {
      setBadPhoneNo(true);
    } else if (PhoneNo.length < 11) {
      setBadPhoneNo(true);
    } else {
      setBadPhoneNo(false);
    }
    if (Password === '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    if (ConfirmPassword === '') {
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false);
    }
    if (Password == ConfirmPassword) {
      setBadConfirmPassword(false);
      setTimeout(() => {
        if (
          BadName == false &&
          BadEmail == false &&
          BadPhoneNo == false &&
          BadPassword == false &&
          BadConfirmPassword == false
        ) {
          SaveUserDataOnStorage();
        }
      }, 1000);
    } else {
      setBadConfirmPassword(true);
      Alert.alert('Sorry', 'Please Enter Correct Information❗');
    }
  };

  const SaveUserDataOnStorage = async () => {
    await AsyncStorage.setItem('NAME', Name);
    await AsyncStorage.setItem('EMAIL', Email);
    await AsyncStorage.setItem('PHONENO', PhoneNo);
    await AsyncStorage.setItem('PASSWORD', Password);
    Alert.alert('SIGN UP', 'Succesfully Signup 🎉');
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{width: width, height: height, backgroundColor: 'black'}}>
        <StatusBar hidden={true} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={leftAngle}
            style={{width: 25, height: 25, marginTop: 10, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text style={CustomStyle.SignupTitle}>Create New Account</Text>
        {/* ------------------ Input Text ------------------ */}
        <CustomTextInput
          placeHolder={'Enter Your Name'}
          placeholderTextColor={'white'}
          textcolor={'white'}
          icone={usericon}
          inputTopMargin={20}
          Value={Name}
          OnChangeText={text => setName(text)}
        />
        {BadName === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 30, marginTop: 5}}>
            Please Enter Your Name
          </Text>
        )}

        <CustomTextInput
          placeHolder={'Enter Your Email'}
          placeholderTextColor={'white'}
          textcolor={'white'}
          icone={EmailIcom}
          inputTopMargin={20}
          Value={Email}
          OnChangeText={text => setEmail(text)}
        />
        {BadEmail === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 30, marginTop: 5}}>
            Please Enter Your Email
          </Text>
        )}

        <CustomTextInput
          placeHolder={'Enter Mobile No'}
          placeholderTextColor={'white'}
          textcolor={'white'}
          icone={MobileLogo}
          inputTopMargin={20}
          Value={PhoneNo}
          keybaordType={'number-pad'}
          OnChangeText={text => setPhoneNo(text)}
        />
        {BadPhoneNo === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 30, marginTop: 5}}>
            Please Enter Your Phone No
          </Text>
        )}
        <CustomTextInput
          placeHolder={'Enter Password'}
          placeholderTextColor={'white'}
          textcolor={'white'}
          icone={PasswordIcon}
          ChangeTheIcone={ChangeIconFunction}
          inputTopMargin={20}
          secureTextEntry={ChangeIcon ? false : true}
          PasswordIcon={!ChangeIcon ? eyeIcon : eyeSlashIcon}
          Value={Password}
          OnChangeText={text => setPassword(text)}
        />
        {BadPassword === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 30, marginTop: 5}}>
            Please Enter Your Password
          </Text>
        )}
        <CustomTextInput
          placeHolder={'Enter Confirm Password'}
          placeholderTextColor={'white'}
          textcolor={'white'}
          icone={PasswordIcon}
          ChangeTheIcone={ChangeIconFunction}
          inputTopMargin={20}
          secureTextEntry={ChangeIcon ? false : true}
          PasswordIcon={!ChangeIcon ? eyeIcon : eyeSlashIcon}
          Value={ConfirmPassword}
          OnChangeText={text => setConfirmPassword(text)}
        />
        {BadConfirmPassword === true && (
          <Text
            style={{color: 'rgb(255, 0, 43)', marginLeft: 30, marginTop: 5}}>
            Please Enter Your confirm Password
          </Text>
        )}
        {/* ----------------- Login Button --------------- */}
        <CustomButton
          width={'90%'}
          height={60}
          backgroundColor={'rgb(110, 65, 216)'}
          borderRadius={10}
          color={'white'}
          fontSize={20}
          ButtonName={'Signup'}
          OnPress={SignupButtonFunc}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={CustomStyle.createAccountText}>
            Already Have An Account
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const CustomStyle = StyleSheet.create({
  SignupTitle: {
    color: 'rgb(110, 65, 216)',
    fontSize: 27,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 10,
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
