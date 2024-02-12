import { createContext, useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";

// context creation only!
export const AuthContext = createContext(null);

// children are part of React
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const handleCredentialResponse = useCallback((response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwtDecode(response.credential);

    // You can send the token to the server here for verification
    fetch(`http://localhost:3001/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: response.credential }),
    }).then((response) => {
      //save user to db + create JWT to the client
      setUser(userObject);
    });
  }, []);

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "320088642168-8rmjpa3oe8bhad8bhm089vhsndm1mojd.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "medium" }
    );
  }, [handleCredentialResponse]);

  const signOut = () => {
    setUser(null);
  };

  const value = {
    user,
    signOut,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
