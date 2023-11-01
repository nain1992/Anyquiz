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
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Answeroptions = (props) => {
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      style={[
        styles.container,
        {
          backgroundColor: props?.backgroundColor,
        },
      ]}
    >
      <Text style={styles.Optiontext}>{props?.option} </Text>
      <Text style={styles.answertext}>{props?.answer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("8%"),
    width: wp("90%"),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  Optiontext: {
    fontFamily: "RR",
    fontSize: rf(14),
    fontWeight: "400",
    color: "rgba(202, 197, 205, 1)",
  },
  answertext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "rgba(33, 0, 93, 1)",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Answeroptions);
