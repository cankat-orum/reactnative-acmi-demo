import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Item = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onDelete.bind(this, props.itemID)}
    >
      <View style={styles.listItem}>
        <Text>{props.itemName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Item;
