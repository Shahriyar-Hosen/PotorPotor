import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
// Add these imports for type definition
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';

dayjs.extend(relativeTime);

import {IRoute} from '../../navigation';

export interface IChatListItem {
  chat: {
    id: string;
    user: {
      image: string;
      name: string;
      status: string;
    };
    lastMessage: {
      text: string;
      createdAt: string;
    };
  };
}

// Use `RouteProp` and `ParamListBase` to define the type for navigation
type ChatScreenNavigationProp = NativeStackNavigationProp<
  ParamListBase,
  IRoute
>;

const ChatListItem: FC<IChatListItem> = ({chat}) => {
  const {navigate} = useNavigation<ChatScreenNavigationProp>();

  return (
    <Pressable
      onPress={() =>
        navigate('Chat', {
          id: chat.id,
          name: chat.user.name,
          lastMessage: chat.lastMessage,
        })
      }
      style={styles.container}>
      {/* User Avatar */}
      <Image source={{uri: chat.user.image}} style={styles.image} />

      {/* content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>

          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
  },
  subTitle: {
    color: 'grey',
  },
});

export default ChatListItem;
