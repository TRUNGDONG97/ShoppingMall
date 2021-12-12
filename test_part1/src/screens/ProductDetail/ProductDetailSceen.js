import React from 'react';
import {View, Text, Image} from 'react-native';
import {convertCurrency} from '../../constants/Function';
import Theme from '../../constants/Theme';

const ProductDetailSceen = ({route}) => {
  const {product} = route.params;
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <Text>{JSON.stringify(route.params)} </Text> */}
      <Image
        resizeMode="contain"
        style={{
          width: Theme.sizes.device_width,
          height: Theme.sizes.device_width / 2,
          backgroundColor: 'white',
        }}
        source={{uri: product.url}}
      />
      <View style={{margin: 15, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 16, fontWeight: '700', flex: 1, marginRight: 15}}>
            {product.name}
          </Text>

          <Text style={{fontSize: 14}}>
            Price : {convertCurrency(product.price)}
          </Text>
        </View>
        <Text style={{fontSize: 14, marginTop: 30, lineHeight: 20}}>
          {product.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailSceen;
