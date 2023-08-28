import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Component/Header';
import ProductCard from '../Component/ProductCard';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AddToCart, AddToWishList} from '../Store/Action/Action';
// -------------- Importing Images and Logos ---------------
import HeaderImage from '../../Assets/Images/fashion.jpg';
import {ProductsAllData} from '../Component/ProductData';

export default function Main() {
  // ----------------   States    -------------------
  const [categoryList, setcategoryList] = useState([1]);
  const [tshirtList, settshirtList] = useState([]);
  const [jeansList, setjeansList] = useState([]);
  const [shoesList, setshoesList] = useState([]);
  const [watchesList, setwatchesList] = useState([]);
  const [jacketList, setjacketList] = useState([]);
  const [slipperList, setslipperList] = useState([]);
  const {width, height} = Dimensions.get('screen');

  const dispatch = useDispatch();
  // const statedata = useSelector(state => {
  //   return state.WishlistReducer;
  // });
  // console.log(statedata);
  useEffect(() => {
    const TempCategory = [];
    ProductsAllData.Category.map(curElem => {
      TempCategory.push(curElem.category);
    });

    // ------------- Set Data in States --------------
    setcategoryList(TempCategory);
    settshirtList(ProductsAllData.Category[0].data);
    setjeansList(ProductsAllData.Category[1].data);
    setshoesList(ProductsAllData.Category[2].data);
    setwatchesList(ProductsAllData.Category[3].data);
    setjacketList(ProductsAllData.Category[4].data);
    setslipperList(ProductsAllData.Category[5].data);
  }, []);

  return (
    <View style={{flex: 1, paddingBottom: 70}}>
      <Header />
      <ScrollView>
        <View
          style={{
            width: '94%',
            height: 150,
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 5,
            elevation: 8,
          }}>
          <Image
            source={HeaderImage}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 5,
            }}
          />
        </View>

        {/* ------------- Categor List ----------- */}
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={categoryList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 20,
                    marginRight: 10,
                  }}>
                  <Text style={{color: 'black', fontSize: 15}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/* ----------------------  T Shirt List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New T Shirts
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={tshirtList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
        {/* ----------------------  Jeans List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New Jeans
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={jeansList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
        {/* ----------------------  Shoes List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New Shoes
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={shoesList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
        {/* ----------------------  Watch List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New Watches
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={watchesList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
        {/* ----------------------  Jacket List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New Jacket
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={jacketList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
        {/* ----------------------  Slipper List -------------------- */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 17,
            padding: 10,
          }}>
          New Slipper
        </Text>
        <View style={{marginTop: 10, marginHorizontal: 10}}>
          <FlatList
            data={slipperList}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  items={item}
                  onAddToCart={value => {
                    dispatch(AddToCart(value));
                  }}
                  onAddToWishList={value => {
                    dispatch(AddToWishList(value));
                  }}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
