import AppContext from "@/components/AppContext";
import { useContext } from "react";

export default function Home() {
  const context = useContext(AppContext);
  return <h1>{context.nameContext}</h1>;
}
