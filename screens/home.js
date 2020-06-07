import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import Header from '../components/header';
import Updates from '../components/updates';
import SocialMedia from '../components/socialMedia';
import strings from '../assets/strings/strings';

import globalStyles from '../styles/global';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({navigation}) {
  // App layout
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniBlue}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          <View>
            {/* Bus image */}
            <Image
              style={styles.busImage}
              source={require('../assets/images/hhx_bus_blur_orange.jpg')}
            />
            {/* Text over bus image */}
            <View style={styles.topImage}>
              <Text style={styles.topIntroText}>WELCOME TO THE</Text>
              <Text style={styles.topTitleText}>
                DOUBLE DUTCH{'\n'}BOOM BUS
              </Text>
            </View>
          </View>

          {/* Body of Home Screen */}

          {/* Updates section */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {strings.home.updatesInfo.title}
              </Text>
              <Text style={styles.sectionDescription}>
                {strings.home.updatesInfo.description}
              </Text>
              <Updates navigation={navigation} />
            </View>

            {/* History Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {strings.home.history.title}
              </Text>
              <Text style={styles.sectionDescription}>
                {strings.home.history.description}
              </Text>
            </View>

            {/* Navigation to history modules*/}
            <View style={styles.navigationSection}>
              {/* Courses Navigation */}
              <TouchableOpacity
                style={[styles.navButton, globalStyles.illiniBlue]}
                activeOpacity={0.75}
                onPress={
                  () => {navigation.navigate('Courses', {
                    navigation: navigation,  // TODO: this might not be allowed lol
                  })}
                }>
                  <Text style={styles.navButtontext}>{strings.courses.title}</Text>
              </TouchableOpacity>

              {/* Participants Navigation */}
              <TouchableOpacity
                style={[styles.navButton, globalStyles.illiniBlue]}
                activeOpacity={0.75}
                onPress={
                  () => {navigation.navigate('Participants', {
                    navigation: navigation,  // TODO: this might not be allowed lol
                  })}
                }>
                  <Text style={styles.navButtontext}>{strings.participants.title}</Text>
              </TouchableOpacity>
              {/* Artist Histories Navigation */}
              <TouchableOpacity
                style={[styles.navButton, globalStyles.illiniBlue]}
                activeOpacity={0.75}
                onPress={
                  () => {navigation.navigate('ArtistHistories', {
                    navigation: navigation,  // TODO: this might not be allowed lol
                  })}
                }>
                  <Text style={styles.navButtontext}>{strings.artistHistories.title}</Text>
              </TouchableOpacity>
            </View>

            {/* Social Media Section */}
            <View style={styles.sectionContainer}>
              <SocialMedia />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(19, 41, 75, 1.0)',
  },
  topImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIntroText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  topTitleText: {
    marginTop: 10,
    marginBottom: 15,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Montserrat-Black',
  },
  menu: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 40,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sectionTitle: {
    fontFamily: 'Montserrat-Black',
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 18,
  },
  sectionDescription: {
    fontFamily: 'Karla-Regular',
    marginTop: 0,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  logo: {
    marginVertical: 10,
    marginHorizontal: win.width / 3.9,
    width: 209,
    height: 25,
  },
  busImage: {
    height: 250,
    flex: 1,
  },
  navigationSection: {
    marginVertical: 20,
  },
  navButton: {
    paddingVertical: 15,
    marginVertical: -1,
  },
  navButtontext: {
    fontFamily: 'Montserrat-Black',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});
