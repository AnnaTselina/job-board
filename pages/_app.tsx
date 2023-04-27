import MainLayout from "../components/main-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;
