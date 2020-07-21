import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Update = props => {
  const {title} = props.route.params;
  const {body} = props.route.params;
  const {date} = props.route.params;
  const {author} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <View style={[styles.body, globalStyles.illiniBlue]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>

            {/* Date */}
            <View style={styles.info}>
              <Text style={styles.infoText}>{author}</Text>
              <Text style={styles.infoText}>{date}</Text>
            </View>

            {/* Text body */}
            <View style={[styles.body, globalStyles.illiniBlue]}>
              <Text style={styles.bodyText}>{body}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.ILLINI_ORANGE,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  info: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  infoText: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 16,
    textAlign: 'right',
    color: 'lightgray',
  },
  bodyText: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 21,
    color: 'lightgray',
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
});

export default Update;
