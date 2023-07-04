import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { sideBar } from "./data";

const formStep = sideBar.length;

const useStep = create<{
  isConfirmed: boolean;
  currentIndex: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  actions: {
    goForward: () => void;
    goBackWard: () => void;
    goToSection: (item: number) => void;
    setConfirm: () => void;
  };
}>((set, get) => ({
  isConfirmed: false,
  currentIndex: 0,
  isFirstStep: true,
  isLastStep: false,
  actions: {
    goForward: () => {
      if (get().currentIndex === formStep - 1) return;
      const currentIndex = get().currentIndex + 1;
      set({
        currentIndex,
        isFirstStep: false,
        isLastStep: currentIndex === formStep - 1,
        isConfirmed: false,
      });
    },
    goBackWard: () => {
      if (get().currentIndex === 0) return;
      const currentIndex = get().currentIndex - 1;
      set({
        currentIndex,
        isFirstStep: currentIndex === 0,
        isLastStep: false,
        isConfirmed: false,
      });
    },
    goToSection: (item: number) => {
      set({
        currentIndex: item,
        isFirstStep: item === 0,
        isLastStep: item === formStep - 1,
        isConfirmed: false,
      });
    },
    setConfirm: () => {
      set({ isConfirmed: true, currentIndex: formStep + 1 });
    },
  },
}));

export const useCurrentIndex = () => useStep((state) => state.currentIndex);
export const useIsFirstStep = () => useStep((state) => state.isFirstStep);
export const useIsLastStep = () => useStep((state) => state.isLastStep);
export const useIsConfirmed = () => useStep((state) => state.isConfirmed);
export const useStepActions = () => useStep((state) => state.actions);

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "Arcade" | "Advanced" | "Pro" | "";
  isYearly: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  isOnlineService: boolean;
};

export const useForm = create<{
  formData: FormItems;
  actions: {
    setFormItems: (fieldToUpdate: Partial<FormItems>) => void;
  };
}>((set, get) => ({
  formData: {
    name: "",
    email: "",
    phone: "",
    plan: "",
    isYearly: false,
    isLargerStorage: false,
    isCustomizableProfile: false,
    isOnlineService: false,
  } as FormItems,
  actions: {
    setFormItems: (fieldToUpdate: Partial<FormItems>) => {
      set({
        formData: { ...get().formData, ...fieldToUpdate },
      });
    },
  },
}));

export const useFormData = () => useForm((state) => state.formData, shallow);
export const useFormActions = () => useForm((state) => state.actions);
