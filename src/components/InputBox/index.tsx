import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.warn('sending a new message:- ' + newMessage);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={24} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Type a message"
        style={styles.input}
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={24}
        color="white"
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,

    flex: 1,
    backgroundColor: 'white',
    padding: 7,
    paddingHorizontal: 15,
    marginHorizontal: 10,

    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
