import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RemoveFromWishList} from '../Store/Action/Action';
import CartCard from './CartCard';
import wishlistIcon from '../../Assets/Images/wishlist2.png';

export default function Wishlist() {
  const StoreData = useSelector(store => store.WishlistReducer);

  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '95%',
          height: 80,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            paddingLeft: 10,
            paddingRight: 5,
          }}>
          Wishlist
        </Text>
        <Image source={wishlistIcon} style={{width: 40, height: 40}} />
      </View>
      {/* --------------  Display Wishlist List  -------------- */}
      {StoreData.length > 0 ? (
        <FlatList
          data={StoreData}
          renderItem={({item, index}) => {
            return (
              <CartCard
                items={item}
                isWishList={'abddvwvdwd'}
                onRemoveFromWishList={() => {
                  dispatch(RemoveFromWishList(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18}}>No Item Added in Wishlist</Text>
        </View>
      )}
    </View>
  );
}
