import { createContext, useContext, useReducer } from "react";

// Context + Reducer Setup
type AuthState = { loggedIn: boolean; user: string | null };
type Action = { type: "LOGIN"; user: string } | { type: "LOGOUT" };

const initialState: AuthState = { loggedIn: false, user: null };

function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true, user: action.user };
    case "LOGOUT":
      return { loggedIn: false, user: null };
    default:
      return state;
  }
}

const AuthContext = createContext<{ state: AuthState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used inside AuthProvider");
//   return context;
// }


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  const { state, dispatch } = context


  function loginUser(user: string) {
    dispatch({ type: "LOGIN", user })
  }

  function logoutUser() {
    dispatch({ type: "LOGOUT" })
  }

  return { state, loginUser, logoutUser }
}
