import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: colors.containerBg
  },
  contentStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "100"
  }
});

export default styles;
