import { useAuth } from "../context/AuthContext";

export default function WelcomeMessage() {
  const { state } = useAuth();
  return <p>Welcome, {state.user}!</p>;
}
