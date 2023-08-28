import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
// ------------- Importing Icone and Images -------------------
import HomeIcon from '../../Assets/Images/home.png';
import SearchIcon from '../../Assets/Images/search.png';
import CartIcon from '../../Assets/Images/cart.png';
import HeartIcon from '../../Assets/Images/heart.png';
import PersonIcon from '../../Assets/Images/person.png';
// -------------------- Importing Screens  ---------------------
import Main from './Main';
import Search from './Search';
import Cart from './Cart';
import Wishlist from './Wishlist';
import Profile from './Profile';

export default function Home() {
  const navigation = useNavigation();
  const [TabScreen, setTabScreen] = useState(0);

  const storeCartData = useSelector(store => {
    return store.CartReducer;
  });
  const storeWishlistData = useSelector(store => {
    return store.WishlistReducer;
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar hidden={true} />
      {TabScreen == 0 ? (
        <Main />
      ) : TabScreen == 1 ? (
        <Search />
      ) : TabScreen == 2 ? (
        <Cart />
      ) : TabScreen == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}

      {/* --------------  NAVIAGATION BOTTOM  --------------- */}
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#071952',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTabScreen(0)}>
          <Image
            source={HomeIcon}
            style={{width: 25, height: 25}}
            tintColor={TabScreen == 0 ? '#75C2F6' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTabScreen(1)}>
          <Image
            source={SearchIcon}
            style={{width: 25, height: 25}}
            tintColor={TabScreen == 1 ? '#75C2F6' : 'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTabScreen(2)}>
          <View
            style={{
              backgroundColor: TabScreen == 2 ? '#75C2F6' : 'white',
              width: 45,
              height: 45,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={CartIcon}
              style={{width: 24, height: 25, tintColor: '#071952'}}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'red',
                borderRadius: 20,
                position: 'absolute',
                top: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {storeCartData.length}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTabScreen(3)}>
          <Image
            source={HeartIcon}
            style={{width: 25, height: 25}}
            tintColor={TabScreen == 3 ? '#75C2F6' : 'white'}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 20,
              position: 'absolute',
              top: 15,
              right: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              {storeWishlistData.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',

            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setTabScreen(4)}>
          <Image
            source={PersonIcon}
            style={{width: 25, height: 25}}
            tintColor={TabScreen == 4 ? '#75C2F6' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
