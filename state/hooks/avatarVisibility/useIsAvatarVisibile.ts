import { useRecoilValue } from "recoil";
import { avatarVisibility } from "../../atoms";

const useIsAvatarVisible = () => {
  const visibility = useRecoilValue(avatarVisibility);
  return visibility === 'visible';
}

export default useIsAvatarVisible;
