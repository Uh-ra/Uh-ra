import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { CategoryKey, colors, essentialsList } from "@/constants";
import { Txt } from "@/components/Txt";
import { Arrow } from "@/assets/icons/Arrow";
import { Button } from "@/components/Button";
import { useLocalSearchParams } from "expo-router";
import { Check } from "@/assets/icons";

function Onboarding3() {
  const [pressed, setPressed] = useState<string>("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { selectedCategory }: { selectedCategory: CategoryKey } =
    useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Arrow rotate="left" color="gray400" />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Txt type="regular28">당신을 위한{"\n"}소지품 리스트를 찾았어요.</Txt>
          <Txt type="medium14" color="gray400">
            가장 필요한 리스트를 1개 골라 주세요.{"\n"}
            리스트가 홈에 그대로 추가돼요.
          </Txt>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={styles.categoryList}
        >
          {essentialsList[selectedCategory].map(({ title, items }, i) => (
            <View style={styles.section}>
              <TouchableOpacity
                onPress={() => setPressed(title)}
                style={styles.sectionTitle}
              >
                <Txt type="semibold20">{title}</Txt>
                <View
                  style={[
                    styles.checkBox,
                    {
                      backgroundColor:
                        pressed == title ? colors.gray900 : colors.gray300,
                    },
                  ]}
                >
                  <Check
                    size={16}
                    color={pressed == title ? "white" : "gray300"}
                  />
                </View>
              </TouchableOpacity>
              <Txt type="medium14" color="gray400">
                {items.length}개
              </Txt>
              <ScrollView
                style={styles.list}
                contentContainerStyle={styles.listContent}
                nestedScrollEnabled={true}
              >
                {items.map((item) => (
                  <Txt key={item} type="medium16" style={styles.listItem}>
                    {item}
                  </Txt>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
        <Button
          text="다음"
          onPress={() => navigation.navigate("Onboarding4")}
        />
      </View>
    </View>
  );
}
export default Onboarding3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 60,
    gap: 40,
  },
  titleBox: {
    gap: 20,
  },
  categoryList: {
    gap: 8,
  },
  section: {
    borderRadius: 12,
    padding: 24,
    backgroundColor: colors.gray100,
    gap: 8,
    width: Dimensions.get("screen").width - 48,
  },
  sectionTitle: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  bottomBox: {
    flex: 1,
    gap: 16,
  },
  topBox: {
    gap: 40,
  },
  checkBox: {
    borderRadius: 6,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {},
  listContent: {
    paddingBottom: 8,
  },

  listItem: {
    paddingVertical: 8,
  },
});
