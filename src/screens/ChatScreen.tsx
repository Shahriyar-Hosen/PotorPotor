import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import messages from '../assets/data/messages.json';
import bg from '../assets/images/BG.png';
import InputBox from '../components/InputBox';
import Message from '../components/Message';
import {IRoute} from '../navigation';

// types.ts
export type RootStackParamList = {
  Chat: {
    id: string;
    name: string;
    lastMessage: string;
  };
  Chats: {
    id: string;
    name: string;
    lastMessage: string;
  };
  // Add other screens if needed
};

const ChatScreen: FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, IRoute>>();
  const navigation = useNavigation();

  console.log('Route:⤵️');
  console.log(route);

  useEffect(() => {
    navigation.setOptions({title: route.params?.name});
  }, [navigation, route.params?.name]);

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList
        data={messages}
        renderItem={({item}) => <Message message={item} />}
        style={styles.list}
        inverted
      />
      <InputBox />
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
