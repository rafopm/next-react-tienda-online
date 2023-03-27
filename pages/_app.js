import "@/styles/globals.css";
import StateWrapper from "../components/";

export default function App({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}
