import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import CartCard from './CartCard';
import Header from '../Component/Header';
import {useDispatch} from 'react-redux';
import {RemoveFromCart} from '../Store/Action/Action';
import cartIcon from '../../Assets/Images/cart2.png';
import {useNavigation} from '@react-navigation/native';

export default function Cart() {
  const storeData = useSelector(store => store.CartReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, paddingBottom: 70, paddingTop: 10}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            fontWeight: 'bold',
            paddingRight: 10,
          }}>
          Cart
        </Text>
        <Image source={cartIcon} style={{width: 40, height: 40}} />
      </View>
      {/* ---------------  Display Cart List  ---------------- */}
      {storeData.length > 0 ? (
        <FlatList
          data={storeData}
          renderItem={({item, index}) => {
            return (
              <CartCard
                items={item}
                isAddCartHeart={'abdasfisd'}
                onRemoveCart={() => {
                  dispatch(RemoveFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: '88%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>No Item Added in Cart</Text>
        </View>
      )}

      {/* ----------------   Checkout Button ------------- */}
      {storeData.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: '8%',
            position: 'absolute',
            top: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: 'orangered',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 3,
            }}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
