import { useAuth } from "../context/AuthContext"

export default function LoginForm() {
  const { loginUser } = useAuth();
  return (
    <button onClick={() => loginUser("Alice")}>
      Log In
    </button>
  );
}