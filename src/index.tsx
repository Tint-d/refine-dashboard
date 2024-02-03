import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

const queryClient = new QueryClient();

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RefineKbarProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RefineKbarProvider>
  </React.StrictMode>
);
