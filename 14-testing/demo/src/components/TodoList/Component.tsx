import { useContext } from "react";
import { context } from "./MyContext";
export default function MyComponent() {
  const { value } = useContext(context);
  return <div>{value}</div>;
}
