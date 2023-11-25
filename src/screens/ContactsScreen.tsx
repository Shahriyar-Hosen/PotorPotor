import React, {FC} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import chats from '../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const ContactsScreen: FC = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({item}) => <ContactListItem user={item.user} />}
      style={styles.bg}
    />
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'white',
  },
});
