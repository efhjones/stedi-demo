import { atom } from "recoil";

const currentUserId = atom({
  key: "currentUserId",
  default: 1,
});

export default currentUserId;
