import {
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import { Txt } from "./Txt";
import { colors } from "@/constants";
import { Arrow2 } from "@/assets/icons";

interface DropdownProps {
  title: string;
  pressed?: boolean;
  onPress?: () => void;
}

export const Dropdown = ({ title, pressed, onPress }: DropdownProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.dropdownBox,
        { backgroundColor: pressed ? colors.gray900 : colors.gray100 },
      ]}
    >
      <Txt type="medium16" color={pressed ? "white" : "gray900"}>
        {title}
      </Txt>
      <Arrow2 color="gray400" rotate={pressed ? "up" : "down"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    height: 200,
    gap: 8,
  },
  modalTitle: {
    marginBottom: 16,
  },
  optionItem: {
    padding: 14,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    rowGap: 12,
    columnGap: 8,
    flexDirection: "row",
  },
  optionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
