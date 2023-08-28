import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeartIcon from '../../Assets/Images/heart.png';

export default function ProductCard({items, onAddToCart, onAddToWishList}) {
  return (
    <View
      style={{
        width: 170,
        height: 170,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 15,
        elevation: 5,
      }}>
      <Image
        source={items.image}
        style={{
          width: '100%',
          height: 80,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <Text style={{color: 'black', padding: 10}}>{items.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 15}}>
          {'Rs' + ' ' + items.price}
        </Text>
        <TouchableOpacity
          style={{
            width: 82,
            height: 40,
            borderWidth: 1,
            borderColor: '#071952',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}
          onPress={() => {
            onAddToCart(items);
          }}>
          <Text style={{color: 'black'}}>add to cart</Text>
        </TouchableOpacity>
      </View>

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
          onAddToWishList(items);
        }}>
        <Image source={HeartIcon} style={{width: 25, height: 25}} />
      </TouchableOpacity>
    </View>
  );
}
