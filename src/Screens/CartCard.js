import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeartIcon from '../../Assets/Images/heart-fill.png';

export default function CartCard({
  items,
  onRemoveCart,
  isWishList,
  isAddCartHeart,
  onRemoveFromWishList,
}) {
  return (
    <View
      style={{
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginVertical: 10,
        elevation: 7,
      }}>
      <Image
        source={items.image}
        style={{
          width: '100%',
          height: 120,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          marginHorizontal: 20,
          marginTop: 7,
        }}>
        {items.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 20}}>
          {'Rs' + ' ' + items.price}
        </Text>
        {/* ------------ Remove  Button ---------- */}
        {isWishList ? null : (
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              borderWidth: 1,
              borderColor: '#071952',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
            onPress={() => {
              onRemoveCart();
            }}>
            <Text style={{color: 'black'}}>Remove Item</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* --------------- Heart Icon ------------ */}
      {isAddCartHeart ? null : (
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            position: 'absolute',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            top: 7,
            right: 7,
          }}
          onPress={() => {
            onRemoveFromWishList();
          }}>
          <Image
            source={HeartIcon}
            style={{width: 25, height: 25, tintColor: 'red'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
