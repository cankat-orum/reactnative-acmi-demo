import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const ItemInput = (props) => {
  const [item, setItem] = useState("");

  const inputHandler = (text) => {
    setItem(text);
  };

  const addItemHandler = () => {
    props.onAddItem(item);
    setItem("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCon}>
        <TextInput
          placeholder="Item"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={item}
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={
                addItemHandler
              } /* binding param to func so it'll eventually be used when func called */
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default ItemInput;
