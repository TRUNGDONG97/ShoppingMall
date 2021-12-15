import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Theme from '../../constants/Theme';

const ProductDetailSceen = ({route}) => {
  const {product} = route.params;
  return (
    <View style={{flex: 1}}>
      <Image
        resizeMode="contain"
        style={styles.styleImage}
        source={{
          uri: product.url
            ? product.url
            : 'https://cdn01.dienmaycholon.vn/filewebdmclnew/public//picture/product/product18530/product_18530_3.png',
        }}
      />
      <View style={{margin: 15, flex: 1}}>
        <View style={styles.textTitle}>
          <Text
            style={{fontSize: 16, fontWeight: '700', flex: 1, marginRight: 15}}>
            {product.name}
          </Text>

          <Text style={{fontSize: 14}}>Price : {product.price} $</Text>
        </View>
        <Text style={{fontSize: 14, marginTop: 30, lineHeight: 20}}>
          {product.description}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  styleImage: {
    width: Theme.sizes.device_width,
    height: Theme.sizes.device_width / 2,
    backgroundColor: 'white',
  },
  textTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default ProductDetailSceen;
