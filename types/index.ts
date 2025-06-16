import { CategoryKey } from "@/constants";

export type RootStackParamList = {
  Onboarding1: undefined;
  Onboarding2: { selectedCategory: CategoryKey };
  Onboarding3: { selectedCategory: CategoryKey; selectedTopics: string[] };
  Onboarding4: undefined;
};
