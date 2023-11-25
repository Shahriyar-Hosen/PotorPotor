import React, {FC} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import messages from '../assets/data/messages.json';
import bg from '../assets/images/BG.png';
import Message from '../components/Message';

const ChatScreen: FC = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item} />}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
