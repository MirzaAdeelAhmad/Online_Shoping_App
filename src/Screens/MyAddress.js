import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RemoveToAddress} from '../Store/Action/Action';
import backArrowIcon from '../../Assets/Images/arrow.png';

export default function MyAddress() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = useSelector(store => store.AddressReducer);
  return (
    <View style={{flex: 1}}>
      <View style={customStyle.myAddressView}>
        {/* -------  Back Arrow  -------- */}
        <TouchableOpacity
          style={{
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#0C356A',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            source={backArrowIcon}
            style={{width: 20, height: 20, tintColor: '#0C356A'}}
          />
        </TouchableOpacity>
        {/* ----- Add Address Button ----- */}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderRadius: 20,
            borderColor: '#102C57',
            backgroundColor: '#0C356A',
          }}
          onPress={() => navigation.navigate('AddAddress')}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              paddingVertical: 8,
              paddingHorizontal: 10,
            }}>
            Add Address
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          height: '6%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#102C57',
          }}>
          My Address
        </Text>
      </View>
      {/* -----------------  Display Addresses  ---------------- */}
      <FlatList
        data={storeData}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '100%',
                height: 100,
                borderBottomWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{fontSize: 16, color: 'black', paddingVertical: 1}}>
                  City: {item.city}
                </Text>
                <Text
                  style={{fontSize: 16, color: 'black', paddingVertical: 1}}>
                  Building: {item.building}
                </Text>
                <Text
                  style={{fontSize: 16, color: 'black', paddingVertical: 1}}>
                  Pincode: {item.pincode}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(RemoveToAddress(index));
                }}>
                <View
                  style={{
                    width: 90,
                    height: 30,
                    backgroundColor: '#102C57',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Delete</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
const {width, height} = Dimensions.get('screen');
const customStyle = StyleSheet.create({
  myAddressView: {
    width: width,
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(239, 239, 239)',
    elevation: 7,
  },
});
