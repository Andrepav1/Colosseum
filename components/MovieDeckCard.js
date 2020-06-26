import * as React from 'react';
import { Image, View, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Style from '../constants/Style'
import Layout from '../constants/Layout'
const { width, height } = Layout.window;

const POSTER_PATH = 'http://image.tmdb.org/t/p/original/';

export default function MovieDeckCard({props, deckSwiper}) {
  // console.log(deckSwiper)
  const [card, setCard] = React.useState();

  return (
    <View style={{ flex: 1 }}>
      <CardFlip flipDirection={'x'} style={{ width: width-40, height: 540 }} ref={card => setCard(card)} >
        <TouchableWithoutFeedback onPress={() => card.flip()} >
          <View style={[Style.lightCardContainer, { flex: 1 }]}>
            <View style={styles.imageView}>
              <Image style={{ resizeMode: "center", height: 480, borderRadius: 8 }} source={{ uri: POSTER_PATH + props.poster_path}} />
            </View>
            <View style={styles.smallTextView}>
              <MonoTextBold style={[ Style.largeDarkText, { textAlign: "center", maxWidth: "90%"}]}>{props.title}</MonoTextBold>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => card.flip()} >
          <View style={[Style.lightCardContainer, { flex: 1 }]}>
            <View style={styles.textView}>
              <MonoTextBold style={[ Style.largeDarkText, { textAlign: "center", maxWidth: "90%", marginBottom: 16, marginTop: 20 }]}>{props.title}</MonoTextBold>
              <MonoTextBold style={[ Style.smallDarkText, { textAlign: "center", maxWidth: "90%"}]}>{props.overview}</MonoTextBold>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </CardFlip> 
    </View>
  );
}

    // <CardFlip style={[Style.lightCardContainer, { width: width-40, height: 540, alignSelf: "center" }]} ref={card => setCard(card)} >

    // </CardFlip>
const styles = StyleSheet.create({
  imageView: {
    alignSelf: "center",
    width: "100%",
    overflow: "hidden",
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  smallTextView: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#000",
    fontSize: 22, 
    maxWidth: "90%",
    textAlign: "center"
  },
  description: {
    color: "#000",
    fontSize: 12, 
    maxWidth: "90%",
  }
});
