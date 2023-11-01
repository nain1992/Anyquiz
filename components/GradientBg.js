import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const GradientBg = (props) => {
  return (
    <View style={styles.parent}>
      <LinearGradient
        colors={["rgba(255, 231, 108, 1)", "rgba(243, 108, 255, 0.1)"]}
        style={styles.bgcolor}
      />
      {props?.children}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: hp("100%"),
    width: wp("100%"),
  },
  bgcolor: {
    height: hp("100%"),
    width: wp("100%"),
    position: "absolute",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(GradientBg);
