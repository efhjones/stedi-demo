import styles from "./SlideOutAvatar.module.css";
import Image from "next/image";
import { useIsAvatarVisible } from "../../state";

const SlideOutAvatar = () => {
  const isVisible = useIsAvatarVisible();
  return (
    <div
      className={isVisible ? styles.slideOutAvatar : styles.hiddenAvatar}
      tabIndex={0}
      aria-hidden={true}
    >
      <div className={styles.avatar}>
        <Image
          src="/headshot.png"
          aria-label="emily"
          className={styles.emily}
          width={35}
          height={35}
        />
        <div
          role="img"
          aria-label="animated waving hand"
          className={styles.waving}
          data-emoji="✋🏻"
        />
      </div>
    </div>
  );
};

export default SlideOutAvatar;
