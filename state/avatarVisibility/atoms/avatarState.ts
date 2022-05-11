import { atom } from "recoil";

const avatarState = atom<"hidden" | "visible">({
  key: "avatarState",
  default: "hidden",
});

export default avatarState;
