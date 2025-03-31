import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionsText from "../components/ui/InstructionsText";

function StartGameScreen({ onPickNumber }) {
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

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the number, nigger</Title>
      <Card>
        <InstructionsText>Enter your number</InstructionsText>
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
            <PrimaryButton pressHandler={() => setValue("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressHandler={confirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  textInput: {
    height: 50,
    width: 50,
    fontSize: 22,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
