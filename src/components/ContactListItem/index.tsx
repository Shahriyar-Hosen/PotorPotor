// import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
// Add these imports for type definition
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import {ParamListBase} from '@react-navigation/routers';

// import {IRoute} from '../../navigation';

export interface IContactListItem {
  user: {
    image: string;
    name: string;
    status: string;
  };
}

// Use `RouteProp` and `ParamListBase` to define the type for navigation
// type ChatScreenNavigationProp = NativeStackNavigationProp<
//   ParamListBase,
//   IRoute
// >;

const ContactListItem: FC<IContactListItem> = ({user}) => {
  // const {navigate} = useNavigation<ChatScreenNavigationProp>();

  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image source={{uri: user.image}} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user.name}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  content: {},
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'grey',
  },
});

export default ContactListItem;
