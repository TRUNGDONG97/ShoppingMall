import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {SCREEN_ROUTER} from '../../../constants/Constant';

const ItemProduct = ({item, index}) => {
  const navigation = useNavigation();
  const clickItem = item => {
    navigation.navigate(SCREEN_ROUTER.PRODUCT_DETAIL, {product: item});
  };
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
        style={styles.imageProduct}
        source={{
          uri: item.url
            ? item.url
            : 'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//picture/product/product18530/product_18530_3.png',
        }}
      />
      <View style={styles.viewText}>
        <Text style={{fontSize: 16, fontWeight: '700'}} numberOfLines={1}>
          {item.name}
        </Text>

        <Text style={{fontSize: 14, marginTop: 8}}>Price : {item.price}$</Text>
      </View>
    </TouchableOpacity>
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
  viewText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  imageProduct: {
    width: 80,
    height: 80,
  },
});

export default ItemProduct;
