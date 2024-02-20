import { test, expect, afterEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useIsOnline } from "../src/components/useIsOnline";

const defineNavigatorOnline = (value?: boolean) => {
  vi.stubGlobal("navigator", { onLine: value });
};

afterEach(() => {
  defineNavigatorOnline(undefined);
});

test("returns true when online", () => {
  defineNavigatorOnline(true);
  const { result } = renderHook(() => useIsOnline());
  expect(result.current).toBe(true);
});

test("returns false when offline", () => {
  defineNavigatorOnline(false);
  const { result } = renderHook(() => useIsOnline());
  expect(result.current).toBe(false);
});
