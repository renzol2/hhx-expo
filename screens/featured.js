import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

// Components
import Header from '../components/header';
import ArtistBody from '../components/featuredArtistBody';
import FeaturedArtistsList from '../components/featuredArtistsList';

// Data/text imports
import FEATURED_ARTISTS from '../api/constants/featuredArtists';
import strings from '../assets/strings';

// Styles
import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';

/**
 * Screen showing the currently featured artist by HHX, as well as
 * artists that were featured in the past
 * 
 * @param {Object} navigation navigation object from Stack Navigation; lets user
 *                            transfer to individual previously featured artist screens 
 */
const Featured = ({navigation}) => {
  // Artist on featured page must be the "current" artist, as signified by .current member
  const currentArtist = FEATURED_ARTISTS.filter(artist => artist.current)[0];
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.illiniBlue]}>
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <ArtistBody
            name={currentArtist.artistName}
            date={currentArtist.date}
            title={currentArtist.bioTitle}
            bio={currentArtist.bioBody}
            socialMedia={currentArtist.socialMedia}
          />

          {/* Past artists */}
          <View style={featuredStyles.pastArtistsBody}>
            <Text style={featuredStyles.pastArtistsTitle}>
              {strings.featured.pastArtists}
            </Text>
            <View style={featuredStyles.artistsContainer}>
              <FeaturedArtistsList navigation={navigation}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Featured;
