import { useSetRecoilState } from "recoil"
import { avatarVisibility } from "../../atoms"

const useHideAvatar = () => {
  const setAvatarVisibility = useSetRecoilState(avatarVisibility);
  return () => setAvatarVisibility('hidden');
}

export default useHideAvatar;
