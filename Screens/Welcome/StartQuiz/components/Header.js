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
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props?.onPress}>
        <AntDesign name="close" size={hp("3%")} color="#000000" />
      </TouchableOpacity>
      <View style={styles.progressBarbody}>
        <View style={styles.innerprogressbar}></View>
      </View>
      <View style={styles.timerwrapper}>
        <FontAwesome5 name="clock" size={hp("2%")} color="#000000" />
        <Text style={styles.timertext}>15:09</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("12%"),
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 231, 108, 1)",
    paddingHorizontal: wp("4%"),
  },
  progressBarbody: {
    height: 5,
    flex: 1,
    backgroundColor: "rgba(103, 80, 164, 0.12)",
    borderRadius: 100,
    marginHorizontal: 5,
  },
  innerprogressbar: {
    height: 5,
    width: "50%",
    backgroundColor: "rgba(83, 189, 113, 1)",
    borderRadius: 100,
  },
  timerwrapper: {
    height: hp("4%"),
    width: wp("20%"),
    borderRadius: 10,
    backgroundColor: "rgba(103, 80, 164, 0.12)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timertext: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "RR",
    fontSize: rf(10),
    fontWeight: "500",
    marginLeft: 5,
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Header);
