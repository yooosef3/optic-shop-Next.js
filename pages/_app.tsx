import "@/styles/globals.css";

import { persistor, store } from "../components/redux/store";

import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import ProductsContextProvider from "../components/products/ProductsContextProvider";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProductsContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProductsContextProvider>
      </PersistGate>
    </Provider>
  );
}
