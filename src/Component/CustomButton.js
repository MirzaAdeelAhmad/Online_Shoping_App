import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

export default function CustomButton({
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  fontSize,
  OnPress,
  ButtonName,
}) {
  return (
    <TouchableOpacity onPress={OnPress}>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Text style={{color: color, fontSize: fontSize}}>{ButtonName}</Text>
      </View>
    </TouchableOpacity>
  );
}
