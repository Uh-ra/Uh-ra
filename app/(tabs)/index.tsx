import { Category } from "@/components/Category";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { TodoCard } from "@/components/TodoCard";
import { colors } from "@/constants";
import { Txt } from "@/components/Txt";

export default function TabOneScreen() {
  const arr = [
    { icon: <></>, text: "일상" },
    { icon: <></>, text: "출근" },
    { icon: <></>, text: "여행" },
    { icon: <></>, text: "기타" },
  ];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Txt type="semibold20">이것저것어쩌고저저고</Txt>
      <ScrollView
        horizontal
        contentContainerStyle={styles.categoryBox}
        style={styles.displayContents}
      >
        {arr.map(({ icon, text }, i) => (
          <Category
            key={i}
            text={text}
            icon={icon}
            selected={selectedCategory === text}
            onPress={() => setSelectedCategory(text)}
          />
        ))}
      </ScrollView>
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
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.gray100,
    paddingVertical: 20,
    gap: 20,
  },
  categoryBox: {
    columnGap: 8,
    alignItems: "center",
    width: "100%",
    padding: 8,
  },
  todolistBox: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  displayContents: {
    display: "contents",
  },
});
