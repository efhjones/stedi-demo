import { atom } from "recoil";

const count = atom({
  key: "count",
  default: 1,
});

export default count;
