import Layout from "../components/Layout";
import "../styles/globals.css";
import { MainContextProvider } from "../context/Main";

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContextProvider>
  );
}

export default MyApp;
