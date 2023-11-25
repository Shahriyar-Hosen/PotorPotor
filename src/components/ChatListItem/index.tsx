import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export interface ICHatListItem {
  chat: {
    id: string;
    user: {
      image: string;
      name: string;
    };
    lastMessage: {
      text: string;
      createdAt: string;
    };
  };
}

const ChatListItem: FC<ICHatListItem> = ({chat}) => {
  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image source={{uri: chat.user.image}} style={styles.image} />

      {/* content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>

          <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>

        <Text style={styles.subTitle} numberOfLines={2}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
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
