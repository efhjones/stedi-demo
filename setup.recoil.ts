import { Snapshot, RecoilValue, selector, snapshot_UNSTABLE } from "recoil";

const clearSelectorCachesState = selector({
  key: "ClearSelectorCaches",
  get: ({ getCallback }) =>
    getCallback(({ snapshot, refresh }) => () => {
      for (const node of snapshot.getNodes_UNSTABLE()) {
        refresh(node);
      }
    }),
});

const testingSnapshot = snapshot_UNSTABLE();

const clearSelectorCaches = testingSnapshot
  .getLoadable(clearSelectorCachesState)
  .getValue();

afterEach(clearSelectorCaches);
