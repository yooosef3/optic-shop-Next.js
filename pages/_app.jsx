import "@/styles/globals.css";

import { persistor, store } from "../components/redux/store";

import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import ProductsContextProvider from "../components/products/ProductsContextProvider";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProductsContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ProductsContextProvider>
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
}
