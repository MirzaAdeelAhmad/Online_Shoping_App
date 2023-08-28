import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import backArrow from '../../Assets/Images/arrow.png';
import CustomTextInput from '../Component/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AddToAddress} from '../Store/Action/Action';
// --------------- importing images and icons -----------
import cityIcon from '../../Assets/Images/city.png';
import buildingIcon from '../../Assets/Images/building.png';
import pinCodeIcon from '../../Assets/Images/pinCode.png';

export default function AddAddress() {
  const navigation = useNavigation();
  const [CityName, setCityName] = useState('');
  const [BuildingName, setBuildingName] = useState('');
  const [PincodeName, setPincodeName] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      {/* -------------  back Arrow  ------------- */}
      <View style={customStyle.BackArrowView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={customStyle.BackArrow}>
            <Image
              source={backArrow}
              style={{width: 20, height: 20, tintColor: '#0C356A'}}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* --------------- inputs -------------- */}
      <View style={{width: '100%', marginTop: 40}}>
        <CustomTextInput
          placeHolder={'Enter City Name'}
          icone={cityIcon}
          textcolor={'black'}
          placeholderTextColor={'gray'}
          Value={CityName}
          OnChangeText={text => setCityName(text)}
        />
      </View>
      <View style={{width: '100%', marginTop: 20}}>
        <CustomTextInput
          placeHolder={'Ente Building Name'}
          icone={buildingIcon}
          textcolor={'black'}
          placeholderTextColor={'gray'}
          Value={BuildingName}
          OnChangeText={text => setBuildingName(text)}
        />
      </View>
      <View style={{width: '100%', marginTop: 20}}>
        <CustomTextInput
          placeHolder={'Enter Pincode Name'}
          icone={pinCodeIcon}
          textcolor={'black'}
          placeholderTextColor={'gray'}
          Value={PincodeName}
          OnChangeText={text => setPincodeName(text)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (CityName !== '' && BuildingName !== '' && PincodeName !== '') {
            dispatch(
              AddToAddress({
                city: CityName,
                building: BuildingName,
                pincode: PincodeName,
              }),
            );
            navigation.goBack();
          }
        }}>
        <View
          style={{
            width: '90%',
            height: 60,
            alignSelf: 'center',
            marginTop: 50,
            backgroundColor: '#102C57',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Save Address</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const customStyle = StyleSheet.create({
  BackArrowView: {
    width: '90%',
    height: '12%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  BackArrow: {
    width: 37,
    height: 37,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0C356A',
  },
});
