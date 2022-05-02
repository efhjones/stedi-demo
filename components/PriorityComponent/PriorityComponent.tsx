import { priorityFeature } from "../../constants";
import { usePrioritySlot } from "../../slots/hooks";
import DefaultPriority from "../DefaultPriority";

const PriorityComponent = () => {
  const { isLoading, component: Component } = usePrioritySlot(priorityFeature);
  return isLoading ? <DefaultPriority /> : <Component />;
};

export default PriorityComponent;
