import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

export default function CustomTextInput({
  placeHolder,
  icone,
  PasswordIcon,
  ChangeTheIcone,
  secureTextEntry,
  Value,
  OnChangeText,
  inputTopMargin,
  keybaordType,
  placeholderTextColor,
  textcolor,
}) {
  return (
    <View
      style={{
        width: '90%',
        height: 60,
        borderWidth: 2,
        borderColor: 'rgb(110, 65, 216)',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: inputTopMargin,
      }}>
      {icone && <Image source={icone} style={{width: 28, height: 28}} />}
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={Value}
        onChangeText={OnChangeText}
        keyboardType={keybaordType}
        style={{
          width: '75%',
          fontSize: 17,
          paddingHorizontal: 15,
          color: textcolor,
        }}
      />

      <TouchableOpacity onPress={ChangeTheIcone}>
        {PasswordIcon && (
          <Image source={PasswordIcon} style={{width: 23, height: 23}} />
        )}
      </TouchableOpacity>
    </View>
  );
}
