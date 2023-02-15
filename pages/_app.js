import { useState, createContext } from "react";
import AppContext from "@/components/AppContext";

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("default");
  return (
    <AppContext.Provider value={{ nameContext, setNameContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
