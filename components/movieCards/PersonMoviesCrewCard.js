import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w92/';

export default function PersonMoviesCrewCard({props, nav, darkMode}) {
  // console.log(props)

  const onPressHandler = () => {
    nav.navigate("MovieScreen", props);
  }

  const getReleaseDate = () => props.release_date?" (" + props.release_date.substring(0,4) + ")":"";

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={[darkMode?Style.darkCardContainer:Style.lightCardContainer,{ height: 68, width: 260, borderRadius: 4, flexDirection: "row" }]}>
        <View style={{ height: 64, width: 45, borderRadius: 1, marginTop: 2 }}>
          <Image source={{ uri: POSTER_PATH + props.poster_path}} borderRadius={4} style={{ resizeMode: "cover", height: 64, marginLeft: 2, backgroundColor: "#44444444" }}/>
        </View>
        <View style={{ flex: 1, padding: 4 }}>
          <MonoTextBold style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ marginBottom: 2 }]}>{props.title + getReleaseDate()}</MonoTextBold>
          <MonoTextBold style={darkMode?Style.smallLightText:Style.smallDarkText}>{props.job}</MonoTextBold>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
