import {
  Pressable,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Txt } from "./Txt";
import { Todo } from "./Todo";
import { useState } from "react";
import { Pin, Plus } from "@/assets/icons";
import { colors } from "@/constants";

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

  return (
    <View style={styles.container}>
      {/* 제목 */}
      <View style={styles.titleContainer}>
        <View style={styles.titleBox}>
          <Txt type="semibold20">출근길에 챙겨야할것</Txt>
          <TouchableOpacity
            onPress={() => setIsPin(!isPin)}
            style={styles.pushpinButton}
          >
            <Pin color="gray200" fill={isPin} />
          </TouchableOpacity>
        </View>
        <Txt type="medium14" color="gray400">
          어쩌고저쩌고
        </Txt>
      </View>
      {/* 투두리스트 */}
      <View style={styles.todolistContainer}>
        <ScrollView contentContainerStyle={styles.todolistBox}>
          <Pressable style={styles.addButton}>
            <Plus size={22} color="gray200" />
            <Txt type="medium18" color="gray200">
              추가하기
            </Txt>
          </Pressable>
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
      <Pressable style={styles.setTodoButton}>
        <Txt>설정</Txt>
      </Pressable>
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
  pushpinButton: {
    backgroundColor: "#f00",
  },
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
    borderTopColor: colors.gray50,
    borderTopWidth: 1,
  },
  setTodoBox: {
    width: "100%",
    gap: 8,
  },
});
