import { Category } from "@/components/Category";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { TodoCard } from "@/components/TodoCard";
import { CategoryKey, category, colors } from "@/constants";
import { Txt } from "@/components/Txt";
import { useNavigation } from "expo-router";
import { NavigationTypes } from "@/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Bell, Menu, More } from "@/assets/icons";

export default function TabOneScreen() {
  const [pressed, setPressed] = useState<CategoryKey>("일상");

  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationTypes>>();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.topBarButton}>
          <Bell fill color="gray400" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBarButton}>
          <Menu color="gray400" />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryBox}>
          {category.map(({ icon, name }, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.section,
                {
                  backgroundColor:
                    name == pressed ? colors.gray900 : colors.white,
                },
              ]}
              onPress={() => setPressed(name)}
            >
              {React.createElement(icon, {
                selected: name === pressed,
              })}
              <Txt color={name == pressed ? "white" : "gray400"}>{name}</Txt>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <More color="gray400" />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ rowGap: 8 }}
        style={styles.todolistBox}
      >
        <TodoCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 4,
  },
  topBarButton: {
    padding: 8,
  },
  categoryContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.gray100,
    paddingVertical: 20,
    gap: 20,
  },
  section: {
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryBox: {
    columnGap: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  todolistBox: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  moreButton: {
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
