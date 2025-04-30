import { useAuth } from "../context/AuthContext"

export default function LoginForm() {
  const { dispatch } = useAuth();
  return (
    <button onClick={() => dispatch({ type: "LOGIN", user: "Alice" })}>
      Log In
    </button>
  );
}