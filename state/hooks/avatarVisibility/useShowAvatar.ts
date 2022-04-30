import { useSetRecoilState } from "recoil"
import { avatarVisibility } from "../../atoms"

const useShowAvatar = () => {
  const setAvatarVisibility = useSetRecoilState(avatarVisibility);
  return () => setAvatarVisibility('visible');
}

export default useShowAvatar;
