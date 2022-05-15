import { selectorFamily, atom, selector } from "recoil";
import count from "../../count";
import currentUserId from "../atoms/currentUserId";

const userData = selectorFamily({
  key: "userData",
  get:
    (userId: number) =>
    async ({ get }) => {
      if (!userId) {
        return;
      }
      // get(count);
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        ).then((res) => res.json());
        return data;
      } catch {
        throw new Error("User does not exist");
      }
    },
});

// const userData = atom({
//   key: "userData",
//   default: selector({
//     key: "userDataDefault",
//     get: async ({ get }) => {
//       const userId = get(currentUserId);
//       get(count);
//       try {
//         const data = await fetch(
//           `https://jsonplaceholder.typicode.com/users/${userId}`
//         ).then((res) => res.json());
//         return data;
//       } catch {
//         throw new Error("User does not exist");
//       }
//     },
//   }),
// });

// We could also use atom effects to initialize the atom,
// but this only works to initialize -- we don't update here based on dependencies.
//   default: {
//     name: "",
//     username: "",
//     phone: "",
//   },
//   effects_UNSTABLE: [
//     ({ setSelf, getLoadable }) => {
//       getLoadable(currentUserId)
//         .toPromise()
//         .then((userId) => {
//           fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//             .then((res) => res.json())
//             .then((data) => {
//               setSelf(data);
//             });
//         });
//     },
//   ],
// });

export default userData;
