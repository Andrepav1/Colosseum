import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { MonoText, MonoTextBold } from '../StyledText'

// constants
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import Layout from '../../constants/Layout';
const { width, height } = Layout.window;

const POSTER_PATH = 'https://image.tmdb.org/t/p/w342/';

export default function MultiplePersonCard({props, nav, darkMode}) {
  // console.log(props)

  const aspectRatio = 1.5;
  const imageWidth = width*0.49;
  const imageHeight = imageWidth*aspectRatio;
  
  const onPressHandler = () => {
    nav.navigate("PersonScreen", props);
  }

  return (
    <View style={{ padding: 1 }}>
      <View style={{ height: imageHeight, width: imageWidth, overflow: "hidden" }}>
        <TouchableWithoutFeedback onPress={onPressHandler}>
          <Image source={{ uri: POSTER_PATH + props.profile_path}} style={{ resizeMode: "cover", width: "100%", height: "100%", backgroundColor: "#88888844" }}/>
        </TouchableWithoutFeedback>
        <MonoTextBold numberOfLines={2} style={[Style.mediumLightText,{ position: "absolute", top: imageHeight-44, width: "90%", textAlign: "center", alignSelf: "center" }]}>{props.name}</MonoTextBold>
      </View>
    </View>
  );
}
