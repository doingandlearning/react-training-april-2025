import { useAuth } from "../context/AuthContext";
import LogoutButton from "./LoginButton";
import LoginForm from "./LoginForm";
import WelcomeMessage from "./WelcomeMessage";

export default function AppContent() {
  const { state } = useAuth();
  return state.loggedIn ? (
    <>
      <WelcomeMessage />
      <LogoutButton />
    </>
  ) : (
    <LoginForm />
  );
}
