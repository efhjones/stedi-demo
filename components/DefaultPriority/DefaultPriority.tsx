import { usePrioritySlot } from "../../slots/hooks";
import styles from "./DefaultPriority.module.css";

const DefaultPriority = () => {
  return (
    <section className={styles.root}>
      <h2>Default Priority Component</h2>
    </section>
  );
};

export default DefaultPriority;
