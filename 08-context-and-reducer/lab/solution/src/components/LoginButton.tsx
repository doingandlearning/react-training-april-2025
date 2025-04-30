import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { logoutUser } = useAuth();
  return <button onClick={logoutUser}>Log Out</button>;
}
