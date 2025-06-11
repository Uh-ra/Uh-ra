import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CategoryProps {
  icon?: React.ReactNode;
  text: string;
  selected?: boolean;
  onPress?: () => void;
}

export const Category = ({ icon, text, selected, onPress }: CategoryProps) => {
  return (
    <TouchableOpacity
      style={[styles.category, selected && styles.selected]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.text, selected && styles.selectedText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 100,
    gap: 4,
    backgroundColor: "#fff",
  },
  selected: {
    backgroundColor: "#333", // 반전된 배경색
  },
  text: {
    color: "#000",
  },
  selectedText: {
    color: "#fff", // 반전된 글자색
  },
});
