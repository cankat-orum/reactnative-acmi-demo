import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const inputHandler = (text) => {
    setItem(text);
  };

  const addItemHandler = () => {
    setItems((currentItems) => [
      ...currentItems,
      { key: Math.random().toString(), value: item },
    ]); //currentItem is for RN to always use the latest state snapshot / key gives FlatList unique keys / item is now an object
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputCon}>
        <TextInput
          placeholder="Item"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={item}
        />
        <Button title="AdDd" onPress={addItemHandler} />
      </View>
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
