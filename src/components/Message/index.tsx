import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

dayjs.extend(relativeTime);

export interface IMessage {
  message: {
    id: string;
    text: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
    };
  };
}

const Message: FC<IMessage> = ({message}) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  // const othersStyles = {
  //   backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
  //   alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
  // };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  message: {},
  time: {
    alignSelf: 'flex-end',
    color: 'grey',
  },
});

export default Message;
