import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import successIcom from '../../Assets/Images/success.png';
import {useNavigation} from '@react-navigation/native';

export default function PlaceOrder() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={successIcom} style={{width: 100, height: 100}} />
        <Text style={{marginTop: 20, fontSize: 20, color: 'black'}}>
          Your Order Placed Succesfully
        </Text>

        {/* ------------ Back to Home Button ---------- */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={{backgroundColor: 'green', marginTop: 50}}>
            <Text style={{color: 'white', padding: 10}}>Back to Home</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
