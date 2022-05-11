import React, { useCallback } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { count, userData, userDataLowercase, currentUserId } from "../../state";
import ClientOnly from "../ClientOnly";
import styles from "./Main.module.css";

const Main = () => {
  const [currentUserID, setCurrentUserId] = useRecoilState(currentUserId);
  const currentUserLoadable = useRecoilValueLoadable(
    userDataLowercase(currentUserID)
  );
  // const currentUserLoadable = useRecoilValueLoadable(userData);
  // const currentUserLoadable = useRecoilValueLoadable(userData(currentUserID));

  const [currentCount, setCount] = useRecoilState(count);
  const changeUser = useCallback((id: number) => {
    setCurrentUserId(id);
  }, []);
  // example of pre-fetching data
  // const changeUser = useRecoilCallback(
  //   ({ snapshot, set }) =>
  //     (userID: number) => {
  //       snapshot.getLoadable(userData(currentUserID)); // pre-fetch user info
  //       set(currentUserId, userID); // change current user to start new render
  //     }
  // );
  return (
    <section className={styles.root} suppressHydrationWarning>
      <h2>Users</h2>
      <div className={styles.buttons}>
        <button onClick={() => setCount(currentCount + 1)}>Refresh User</button>
        <button onClick={() => changeUser(1)} value="1">
          User 1
        </button>
        <button onClick={() => changeUser(2)} value="2">
          User 2
        </button>
        <button onClick={() => changeUser(3)} value="3">
          User 3
        </button>
      </div>
      <ClientOnly>
        {currentUserLoadable.state === "loading" ? null : (
          <>
            <h3>User Info</h3>
            <p>Name: {currentUserLoadable.contents.name}</p>
            <p>Username: {currentUserLoadable.contents.username}</p>
            <p>Phone number: {currentUserLoadable.contents.phone}</p>
          </>
        )}
      </ClientOnly>
    </section>
  );
};

export default Main;
