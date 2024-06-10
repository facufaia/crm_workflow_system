import { create } from "zustand";

export const useModalStore = create((set) => ({
  modalAction: null,
  modalData: null,
  modalMessage: null,
  setModalAction: (modalAction) => set({ modalAction }),
  setModalData: (modalData) => set({ modalData }),
  setModalMessage: (modalMessage) => set({ modalMessage }),
}));
