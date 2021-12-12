import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

import {firebase} from '@react-native-firebase/database';
import {SCREEN_ROUTER, urlFirebase} from '../../constants/Constant';
import database from '@react-native-firebase/database';
import {convertCurrency} from '../../constants/Function';
const ProductScreen = ({navigation}) => {
  const [data, setData] = useState([
    {
      url: 'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//picture/product/product18530/product_18530_3.png',
      name: 'SmartTv LG',
      price: '1500',
      quantily: 3,
      description:
        'Loại TV	Smart LED \nKích thước TV	55 Inch \nCông Nghệ Chiếu Sáng	Đèn LED nền / Đèn LED viền  \nĐộ Phân Giải	Ultra HD 4K  \nTần Số Quét	60 Hz /n Kích Thước (Khoảng Cách Xem)44 - 55 (3 - 4 mét)',
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  // useEffect(() => {
  //   let listProduct = [];
  //   firebase
  //     .app()
  //     .database(urlFirebase)
  //     .ref('/products')
  //     .once('value')
  //     .then(data => {
  //       if (!!data.val() && Object.values(data.val()).length > 0) {
  //         console.log('dsdsđ', Object.values(data.val())[0].name);
  //         setData(Object.values(data.val()));
  //       }
  //     });

  //   return () => {};
  // }, []);
  const addProduct = () => {
    const newReference = database().ref('/products').push();
    newReference
      .set({
        id: 1,
        name: 'tv',
      })
      .then(() => {
        console.log(data, 'data');
        let newData = data.push({
          id: 1,
          name: 'tv',
        });
        setData(newData);
      });
  };
  const onRefresh = async () => {
    if (!refresh) {
      setRefresh(true);
    }
    setTimeout(() => {
      setRefresh(false);
    }, 1000);
    // fetchConfig.current.page = 1;
    // fetchConfig.current.last = false;
    // await getNotication();
  };
  const clickItem = item => {
    console.log(item);
    navigation.navigate(SCREEN_ROUTER.PRODUCT_DETAIL, {product: item});
  };
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        item={item}
        index={index}
        style={styles.styleItem}
        activeOpacity={0.2}
        onPress={() => {
          clickItem(item);
        }}>
        <Image
          resizeMode="cover"
          style={{
            width: 80,
            height: 80,
          }}
          source={{uri: item.url}}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 16, fontWeight: '700'}} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={{fontSize: 14, marginTop: 8}}>
            Price : {convertCurrency(item.price)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>List Product</Text>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={addProduct}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
        renderItem={renderItem}
        onEndReachedThreshold={0.2}
        onRefresh={onRefresh}
        refreshing={refresh}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  styleItem: {
    flexDirection: 'row',
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
export default ProductScreen;
