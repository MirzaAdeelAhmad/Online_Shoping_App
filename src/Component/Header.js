import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View
      style={{
        width: '100%',
        height: 72,
        flexDirection: 'row',
        backgroundColor: '#071952',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
      }}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '300',
            color: 'rgb(238, 238, 238)',
          }}>
          Shoping App
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{color: 'white'}}>Mode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
