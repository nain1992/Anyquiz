import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

const Closemodel = (props) => {
  return (
    <Modal transparent={true} animationType="fade">
      <View style={{ backgroundColor: "#00000aaa", flex: 1 }}></View>
      <View style={styles.container}>
        <View style={styles.emojibody}>
          <Image
            source={require("../../../../assets/1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.quitgametext}>
          Are you sure you want to{"\n"}quit the game?
        </Text>
        <View style={styles.btnwrapper}>
          <TouchableOpacity
            onPress={props?.onQuitpress}
            style={[
              styles.quitbtn,
              {
                backgroundColor: "#fff",
              },
            ]}
          >
            <Text style={styles.btntext}>Quit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quitbtn}>
            <Text
              style={[
                styles.btntext,
                {
                  color: "#fff",
                },
              ]}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("90%"),
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: hp("35%"),
    padding: 15,
    justifyContent: "space-around",
  },
  quitgametext: {
    color: "#1D1B20",
    fontFamily: "RR",
    fontSize: rf(18),
    textAlign: "center",
  },
  emojibody: {
    height: hp("3%"),
    width: hp("3%"),
    overflow: "hidden",
    alignSelf: "center",
  },
  btnwrapper: {
    flexDirection: "row",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
    // flex: 1,
  },
  quitbtn: {
    height: hp("4%"),
    width: wp("25%"),
    borderRadius: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(12),
    color: "#6750A4",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Closemodel);
