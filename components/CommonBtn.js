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
import { AntDesign } from "@expo/vector-icons";

const CommonBtn = (props) => {
  return (
    <TouchableOpacity
      onPress={props?.onPress}
      disabled={props?.disabled}
      style={[
        styles.container,
        {
          backgroundColor: props?.backgroundColor,
        },
      ]}
    >
      <View style={styles.iconbody}>
        {props?.icon ? (
          <AntDesign name="arrowright" size={hp("2%")} color="#fff" />
        ) : (
          <Image
            source={require("../assets/WhiteVector.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        )}
      </View>
      <Text style={styles.btntext}>{props?.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    width: wp("90%"),
    backgroundColor: "#000000",
    borderRadius: 100,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  iconbody: {
    height: hp("2%"),
    width: hp("2%"),
    overflow: "hidden",
    marginRight: 5,
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(14),
    color: "#fff",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(CommonBtn);
