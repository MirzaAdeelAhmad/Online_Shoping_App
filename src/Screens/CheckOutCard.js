import {View, Text, Image} from 'react-native';
import React from 'react';

export default function CheckOutCard({items}) {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 5,
        backgroundColor: 'rgb(242, 242, 242)',
        elevation: 1,
      }}>
      <View>
        <Image
          source={items.image}
          style={{width: 70, height: 70, borderRadius: 3}}
        />
      </View>
      <View style={{paddingLeft: 20}}>
        <Text style={{fontSize: 18, color: 'black'}}>{items.name}</Text>
        <Text style={{fontSize: 15, color: 'black'}}>Rs {items.price}</Text>
      </View>
    </View>
  );
}
