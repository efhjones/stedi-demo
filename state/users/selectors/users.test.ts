import { selectorFamily, snapshot_UNSTABLE } from "recoil";
import userData from "./users";
import userDataLowercase from "./userDataLowercase";
type MockTargetFunction = (...args: any[]) => any;

/**
 * Cast an imported function whose module we've mocked using jest.mock to be typed as such.
 */
export const mock = <T extends MockTargetFunction>(target: T) =>
  target as jest.MockedFunction<typeof target>;

jest.mock("./users");

const mockUserDataImplementation = selectorFamily({
  key: "authenticationState",
  get: () => async () => {
    return {
      name: "Harry Potter",
    };
  },
});

const mockUserData = mock(userData);

describe("userDataLowercase", () => {
  beforeAll(() => {
    mockUserData.mockImplementation(mockUserDataImplementation);
  });
  it("returns the lowercase name", async () => {
    const initialSnapshot = snapshot_UNSTABLE();
    await expect(
      initialSnapshot.getPromise(userDataLowercase(1))
    ).resolves.toEqual({ name: "harry potter" });
  });
});
