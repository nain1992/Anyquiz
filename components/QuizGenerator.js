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

const QuizGenerator = (props) => {
  const [kidsselected, setKidsselected] = useState();
  const [teenselected, setTeenselected] = useState();
  const [adultselected, setAdultselected] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.labletext}>Generate Quiz for</Text>
      <View style={styles.quizselector}>
        <View style={styles.selectionBoxwrapper}>
          <TouchableOpacity
            onPress={() => {
              setKidsselected(true);
              setTeenselected(false);
              setAdultselected(false);
            }}
            style={styles.selectionBox}
          >
            {kidsselected ? <View style={styles.dotbody}></View> : null}
          </TouchableOpacity>
          <Text
            style={[
              styles.kidstext,
              {
                fontFamily: kidsselected ? "RBB" : "RR",
              },
            ]}
          >
            Kids
          </Text>
        </View>
        <View style={styles.selectionBoxwrapper}>
          <TouchableOpacity
            onPress={() => {
              setTeenselected(true);
              setKidsselected(false);
              setAdultselected(false);
            }}
            style={styles.selectionBox}
          >
            {teenselected ? <View style={styles.dotbody}></View> : null}
          </TouchableOpacity>
          <Text
            style={[
              styles.kidstext,
              {
                fontFamily: teenselected ? "RBB" : "RR",
              },
            ]}
          >
            Teens
          </Text>
        </View>
        <View style={styles.selectionBoxwrapper}>
          <TouchableOpacity
            onPress={() => {
              setAdultselected(true);
              setTeenselected(false);
              setKidsselected(false);
            }}
            style={styles.selectionBox}
          >
            {adultselected ? <View style={styles.dotbody}></View> : null}
          </TouchableOpacity>
          <Text
            style={[
              styles.kidstext,
              {
                fontFamily: adultselected ? "RBB" : "RR",
              },
            ]}
          >
            Adults
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("13%"),
    width: wp("90%"),
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 15,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  labletext: {
    fontFamily: "RR",
    fontSize: rf(12),
    fontWeight: "400",
    color: "rgba(33, 0, 93, 1)",
  },
  quizselector: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectionBox: {
    height: hp("2.5%"),
    width: hp("2.5%"),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(149, 141, 165, 1)",
    justifyContent: "center",
    alignItems: "center",
  },
  selectionBoxwrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.3,
    justifyContent: "space-around",
    paddingHorizontal: wp("4%"),
  },
  dotbody: {
    height: hp("1.5%"),
    width: hp("1.5%"),
    borderRadius: 100,
    backgroundColor: "rgba(149, 141, 165, 1)",
  },
  kidstext: {
    fontFamily: "RR",
    fontSize: rf(10),
    color: "rgba(121, 116, 126, 1)",
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(QuizGenerator);
