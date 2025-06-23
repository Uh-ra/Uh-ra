import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationTypes } from "@/types"; // 경로는 네가 저장한 위치로 맞춰줘
import { CategoryKey, category, colors } from "@/constants";
import { Txt } from "@/components/Txt";
import { Arrow } from "@/assets/icons/Arrow";
import { Button } from "@/components/Button";

function Onboarding1() {
  const [pressed, setPressed] = useState<CategoryKey>("일상");
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationTypes>>();

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Arrow
          onPress={() => navigation.goBack()}
          rotate="left"
          color="gray400"
        />
        <View style={styles.titleBox}>
          <Txt type="regular28">
            만나서 만가워요.{"\n"}어떤 상황에서 소지품을{"\n"}관리 받고
            싶으신가요?
          </Txt>
          <Txt type="medium14" color="gray400">
            소지품 관리가 가장 필요한 상황을 1개 골라 주세요.
          </Txt>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.categoryList}>
          {category.map(({ icon, name }, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.section,
                {
                  backgroundColor:
                    name == pressed ? colors.gray900 : colors.gray100,
                },
              ]}
              onPress={() => setPressed(name)}
            >
              {React.createElement(icon, {
                selected: name === pressed,
              })}
              <Txt
                type="medium18"
                color={name == pressed ? "white" : "gray400"}
              >
                {name}
              </Txt>
            </TouchableOpacity>
          ))}
        </View>
        <Button
          text="다음"
          onPress={() =>
            navigation.navigate("Onboarding2", { selectedCategory: pressed })
          }
        />
      </View>
    </View>
  );
}
export default Onboarding1;
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
  button: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#2563eb", // blue-600
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  categoryList: {
    gap: 12,
  },
  section: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  pressedButton: {
    backgroundColor: colors.gray900,
  },
  bottomBox: {
    gap: 48,
  },
  topBox: {
    gap: 40,
  },
});
