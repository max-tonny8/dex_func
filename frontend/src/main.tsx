import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { config } from "./wagmi/config.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Web3Provider } from "./wagmi/Web3Provider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Web3Provider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Web3Provider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
