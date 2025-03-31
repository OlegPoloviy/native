import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionsText({ children, style }) {
  return <Text style={[styles.instructionsText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionsText: {
    color: Colors.accent500,
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
});
export default InstructionsText;
