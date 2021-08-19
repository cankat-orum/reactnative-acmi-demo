import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Item from "./components/Item";
import ItemInput from "./components/ItemInput";

export default function App() {
  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemHandler = (itemFOC) => {
    setItems((currentItems) => [
      ...currentItems,
      { key: Math.random().toString(), value: itemFOC },
    ]); //currentItem is for RN to always use the latest state snapshot / key gives FlatList unique keys / item is now an object
    setIsAddMode(false);
  };

  const removeItemHandler = (itemId) => {
    setItems((items) => {
      return items.filter((item) => item.key !== itemId);
    });
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Item" onPress={() => setIsAddMode(true)} />
      <ItemInput
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelHandler}
      />
      <FlatList
        data={items}
        renderItem={(itemData) => (
          <Item
            itemID={itemData.item.key}
            onDelete={removeItemHandler}
            itemName={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
