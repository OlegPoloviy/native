import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginVertical: 24,
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    borderRadius: 8,
  },
});

export default Title;
