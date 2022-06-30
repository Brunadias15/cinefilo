import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TaskList({ data, handleDelete }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}> {data.task} </Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(data)}>
        <AntDesign name="delete" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    backgroundColor: "black",
    padding: 7,
    borderRadius: 50,
    shadowColor: "red",
    flexDirection: "row",
  },
  text: {
    color: "#FFF",
  },
});
