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

const TypeQuiz = (props) => {
  const [maxwords, setMaxWords] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputbody,
          {
            borderColor: props?.borderColor,
          },
        ]}
      >
        <View style={styles.iconbody}>
          <Image
            source={require("../assets/Icon1.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type any topic you want!!!"
          multiline={true}
          placeholderTextColor={"rgba(147, 143, 153, 1)"}
          maxLength={40}
          value={props?.value}
          onChangeText={props?.onChangeText}
        />
      </View>
      <View style={styles.orWrapper}>
        <View style={styles.XstarBody}>
          <Image
            source={require("../assets/XStar.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={[
            styles.labletext,
            {
              color: "(rgba(33, 0, 93, 1)",
              marginHorizontal: wp("2%"),
            },
          ]}
        >
          Or
        </Text>
        <View style={styles.XstarBody}>
          <Image
            source={require("../assets/XStar.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.btnwrapper}>
        <TouchableOpacity style={styles.AnyquizBtn}>
          <Text style={styles.btntext}>Any Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AnyquizBtn}>
          <Text style={styles.btntext}>General Knowledge</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("25%"),
    width: wp("90%"),
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  labletext: {
    fontFamily: "RR",
    fontSize: rf(11),
    color: "rgba(33, 0, 93, 1",
  },
  inputbody: {
    height: hp("7%"),
    width: wp("85%"),
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,

    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "90%",
    fontFamily: "RR",
    fontSize: rf(12),
    color: "rgba(147, 143, 153, 1)",
  },
  iconbody: {
    height: hp("3%"),
    width: hp("3%"),
    overflow: "hidden",
    marginRight: 5,
  },
  orWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  XstarBody: {
    height: hp("2%"),
    width: hp("2%"),
    overflow: "hidden",
  },
  btnwrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  AnyquizBtn: {
    height: hp("5%"),
    width: wp("38%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(103, 80, 164, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
    fontFamily: "RR",
    fontSize: rf(13),
    color: "rgba(103, 80, 164, 1)",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(TypeQuiz);
