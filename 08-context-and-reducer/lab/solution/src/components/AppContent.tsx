import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import LogoutButton from "./LoginButton";
import LoginForm from "./LoginForm";
import WelcomeMessage from "./WelcomeMessage";

export default function AppContent() {
  const { state, loginUser } = useAuth();

  useEffect(() => {
    const user = window.localStorage.getItem("user")
    if (!user) return
    const userObj = JSON.parse(user)
    if (userObj.user) {
      console.log(user)
      loginUser(userObj.user)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(state))
  }, [state.user])

  return state.loggedIn ? (
    <>
      <WelcomeMessage />
      <LogoutButton />
    </>
  ) : (
    <LoginForm />
  );
}
