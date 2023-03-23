import "@/styles/globals.css";
import StateWrapper from "../components/StateWrapper";

export default function App({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}
