import { selector, useRecoilValue, useSetRecoilState } from "recoil";
import { avatarState } from "../atoms";

const avatarVisibiltySelector = selector({
  key: "avatarVisibilitySelector",
  get: ({ get }) => {
    return get(avatarState);
  },
  set: ({ set }, newValue) => {
    if (newValue !== "hidden" && newValue !== "visible") {
      throw new Error(`Visibility passed invalid value: ${newValue}`);
    }
    set(avatarState, newValue);
  },
});

const useIsAvatarVisible = () => {
  return useRecoilValue(avatarVisibiltySelector) === "visible";
};

export const useHideAvatar = () => {
  const setVisibility = useSetRecoilState(avatarVisibiltySelector);
  return () => setVisibility("hidden");
};

export const useShowAvatar = () => {
  const setVisibility = useSetRecoilState(avatarVisibiltySelector);
  return () => setVisibility("visible");
};

export default useIsAvatarVisible;
