import * as React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import { MonoText, MonoTextBold } from './StyledText'

// constants
import Colors from '../constants/Colors';
import Style from '../constants/Style';
import Layout from '../constants/Layout';

export default function DataErrorComponent({refetch, darkMode}) {
  
  React.useEffect(() => {
    setTimeout(refetch, 500);
  },[])

  const refetchHandler = () => {
    refetch();
  }
  
  return (
    <View style={[darkMode?Style.darkContainer:Style.lightContainer,{ flexDirection: "column", justifyContent: "center" }]}>
      <MonoText style={[darkMode?Style.mediumLightText:Style.mediumDarkText,{ alignSelf: "center", paddingHorizontal: 40, textAlign: "center", marginBottom: 8 }]}> We're having trouble retrieving what you asked.</MonoText>
      <TouchableOpacity onPress={refetchHandler}>
        <MonoText style={{ color: Colors.linkText, alignSelf: "center" }}>Try again</MonoText>
      </TouchableOpacity>
    </View>
  );
}
