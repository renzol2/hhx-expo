import React from 'react';

import {
  View,
  Text,
  Image,
  Linking,
} from 'react-native';

import {SocialIcon} from 'react-native-elements';

import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';

import strings from '../assets/strings/strings';

const ArtistBodyContent = ({name, date, bio, title, socialMedia}) => {
  let key = 0;
  return (
    <View style={[featuredStyles.body, globalStyles.illiniBlue]}>
      {/* Top image/title card */}
      <View>
        {/* Artist's image */}
        <Image
          source={require('../assets/featured/default/default_header_blurred.jpg')}
        />
        {/* Text over artist image */}
        <View style={featuredStyles.imageCard}>
          <Text style={featuredStyles.artistNameText}>
            {name}
          </Text>
        </View>
      </View>

      {/* Title */}
      <View style={featuredStyles.title}>
        <Text style={featuredStyles.titleText}>
          {strings.featured.title}
        </Text>
        {/* Artist image */}
        <Image
          style={featuredStyles.artistImage}
          source={require('../assets/featured/default/default_header.jpeg')}
        />
        <Text style={featuredStyles.dateText}>
          {date}
        </Text>
      </View>

      {/* Social Media Container */}
      <View
        style={[
          featuredStyles.socialMediaContainer,
          globalStyles.illiniBlue,
        ]}>
          {socialMedia.map(link => (
            <SocialIcon
              type={link.platform}
              button={false}
              onPress={() => {
                Linking.openURL(link.url);
              }}
              key={key++}
            />
          ))}
      </View>

      {/* Bio */}
      <View style={[globalStyles.illiniBlue, featuredStyles.bioContainer]}>
        <Text style={featuredStyles.bioTitle}>{title}</Text>
        <Text style={featuredStyles.bioBody}>{bio}</Text>
      </View>

    </View>
  );
}

export default ArtistBodyContent;
