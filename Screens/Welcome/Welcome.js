import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { connect } from "react-redux";
import GradientBg from "../../components/GradientBg";
import Logo from "../../components/Logo";
import QuizGenerator from "../../components/QuizGenerator";
import TypeQuiz from "../../components/TypeQuiz";
import CommonBtn from "../../components/CommonBtn";

const Welcome = (props) => {
  const [maxwords, setMaxWords] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={Platform.OS === "ios" ? "auto" : "auto"}
        backgroundColor={Platform.OS === "ios" ? "#222" : "#222"}
      />
      <KeyboardAvoidingScrollView>
        <GradientBg>
          <Logo />
          <QuizGenerator />
          <TypeQuiz
            onChangeText={(val) => {
              setMaxWords(val.length);
            }}
            value={maxwords}
            borderColor={
              maxwords >= 40
                ? "rgba(255, 127, 87, 1)"
                : "rgba(49, 94, 255, 0.15)"
            }
          />
          <View style={styles.btnwrapper}>
            <CommonBtn
              disabled={maxwords <= 8 ? true : false}
              backgroundColor={
                maxwords <= 8 ? "rgba(29, 27, 32, 0.12)" : "#000000"
              }
              onPress={() => props?.navigation?.navigate("StartQuiz")}
              title={"Let's Quiz"}
            />
          </View>
        </GradientBg>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  btnwrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: hp("3%"),
  },
});

const mapStateToProps = (state) => ({ errors: state.errors.errors });
export default connect(mapStateToProps)(Welcome);
