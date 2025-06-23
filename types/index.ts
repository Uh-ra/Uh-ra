import { CategoryKey } from "@/constants";

export type NavigationTypes = {
  Onboarding1: undefined;
  Onboarding2: { selectedCategory: CategoryKey };
  Onboarding3: { selectedCategory: CategoryKey; selectedTopics: string[] };
  "(tabs)": undefined;
};
