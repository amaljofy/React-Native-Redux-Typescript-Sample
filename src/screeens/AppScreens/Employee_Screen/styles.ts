import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: colors.containerBg
  // },
  // contentStyle: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // textStyle: {
  //   fontSize: 20,
  //   fontWeight: "700"
  // }
  container: {
    flex: 1,
    backgroundColor: colors.containerBg
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
  },
  loadingContent: {
    flex: 3,
    fontSize: 16,
    paddingHorizontal: 10,
  }
});

export default styles;
