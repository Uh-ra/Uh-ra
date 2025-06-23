import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationTypes } from "@/types";
import { CategoryKey, colors, essentialsList } from "@/constants";
import { Txt } from "@/components/Txt";
import { Arrow } from "@/assets/icons/Arrow";
import { Button } from "@/components/Button";
import { useLocalSearchParams } from "expo-router";
import { Check } from "@/assets/icons";
import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

function Onboarding3() {
  const [pressed, setPressed] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationTypes>>();
  const { selectedCategory }: { selectedCategory: CategoryKey } =
    useLocalSearchParams();
  const scrollRef = useRef<ScrollView>(null);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const threshold = 0.3;

    const nextIndex =
      offsetX - currentIndex * screenWidth > screenWidth * threshold
        ? currentIndex + 1
        : offsetX - currentIndex * screenWidth < -screenWidth * threshold
        ? currentIndex - 1
        : currentIndex;

    const clampedIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));
    setCurrentIndex(clampedIndex);

    scrollRef.current?.scrollTo({
      x: clampedIndex * screenWidth - clampedIndex * 40,
      animated: true,
    });
  };

  const screenWidth = Dimensions.get("screen").width;
  const sections = essentialsList[selectedCategory];

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
          ref={scrollRef}
          horizontal
          pagingEnabled={false}
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={handleScrollEnd}
          scrollEventThrottle={16}
          contentContainerStyle={styles.categoryList}
        >
          {sections.map(({ title, items }, i) => (
            <View key={title} style={styles.section}>
              <View style={styles.sectionTitle}>
                <View style={styles.categoryList}>
                  <Txt type="semibold20">{title}</Txt>
                  <Txt type="medium14" color="gray400">
                    {items.length}개
                  </Txt>
                </View>
                <TouchableOpacity
                  onPress={() => setPressed(title)}
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
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.list}
                contentContainerStyle={styles.listContent}
                nestedScrollEnabled={true}
              >
                {items.map((item) => (
                  <Txt
                    key={item}
                    type="medium16"
                    color="gray600"
                    style={styles.listItem}
                  >
                    {item}
                  </Txt>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>
        <View style={styles.indicatorBox}>
          {sections.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    i === currentIndex ? colors.gray900 : colors.gray300,
                },
              ]}
            />
          ))}
        </View>

        <Button text="다음" onPress={() => navigation.navigate("(tabs)")} />
      </View>
    </View>
  );
}

export default Onboarding3;

const styles = StyleSheet.create({
  indicatorBox: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: colors.gray300,
  },
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
    backgroundColor: colors.gray100,
    width: Dimensions.get("screen").width - 48,
  },
  sectionTitle: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  bottomBox: {
    flex: 1,
    gap: 24,
  },
  topBox: {
    gap: 40,
  },
  checkBox: {
    borderRadius: 6,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {},
  listContent: {
    paddingBottom: 8,
  },

  listItem: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
});
