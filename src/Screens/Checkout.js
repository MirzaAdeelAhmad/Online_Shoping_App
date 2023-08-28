import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import CheckOutCard from './CheckOutCard';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function Checkout() {
  const storeData = useSelector(store => store.CartReducer);
  const storeAddressData = useSelector(store => store.AddressReducer);
  const [addAdress, setaddAdress] = useState('');
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  const [Loader, setLoader] = useState(false);
  //  ----------- Get Total Amont --------
  const TotalAmont = () => {
    let total = 0;
    storeData.map(curElem => {
      total = total + curElem.price;
    });
    return total;
  };

  const OrderPlaced = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigation.navigate('PlaceOrder');
    }, 3000);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{height: height}}>
        <View
          style={{
            marginTop: 50,
            borderBottomWidth: 0.3,
          }}>
          {/* ------------ display Selected Item ----------- */}
          <FlatList
            data={storeData}
            renderItem={({item, index}) => {
              return <CheckOutCard items={item} />;
            }}
          />
        </View>
        {/* -------------  Display Total Amount  ------------- */}
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 18, color: '#102C57', fontWeight: 'bold'}}>
            Total
          </Text>
          <Text style={{fontSize: 18, color: '#102C57', fontWeight: 'bold'}}>
            Rs {TotalAmont()}
          </Text>
        </View>
        {/* ----------------  Display Address ---------------- */}
        <View>
          <FlatList
            data={storeAddressData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    borderTopWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        paddingVertical: 1,
                      }}>
                      City: {item.city}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        paddingVertical: 1,
                      }}>
                      Building: {item.building}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: 'black',
                        paddingVertical: 1,
                      }}>
                      Pincode: {item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      setaddAdress(
                        item.city + ',' + item.building + ',' + item.pincode,
                      )
                    }>
                    <View
                      style={{
                        width: 90,
                        height: 30,
                        backgroundColor: '#102C57',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white', fontSize: 12}}>
                        Add Address
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <Text style={{alignSelf: 'center', fontSize: 18, color: '#102C57'}}>
          {addAdress == ''
            ? 'Please Select Address From Above Button'
            : addAdress}
        </Text>

        {/* -------------- Place Order Button -------------0- */}
        <TouchableOpacity onPress={OrderPlaced}>
          <View
            style={{
              width: '90%',
              height: 55,
              backgroundColor: 'orangered',
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Place Order
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Loader ? <ActivityIndicator size={60} /> : null}
      </View>
    </View>
  );
}
