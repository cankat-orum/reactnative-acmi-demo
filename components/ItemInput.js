import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const ItemInput = (props) => {
  const [item, setItem] = useState("");

  const inputHandler = (text) => {
    setItem(text);
  };

  return (
    <View style={styles.inputCon}>
      <TextInput
        placeholder="Item"
        style={styles.textInput}
        onChangeText={inputHandler}
        value={item}
      />
      <Button
        title="ADD"
        onPress={props.onAddItem.bind(
          this,
          item
        )} /* binding param to func so it'll eventually be used when func called */
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default ItemInput;
