import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import Header from "./components/Header";
import Answeroptions from "./components/Answeroptions";
import CommonBtn from "../../../components/CommonBtn";
import CLosemodel from "./components/CLosemodel";

const StartQuiz = (props) => {
  const [rightanswer, setRightanswer] = useState("");
  const [ismodelvisible, setIsmodelvisible] = useState(false);

  const _handleAnswer = (index) => {
    if (rightanswer === rightanswer) {
      setRightanswer(index);
    } else {
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      <Header onPress={() => setIsmodelvisible(true)} />
      <View style={styles.wrapper}>
        <View style={styles.levelwrapper}>
          <View style={styles.topicwrappr}>
            <View style={styles.iconbody}>
              <Image
                source={require("../../../assets/Vector3.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.topictext}>Old Movies</Text>
          </View>
          <View style={styles.topicwrappr}>
            <View style={styles.iconbody}>
              <Image
                source={require("../../../assets/Vector4.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.topictext}>Level 1</Text>
          </View>
        </View>
        <View style={styles.questionwrapper}>
          <Text style={styles.questiontext}>
            What do you enjoy most about your favorite hobby, and how did you
            get started with it?
          </Text>
        </View>
        <View style={styles.answerwrapper}>
          <Answeroptions
            onPress={() => _handleAnswer(true)}
            option={"A:"}
            answer={"The sunsets in Hawaii are breathtaking."}
            backgroundColor={rightanswer ? "#FFD1DF" : "#53BD71"}
          />
          <Answeroptions
            onPress={() => _handleAnswer(true)}
            option={"B:"}
            answer={"My favorite book is 'To Kill a Mockingbird."}
            backgroundColor={rightanswer ? "#fff" : "#FFD1DF"}
          />
          <Answeroptions
            onPress={() => _handleAnswer(true)}
            option={"C:"}
            answer={"I enjoy cooking Italian dishes on weekends."}
            backgroundColor={rightanswer ? "#fff" : "#FFD1DF"}
          />
          <Answeroptions
            onPress={() => _handleAnswer(true)}
            option={"D:"}
            answer={"The Grand Canyon is on my travel bucket list."}
            backgroundColor={rightanswer ? "#fff" : "#FFD1DF"}
          />
        </View>
        <View style={styles.btnwrappr}>
          <CommonBtn
            disabled={rightanswer === rightanswer ? true : false}
            backgroundColor={rightanswer ? "rgba(29, 27, 32, 0.12)" : "#000000"}
            title={"1/12 Next"}
            icon
          />
        </View>
      </View>
      {ismodelvisible && (
        <CLosemodel onQuitpress={() => setIsmodelvisible(false)} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 231, 108, 1)",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F6F3EC",
    borderTopLeftRadius: 60,
  },
  levelwrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    height: hp("8%"),
    justifyContent: "space-between",
  },
  topicwrappr: {
    flexDirection: "row",
    alignItems: "center",
  },
  topictext: {
    fontFamily: "RR",
    fontSize: rf(9),
    color: "rgba(174, 169, 177, 1)",
  },
  iconbody: {
    height: hp("2%"),
    width: hp("2%"),
    overflow: "hidden",
    marginRight: 5,
  },
  questionwrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
  },
  questiontext: {
    fontFamily: "RR",
    fontSize: rf(20),
    color: "rgba(0, 0, 0, 1)",
    textAlign: "center",
    marginBottom: 10,
  },
  answerwrapper: {
    marginVertical: 10,
    flex: 0.7,
    // justifyContent: "space-around",
  },
  btnwrappr: {
    flex: 0.25,
    justifyContent: "flex-end",
    marginBottom: hp("3%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(StartQuiz);
