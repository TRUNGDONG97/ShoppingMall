import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import database from '@react-native-firebase/database';
const ModalAddProduct = ({show, setShow}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const onSubmit = () => {
    if (!name || !price || !description) {
      setError('All field is not empty');
      return;
    }
    setShow(false);
    const key = database().ref().push().key;
    database()
      .ref('product/' + key)
      .update({key, name, price, description})
      .then(snapshot => {
        setName('');
        setPrice('');
        setDescription('');
      })
      .catch(err => {
        console.log(err);
      });
    setError('');
  };
  return (
    <Modal animationType="none" visible={show} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>ADD PRODUCT</Text>
          <Text style={styles.label}>Name product:</Text>
          <TextInput
            onChangeText={text => {
              setName(text);
            }}
            style={styles.input}
            value={name}
          />
          <Text style={styles.label}>Price(€):</Text>

          <TextInput
            onChangeText={text => {
              setPrice(text);
            }}
            keyboardType={'number-pad'}
            value={price}
            style={styles.input}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            onChangeText={text => {
              setDescription(text);
            }}
            value={description}
            multiline={true}
            underlineColorAndroid="transparent"
          />
          {!!error && (
            <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
          )}
          <View style={styles.viewAction}>
            <TouchableOpacity
              style={[styles.styleBtn, {marginRight: 5}]}
              onPress={() => {
                setShow(false);
              }}>
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.styleBtn, {marginLeft: 5, backgroundColor: 'red'}]}
              onPress={onSubmit}>
              <Text style={[styles.textBtn, {color: 'white'}]}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  viewAction: {
    flexDirection: 'row',
    marginTop: 20,
  },
  styleBtn: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'black',
    padding: 6,
    borderRadius: 6,
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 6,
    borderRadius: 6,
    marginTop: 20,
    marginHorizontal: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 30,
  },
  label: {
    marginTop: 6,
  },
  textBtn: {
    fontWeight: '700',
  },
});
export default ModalAddProduct;
