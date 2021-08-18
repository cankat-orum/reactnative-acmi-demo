import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.itemName}</Text>
    </View>
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
