import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Logo = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagebody}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.star}>
        <Image
          source={require("../assets/Star.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.anyquiztext}>Welcome To{"\n"}ANYQUIZ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    alignItems: "center",
    paddingVertical: hp("2%"),
  },
  imagebody: {
    height: hp("11%"),
    width: hp("11%"),
    overflow: "hidden",
  },
  star: {
    height: hp("4%"),
    width: hp("4%"),
    overflow: "hidden",
    marginTop: 10,
  },
  anyquiztext: {
    fontFamily: "RR",
    fontSize: rf(25),
    color: "rgba(33, 0, 93, 1)",
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Logo);
