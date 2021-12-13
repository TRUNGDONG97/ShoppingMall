import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import database from '@react-native-firebase/database';
import ItemProduct from './item/ItemProduct';
import {ModalAddProduct} from '../../components';
const ProductScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const refProduct = database().ref('/product');
    const loadingListener = refProduct.on('value', snapshot => {
      console.log('snapshot', snapshot);
      setLoading(true);
      const listProduct = [];
      snapshot.forEach(function (childSnapshot) {
        console.log('childSnapshot', childSnapshot);
        listProduct.push(childSnapshot.val());
      });
      setData([...data, ...listProduct]);
      setLoading(false);
    });

    return () => {
      refProduct.off('value', loadingListener);
    };
  }, []);

  function renderItem({item, index}) {
    return <ItemProduct item={item} index={index} />;
  }
  const renderEmpty = () => {
    return (
      <View style={styles.containerLoading}>
        <Text>Empty</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.viewTitle}>
        <Text style={styles.textBold}>List Product</Text>
        <TouchableOpacity style={styles.btnAdd} onPress={() => setShow(true)}>
          <Text style={styles.textBold}>+</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.containerLoading}>
          <ActivityIndicator size={'large'} color={'red'} />
        </View>
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
          onEndReachedThreshold={0.2}
          ListEmptyComponent={renderEmpty()}
        />
      )}
      <ModalAddProduct show={show} setShow={setShow} />
    </View>
  );
};
const styles = StyleSheet.create({
  btnAdd: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  viewTitle: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerLoading: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textBold: {fontSize: 18, fontWeight: '700'},
});
export default ProductScreen;
