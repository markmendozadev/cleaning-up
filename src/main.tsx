import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./app-config/store.ts";

const BASE_PATH = "";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter basename={BASE_PATH}>
    <StoreProvider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
