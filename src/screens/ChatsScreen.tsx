import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {FlatList} from 'react-native';
import chats from '../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

dayjs.extend(relativeTime);

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ChatListItem chat={item} />}
    />
  );
};

export default ChatsScreen;
