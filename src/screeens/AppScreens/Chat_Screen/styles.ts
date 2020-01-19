import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.containerBg
  },
  chatInputStle:{
    flex:2,
    flexDirection:'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  }
});

export default styles;
