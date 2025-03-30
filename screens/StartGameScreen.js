import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [value, setValue] = useState("");

  function numberInputHandler(e) {
    setValue(e);
  }

  function confirmInput() {
    const chosenNumber = parseInt(value);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: () => setValue("") },
      ]);
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType={"number-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={value}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={() => setValue("")}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#36021b",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 22,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
