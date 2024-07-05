import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";

export interface UserState {
  picture: string;
  name: string;
  surname: string;
  socialNetworks: WritableDraft<{
    twitter: string;
    facebook: string;
    instagram: string;
  }>;
  showInputs: {
    twitter: boolean;
    facebook: boolean;
    instagram: boolean;
  };
}

const initialState: UserState = {
  picture: "",
  name: "",
  surname: "",
  socialNetworks: {
    twitter: "",
    facebook: "",
    instagram: "",
  },
  showInputs: {
    twitter: false,
    facebook: false,
    instagram: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state.picture = action.payload.picture;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.socialNetworks = action.payload.socialNetworks;
    },
    toggleInput: (state, action: PayloadAction<string>) => {
      const network = action.payload as keyof typeof state.showInputs;

      state.showInputs[network] = !state.showInputs[network];

      Object.keys(state.showInputs).forEach((key) => {
        if (key !== network) {
          state.showInputs[key as keyof typeof state.showInputs] = false;
        }
      });
    },
    setSocialNetwork: (
      state,
      action: PayloadAction<{
        network: keyof typeof state.socialNetworks;
        value: string;
      }>
    ) => {
      const { network, value } = action.payload;
      state.socialNetworks[network] = value;
    },
    setPicture: (state, action: PayloadAction<string>) => {
      state.picture = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload;
    },
  },
});

export const {
  setUserInfo,
  toggleInput,
  setSocialNetwork,
  setPicture,
  setName,
  setSurname,
} = userSlice.actions;

export default userSlice.reducer;
