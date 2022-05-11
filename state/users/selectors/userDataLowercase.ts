import { selectorFamily } from "recoil";
import userData from "./users";

const userDataLowercase = selectorFamily({
  key: "userDataLowerCase",
  get:
    (userId: number) =>
    ({ get }) => {
      if (!userId) {
        return;
      }
      const dataForUser = get(userData(userId));
      return Object.keys(dataForUser).reduce((data) => {
        return {
          ...dataForUser,
          name: dataForUser.name.toLowerCase(),
        };
      }, {});
    },
});

export default userDataLowercase;
