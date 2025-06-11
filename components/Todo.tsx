import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Txt } from "./Txt";
import { Check } from "@/assets/icons";
import { colors } from "@/constants";

interface TodoProps {
  text: string;
  type?: "normal" | "important";
  checked?: boolean;
  onPress: () => void;
}

export const Todo = ({
  text,
  type = "normal",
  checked = false,
  onPress,
}: TodoProps) => {
  const isImportant = type === "important";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.todo,
        isImportant ? styles.importantTodo : styles.normalTodo,
        checked &&
          (isImportant
            ? styles.importantTodoChecked
            : styles.normalTodoChecked),
      ]}
    >
      <View style={styles.checkButton}>
        {checked && <Check size={14} color="red600" />}
      </View>
      <Txt
        type="medium18"
        color={checked ? (isImportant ? "gray500" : "gray400") : "black"}
        style={checked && styles.checkedTodo}
      >
        {text}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
  },
  normalTodo: {
    backgroundColor: colors.gray50,
  },
  importantTodo: {
    backgroundColor: colors.red400,
  },
  importantTodoChecked: {
    backgroundColor: colors.red100,
  },
  normalTodoChecked: {
    backgroundColor: colors.gray50,
  },
  checkedTodo: {
    opacity: 0.6,
  },
  checkButton: {
    borderRadius: 20,
    backgroundColor: colors.white,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
