import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import React from "react";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <ImageBackground
          source={require("../image/cinema.jpg")}
          style={{ width: "100%", height: 400 }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>
          Cinéfilo ou não, todo mundo vai precisar desse app
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Film")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 1,
    color: "black",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#700b0d",
    width: "90%",
    borderRadius: 10,
    paddingVertical: 20,
    alignSelf: "center",
    bottom: "5%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
