import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { dispatch } = useAuth();
  return <button onClick={() => dispatch({ type: "LOGOUT" })}>Log Out</button>;
}
