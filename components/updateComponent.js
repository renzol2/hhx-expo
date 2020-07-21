import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

const UpdateComponent = props => {
  const update = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('Update', {
            title: props.title,
            author: props.author,
            body: props.body,
            date: props.date,
          })
      }>
      <View style={[styles.updateContainer, globalStyles.illiniOrange]}>
        <Text style={styles.updateTitle}>{props.title}</Text>
        <Text style={styles.updateDate}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return update;
};

const styles = StyleSheet.create({
  updateContainer: {
    marginVertical: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
  },
  updateTitle: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 19,
    textAlign: 'left',
    color: 'white',
    marginBottom: 10,
  },
  updateDate: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 17,
    textAlign: 'right',
    color: 'white',
  },
  updateDescription: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export default UpdateComponent;
