import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// ------------ Importing Images And Icons --------------
import profileIcon from '../../Assets/Images/profile.png';
import settingIcon from '../../Assets/Images/setting.png';
import AddressIcon from '../../Assets/Images/myAdrdress.png';
import myOrderIcon from '../../Assets/Images/myOrder.png';
import OfferIcon from '../../Assets/Images/offer.png';

export default function Profile() {
  const navigation = useNavigation();
  const [UserName, setUserName] = useState('');

  useEffect(() => {
    GetUserName();
  }, []);
  const GetUserName = async () => {
    try {
      const storageValue = await AsyncStorage.getItem('NAME');
      setUserName(storageValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={customStyle.profileAndSetting}>
        <Text style={customStyle.profileTitle}>Profile</Text>
        <Image
          source={settingIcon}
          style={{width: 25, height: 25, tintColor: '#102C57'}}
        />
      </View>
      {/* ---------------- Profile Image And Name ---------------- */}
      <View style={customStyle.ProfilePicAnd}>
        <Image source={profileIcon} style={{width: 100, height: 100}} />
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            paddingTop: 10,
            color: 'black',
          }}>
          {UserName}
        </Text>
      </View>
      {/* ---------------- My Address, My Orders, Offers ------------- */}
      <View style={customStyle.AddressOrderOfferContainer}>
        <View style={customStyle.infoView}>
          <TouchableOpacity
            style={customStyle.infoTouchable}
            onPress={() => navigation.navigate('MyAddress')}>
            <Image source={AddressIcon} style={{width: 25, height: 25}} />
            <Text style={{color: 'black', paddingLeft: 20, fontSize: 18}}>
              My Address
            </Text>
          </TouchableOpacity>
        </View>
        <View style={customStyle.infoView}>
          <TouchableOpacity style={customStyle.infoTouchable}>
            <Image source={myOrderIcon} style={{width: 25, height: 25}} />
            <Text style={{color: 'black', paddingLeft: 20, fontSize: 18}}>
              My Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View style={customStyle.infoView}>
          <TouchableOpacity style={customStyle.infoTouchable}>
            <Image source={OfferIcon} style={{width: 25, height: 25}} />
            <Text style={{color: 'black', paddingLeft: 20, fontSize: 18}}>
              Offers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ------------------    Style Sheet   ---------------------
const {width, height} = Dimensions.get('screen');
const customStyle = StyleSheet.create({
  profileAndSetting: {
    width: width,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileTitle: {
    color: '#102C57',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ProfilePicAnd: {
    width: width,
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddressOrderOfferContainer: {
    width: width,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  infoView: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 5,
    marginBottom: 20,
  },
  infoTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
