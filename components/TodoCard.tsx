import {
  Modal,
  Animated,
  Easing,
  Pressable,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useRef, useState } from "react";

import { Txt } from "./Txt";
import { Todo } from "./Todo";
import { Pin, Plus, Setting } from "@/assets/icons";
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
      {/* 제목 */}
      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Txt type="semibold20">출근할 때 필수템</Txt>
          <TouchableOpacity
            onPress={() => setIsPin(!isPin)}
            style={styles.pushpinButton}
          >
            <Pin color="gray200" fill={isPin} />
          </TouchableOpacity>
        </View>
        <Txt type="medium14" color="gray300">
          매주 평일 오후 11:30
        </Txt>
      </View>
      {/* 투두리스트 */}
      <View style={styles.todolistContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.todolistBox}
        >
          <TouchableOpacity style={styles.addButton}>
            <Plus size={22} color="gray200" />
            <Txt type="medium18" color="gray200">
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
      {/* 설정 */}
      <TouchableOpacity style={styles.setTodoButton} onPress={openModal}>
        <Setting color="gray300" />
        <Txt color="gray400" type="medium18">
          설정
        </Txt>
      </TouchableOpacity>
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
    display: "flex",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  titleContainer: {
    width: "100%",
    padding: 20,
    gap: 8,
  },
  titleBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  title: {},
  description: {},
  pushpinButton: {},
  todolistBox: {
    rowGap: 8,
    paddingBottom: 24,
  },
  todolistContainer: {
    gap: 8,
    paddingHorizontal: 20,
    height: 300,
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    alignSelf: "flex-start",
  },
  divider: {
    width: "80%",
  },
  setTodoButton: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: colors.gray100,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: 8,
  },
});
