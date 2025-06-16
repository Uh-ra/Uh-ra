import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { CategoryKey, categoryItem, colors } from "@/constants";
import { Txt } from "@/components/Txt";
import { Arrow } from "@/assets/icons/Arrow";
import { Button } from "@/components/Button";
import { useLocalSearchParams } from "expo-router";

function Onboarding2() {
  const [pressed, setPressed] = useState<string[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { selectedCategory }: { selectedCategory: CategoryKey } =
    useLocalSearchParams();

  const toggleSelection = (name: string) => {
    setPressed((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const titleStr: Record<CategoryKey, string> = {
    일상: "일상 속에서",
    운동: "운동 전에",
    여행: "여행하기 전",
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow rotate="left" color="gray400" />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Txt type="regular28">
            {titleStr[selectedCategory]} 챙기고 싶은{"\n"}소지품이 있나요?
          </Txt>
          <Txt type="medium14" color="gray400">
            이것만은 꼭 챙겼으면 하는 소지품을 알려 주세요.{"\n"}
            리스트에 추가되어 알림을 받아 볼 수 있어요.
          </Txt>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.categoryList}>
          {categoryItem[selectedCategory].map(
            ({ icon, name }: any, i: number) => {
              const isSelected = pressed.includes(name);
              return (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.section,
                    {
                      backgroundColor: isSelected
                        ? colors.gray900
                        : colors.gray100,
                    },
                  ]}
                  onPress={() => toggleSelection(name)}
                >
                  {React.createElement(icon, {
                    selected: isSelected,
                  })}
                  <Txt color={isSelected ? "white" : "gray400"}>{name}</Txt>
                </TouchableOpacity>
              );
            }
          )}
        </View>
        <Button
          text="다음"
          onPress={() =>
            navigation.navigate("Onboarding3", {
              selectedCategory: selectedCategory,
              selectedTopics: pressed,
            })
          }
        />
      </View>
    </View>
  );
}
export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: "space-between",
  },
  titleBox: {
    gap: 20,
  },
  categoryList: {
    flexWrap: "wrap",
    flexDirection: "row",
    columnGap: 8,
    rowGap: 12,
  },
  section: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bottomBox: {
    gap: 48,
  },
  topBox: {
    gap: 40,
  },
});
