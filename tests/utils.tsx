import {
  renderHook,
  render,
  waitFor as waitForTLR,
} from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderHookWithProvider = (hook: () => any) => {
  return renderHook(hook, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    ),
  });
};

export const renderWithProvider = (component: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

export const waitFor = async (condition: () => boolean) => {
  await waitForTLR(() => {
    if (!condition()) {
      throw new Error("Condition not met");
    }
  });
};
