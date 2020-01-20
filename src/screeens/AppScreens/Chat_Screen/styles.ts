import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.containerBg
  },
  contentStyle: {
    flex: 1,
    position: 'relative',
    marginBottom: 55
  },
  chatInputView:{
    flex:1,
    width: '100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
    position: 'absolute',
    bottom: 0,
  },
  chatInputStyle:{
    marginLeft:16,
    width:250,
  },
  sendButtonStyle:{
    backgroundColor: colors.niceRed,
    marginRight:16,
    position: 'absolute',
    right: 0,
  }
});

export default styles;
