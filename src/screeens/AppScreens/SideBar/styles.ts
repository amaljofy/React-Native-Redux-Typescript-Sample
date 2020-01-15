import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      paddingTop: 12,
      paddingLeft: 10,
      alignItems: 'center',
      backgroundColor: colors.containerBg
    },
    profileImage: {
      height: 100,
      width: 100,
      borderRadius: 100/2
    },
    textStyle: {
      fontSize: 20,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 10,
      fontWeight: "700"
    }
  });
  
  export default styles;
