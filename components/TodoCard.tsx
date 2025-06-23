import {
  Modal,
  Animated,
  Easing,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRef, useState } from "react";

import { Txt } from "./Txt";
import { Todo } from "./Todo";
import { Bell, Pin, Plus, Setting } from "@/assets/icons";
import { colors } from "@/constants";
import { AddTodoModal } from "./AddTodoModal";

interface TodolistProps {
  text: string;
  checked: boolean;
  type: "important" | "normal";
}

export const TodoCard = () => {
  const [isPin, setIsPin] = useState<boolean>(false);
  const [todolist, setTodolist] = useState<TodolistProps[]>([
    { text: "김어진", checked: true, type: "important" },
    { text: "이나경", checked: false, type: "important" },
    { text: "차은비", checked: true, type: "normal" },
    { text: "치약", checked: false, type: "normal" },
    { text: "농담곰", checked: false, type: "normal" },
    { text: "내 정신머리", checked: false, type: "normal" },
  ]);

  const toggleCheck = (index: number) => {
    setTodolist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const openModal = () => {
    setIsModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get("window").height,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <View style={styles.title}>
          <Txt type="semibold20">출근할 때 필수템</Txt>{" "}
          <Txt type="medium14" color="gray400">
            매주 평일 오후 11:30
          </Txt>
        </View>
        <TouchableOpacity
          onPress={() => setIsPin(!isPin)}
          style={styles.pushpinButton}
        >
          <Pin size={28} color={isPin ? "gray500" : "gray400"} fill={isPin} />
        </TouchableOpacity>
      </View>
      <View style={styles.todolistContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.todolistBox}
        >
          <TouchableOpacity style={styles.addButton}>
            <Plus size={22} color="gray400" />
            <Txt type="medium18" color="gray400">
              추가하기
            </Txt>
          </TouchableOpacity>
          {todolist.map(({ text, checked, type }, i) => (
            <Todo
              key={i}
              text={text}
              checked={checked}
              type={type}
              onPress={() => toggleCheck(i)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.settingBox}>
        <TouchableOpacity style={styles.setTodoButton} onPress={openModal}>
          <Bell color="gray300" />
          <Txt color="gray500">알림</Txt>
        </TouchableOpacity>
        <TouchableOpacity style={styles.setTodoButton} onPress={openModal}>
          <Setting color="gray300" />
          <Txt color="gray500">설정</Txt>
        </TouchableOpacity>
      </View>
      <AddTodoModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        slideAnim={slideAnim}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 16,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderColor: colors.gray100,
    borderWidth: 1,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
  },
  settingBox: {
    flexDirection: "row",
    width: "100%",
  },
  pushpinButton: {
    padding: 4,
  },
  todolistContainer: {
    paddingHorizontal: 16,
    maxHeight: 300,
  },
  todolistBox: {
    paddingBottom: 16,
    gap: 8,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  setTodoButton: {
    paddingVertical: 20,
    borderTopColor: colors.gray100,
    borderTopWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    flex: 1,
  },
  title: {
    gap: 8,
  },
});
