import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log("hitler")}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#72063c",
    borderRadius: 29,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
