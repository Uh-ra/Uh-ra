import React from "react";
import { View, FlatList, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Onboarding4() {
  const { selectedTopics } = useLocalSearchParams();

  // selectedTopics가 문자열일 경우 JSON.parse
  const topics =
    typeof selectedTopics === "string" ? JSON.parse(selectedTopics) : [];

  const list = topics.flatMap((topic: string) => [
    `${topic} 추천 1`,
    `${topic} 추천 2`,
    `${topic} 추천 3`,
  ]);

  return (
    <FlatList
      data={list}
      keyExtractor={(item, idx) => idx.toString()}
      renderItem={({ item }) => (
        <Text style={{ padding: 10, borderBottomWidth: 1 }}>{item}</Text>
      )}
    />
  );
}
