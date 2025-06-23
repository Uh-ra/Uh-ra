import {
  Animated,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import { Txt } from "./Txt";
import React, { useState } from "react";
import { Close } from "@/assets/icons";
import { colors } from "@/constants";
import { Dropdown } from "./Dropdown";
import { setTimes, setTimesTitle } from "@/constants/time";

interface ModalProps {
  isModalVisible: boolean;
  closeModal: any;
  slideAnim: any;
}
type DropdownKey = keyof typeof setTimes;

export const AddTodoModal = ({
  isModalVisible,
  closeModal,
  slideAnim,
}: ModalProps) => {
  const [selectedDropdownKey, setSelectedDropdownKey] = useState<any>(null);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState({
    ampm: "",
    hour: "",
    minute: "",
  });

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isByDay, setIsByDay] = useState<boolean>(true);
  const [isToggled, setIsToggled] = useState(false);
  const handleDropdownPress = (key: string) => {
    setSelectedDropdownKey((prev) => (prev === key ? null : key));
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="none"
      transparent
      statusBarTranslucent
    >
      <Pressable style={styles.modalBackground} onPress={closeModal} />
      <Animated.View
        style={[
          styles.modalContent,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.modalTitleBox}>
          <TouchableOpacity onPress={closeModal}>
            <Close color="gray300" />
          </TouchableOpacity>
          <Txt type="semibold18">알림 설정</Txt>
          <TouchableOpacity>
            <Txt type="semibold16" color="gray500">
              완료
            </Txt>
          </TouchableOpacity>
        </View>
        <View style={styles.todoNotification}>
          <Txt type="semibold16" color="gray600">
            알림
          </Txt>
          <TouchableOpacity
            style={[
              styles.toggleBox,
              { backgroundColor: isToggled ? colors.red400 : colors.gray200 },
            ]}
            onPress={() => setIsToggled(!isToggled)}
          >
            <Animated.View
              style={[
                styles.toggleCircle,
                {
                  transform: [{ translateX: isToggled ? 28 : 0 }],
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.setDayToggleBox}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              isByDay ? styles.selectedButton : styles.notSelectedButton,
            ]}
            onPress={() => setIsByDay(true)}
          >
            <Txt type="semibold16" color={isByDay ? "gray900" : "gray400"}>
              요일별
            </Txt>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              !isByDay ? styles.selectedButton : styles.notSelectedButton,
            ]}
            onPress={() => setIsByDay(false)}
          >
            <Txt type="semibold16" color={!isByDay ? "gray900" : "gray400"}>
              날짜별
            </Txt>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 8 }}>
          <View style={styles.setDayDropdownBox}>
            <Dropdown
              title="평일"
              onPress={() => handleDropdownPress("days")}
              pressed={selectedDropdownKey === "days"}
            />
            <Dropdown
              title="오전 8:00"
              onPress={() => handleDropdownPress("time")}
              pressed={selectedDropdownKey === "time"}
            />
          </View>

          <View style={styles.setDayDropdownBox}>
            <Dropdown
              title="정시"
              onPress={() => handleDropdownPress("noticeTime")}
              pressed={selectedDropdownKey === "noticeTime"}
            />
            <Txt>에</Txt>
            <Dropdown
              title="매주"
              onPress={() => handleDropdownPress("repeatNotice")}
              pressed={selectedDropdownKey === "repeatNotice"}
            />
            <Txt>챙겨드릴게요!</Txt>
          </View>
        </View>
        {selectedDropdownKey && (
          <View style={styles.selectDropdownBox}>
            <Txt type="semibold16" style={styles.modalTitle}>
              {selectedDropdownKey}
            </Txt>

            {selectedDropdownKey === "time" ? (
              <>
                {["ampm", "hour", "minute"].map((key) => {
                  const items =
                    setTimes.time[key as keyof typeof setTimes.time];
                  return (
                    <View key={key} style={styles.optionGrid}>
                      {items.map((item) => (
                        <TouchableOpacity
                          key={item}
                          style={[
                            styles.optionItem,
                            {
                              backgroundColor: selectedItems.includes(item)
                                ? colors.gray500
                                : colors.gray100,
                            },
                          ]}
                          onPress={() => toggleSelect(item)}
                        >
                          <Txt
                            type="medium16"
                            color={
                              selectedItems.includes(item) ? "white" : "gray600"
                            }
                          >
                            {item}
                          </Txt>
                        </TouchableOpacity>
                      ))}
                    </View>
                  );
                })}
              </>
            ) : (
              <View style={styles.optionGrid}>
                {setTimes[
                  selectedDropdownKey as Exclude<DropdownKey, "time">
                ].map((line) => (
                  <View style={styles.option}>
                    {line.map((item, i) => (
                      <TouchableOpacity
                        key={i}
                        style={[
                          styles.optionItem,
                          {
                            backgroundColor: selectedItems.includes(item)
                              ? colors.gray500
                              : colors.gray100,
                          },
                        ]}
                        onPress={() => toggleSelect(item)}
                      >
                        <Txt
                          type="medium16"
                          color={
                            selectedItems.includes(item) ? "white" : "gray600"
                          }
                        >
                          {item}
                        </Txt>
                      </TouchableOpacity>
                    ))}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    gap: 4,
  },
  setDayDropdownBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  setDayToggleBox: {
    flexDirection: "row",
    borderRadius: 40,
    backgroundColor: colors.gray100,
    padding: 4,
    width: "100%",
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  selectedButton: {
    backgroundColor: colors.white,
  },
  notSelectedButton: {
    backgroundColor: "transparent",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 24,
    minHeight: 380,
  },
  modalTitleBox: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 8,
  },
  todoNotification: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 8,
  },
  toggleBox: {
    width: 56,
    height: 28,
    borderRadius: 100,
    padding: 2,
    justifyContent: "center",
  },
  toggleCircle: {
    width: 24,
    height: 24,
    borderRadius: 100,
    backgroundColor: "#fff",
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    rowGap: 12,
    columnGap: 8,
    flexDirection: "row",
  },
  optionGrid: {
    gap: 12,
    height: 100,
  },
  option: {
    flexDirection: "row",
    gap: 8,
  },
  selectDropdownBox: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
});
