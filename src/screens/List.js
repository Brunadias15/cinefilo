import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback, useEffect } from "react";
import TaskList from "../components/TaskList";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function List({ navigation }) {
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  function bottom() {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    setOpen(false);
    setInput("");
  }

  useEffect(() => {
    async function loadTask() {
      const taskStorage = await AsyncStorage.getItem("@task");

      if (taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }

    loadTask();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem("@task", JSON.stringify(task));
    }
    saveTasks();
  }, [task]);

  const handleDelete = useCallback((data) => {
    const find = task.filter((r) => r.key !== data.key);
    setTask(find);
  });

  return (
    <SafeAreaView style={styles.conteiner}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de filmes para assistir</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <TaskList data={item} handleDelete={handleDelete} />
        )}
      />
      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.model}>
          <View>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons name="md-arrow-back" size={40} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>Colocar novo filme na lista</Text>
          </View>

          <View style={styles.modalBory}>
            <TextInput
              multiline={true}
              placeholderTextColor="#FFF"
              autoCorrect={false}
              placeholder="Qual o nome do filme?"
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />

            <TouchableOpacity style={styles.bottom} onPress={bottom}>
              <Text style={styles.bottomText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>

      <TouchableOpacity style={styles.fab} onPress={() => setOpen(true)}>
        <Ionicons name="ios-add" size={35} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    color: "black",
  },
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 25,
    top: 480,
    elevation: 2,
    zIndex: 9,
    shadowColor: "red",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  modalBory: {
    marginTop: 15,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    backgroundColor: "black",
    padding: 9,
    height: 85,
    color: "#FFF",
    borderRadius: 5,
  },
  bottom: {
    backgroundColor: "red",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderRadius: 20,
  },
  bottomText: {
    color: "#FFF",
    fontSize: 22,
  },
});
