import { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Txt } from "./Txt";
import { Arrow2 } from "@/assets/icons";
import { colors } from "@/constants";

interface TimeDropdownProps {
  selectedTime: {
    ampm: string;
    hour: string;
    minute: string;
  };
  setSelectedTime: (time: {
    ampm: string;
    hour: string;
    minute: string;
  }) => void;
  title: string;
}

export const TimeDropdown = ({
  selectedTime,
  setSelectedTime,
  title,
}: TimeDropdownProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const displayTime =
    selectedTime.ampm && selectedTime.hour && selectedTime.minute
      ? `${selectedTime.ampm} ${selectedTime.hour}:${selectedTime.minute}`
      : title;

  const hourList = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const minuteList = ["00", "10", "20", "30", "40", "50"];
  const ampmList = ["오전", "오후"];

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.dropdownBox}
      >
        <Txt type="medium16" color="gray900">
          {displayTime}
        </Txt>
        <Arrow2 color="gray400" rotate="down" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalContainer}>
          <Txt type="semibold16" style={styles.modalTitle}>
            {title}
          </Txt>

          <View style={styles.pickerSection}>
            {/* 오전/오후 */}
            <Picker
              selectedValue={selectedTime.ampm}
              onValueChange={(value) =>
                setSelectedTime({ ...selectedTime, ampm: value })
              }
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {ampmList.map((value) => (
                <Picker.Item label={value} value={value} key={value} />
              ))}
            </Picker>

            {/* 시 */}
            <Picker
              selectedValue={selectedTime.hour}
              onValueChange={(value) =>
                setSelectedTime({ ...selectedTime, hour: value })
              }
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {hourList.map((value) => (
                <Picker.Item label={value} value={value} key={value} />
              ))}
            </Picker>

            {/* 분 */}
            <Picker
              selectedValue={selectedTime.minute}
              onValueChange={(value) =>
                setSelectedTime({ ...selectedTime, minute: value })
              }
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {minuteList.map((value) => (
                <Picker.Item label={value} value={value} key={value} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownBox: {
    borderWidth: 1,
    borderColor: colors.gray200,
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  modalTitle: {
    textAlign: "center",
    marginBottom: 16,
  },
  pickerSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  picker: {
    flex: 1,
  },
  pickerItem: {
    fontSize: 18,
    height: Platform.OS === "ios" ? 180 : undefined,
  },
});
