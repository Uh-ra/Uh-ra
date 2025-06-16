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
import { days, noticeTime, repeatNotice } from "@/constants/time";

interface ModalProps {
  isModalVisible: boolean;
  closeModal: any;
  slideAnim: any;
}

export const AddTodoModal = ({
  isModalVisible,
  closeModal,
  slideAnim,
}: ModalProps) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isByDay, setIsByDay] = useState<boolean>(true);
  const [isToggled, setIsToggled] = useState(false);

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
            <Close color="gray200" />
          </TouchableOpacity>
          <Txt type="semibold18">설정 모달</Txt>
          <TouchableOpacity>
            <Txt type="semibold18" color="red600">
              완료
            </Txt>
          </TouchableOpacity>
        </View>
        <View style={styles.todoNotification}>
          <Txt type="semibold16" color="gray500">
            알림
          </Txt>
          <Pressable
            style={[
              styles.toggleBox,
              { backgroundColor: isToggled ? colors.red400 : colors.gray100 },
            ]}
            onPress={() => setIsToggled(!isToggled)}
          >
            <Animated.View
              style={[
                styles.toggleCircle,
                {
                  transform: [
                    { translateX: isToggled ? 24 : 0 }, // 위치 이동
                  ],
                },
              ]}
            />
          </Pressable>
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
          {/* 평일/오전8:00 클릭 시 디테일 열기 */}
          <TouchableOpacity onPress={() => setIsDetailOpen((prev) => !prev)}>
            <View style={styles.setDayDropdownBox}>
              <Dropdown text="평일" select={days.day} />
              <Dropdown text="오전 8:00" select={[]} />
            </View>
          </TouchableOpacity>

          {/* 디테일 펼침 영역 */}
          {isDetailOpen && (
            <View style={styles.detailContainer}>
              <Txt type="medium14" color="gray600">
                반복 설정
              </Txt>
              <View style={styles.setDayDropdownBox}>
                <Dropdown text="매주" select={repeatNotice} />
                <Dropdown text="10분 전에" select={noticeTime} />
              </View>
            </View>
          )}

          {/* 아래는 원래 있던 드롭다운들 */}
          <View style={styles.setDayDropdownBox}>
            <Dropdown text="정시" select={noticeTime} />
            <Txt>에</Txt>
            <Dropdown text="매주" select={repeatNotice} />
            <Txt>챙겨드릴게요!</Txt>
          </View>
        </View>
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
  },
  todoNotification: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  toggleBox: {
    width: 48,
    height: 24,
    borderRadius: 100,
    padding: 2,
    justifyContent: "center",
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
});
