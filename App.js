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
import Item from "./components/Item";
import ItemInput from "./components/ItemInput";

export default function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (itemFOC) => {
    setItems((currentItems) => [
      ...currentItems,
      { key: Math.random().toString(), value: itemFOC },
    ]); //currentItem is for RN to always use the latest state snapshot / key gives FlatList unique keys / item is now an object
  };

  return (
    <View style={styles.screen}>
      <ItemInput onAddItem={addItemHandler} />
      <FlatList
        data={items}
        renderItem={(itemData) => <Item itemName={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
