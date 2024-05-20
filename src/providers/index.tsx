import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "../theme/theme.json";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../utils/fallbacks";
import { Provider } from "react-redux";
import { persistor, store } from "../app/store";

type ProviderProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfigProvider theme={Theme} componentSize="middle">
            <Router>{children}</Router>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default Providers;
