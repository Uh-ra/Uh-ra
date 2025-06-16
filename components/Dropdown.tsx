import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { Txt } from "./Txt";
import { Arrow } from "@/assets/icons/Arrow";
import { colors } from "@/constants";
import { useState } from "react";

interface DropdownProps {
  text: string;
  select: string[];
}

export const Dropdown = ({ text, select }: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(text);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    setShowOptions(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => setShowOptions((prev) => !prev)}
        style={styles.dropdownBox}
      >
        <Txt type="medium16" color="gray900">
          {selectedItem}
        </Txt>
        <Arrow color="gray200" rotate={showOptions ? "up" : "down"} />
      </TouchableOpacity>

      {showOptions && (
        <View>
          {select.map((item) => (
            <Pressable key={item} onPress={() => handleSelect(item)}>
              <Txt color={selectedItem === item ? "white" : "gray700"}>
                {item}
              </Txt>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  dropdownBox: {
    backgroundColor: colors.gray100,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
