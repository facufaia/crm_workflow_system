import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalAction: null,
  modalProduct: null,
  modalMessage: null,
  setModalAction: (modalAction) => set({ modalAction }),
  setModalProduct: (modalProduct) => set({ modalProduct }),
  setModalMessage: (modalMessage) => set({ modalMessage }),
}));
