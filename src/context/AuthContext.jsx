import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { loadToken } from "../api/client";
import { fetchMe, login as loginRequest, logout as logoutRequest } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadAdmin = useCallback(async () => {
    if (!loadToken()) {
      setAdmin(null);
      setIsLoading(false);
      return;
    }
    try {
      const me = await fetchMe();
      setAdmin(me);
    } catch {
      setAdmin(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAdmin();
  }, [loadAdmin]);

  const login = useCallback(async (email, password) => {
    const loggedInAdmin = await loginRequest(email, password);
    setAdmin(loggedInAdmin);
  }, []);

  const logout = useCallback(() => {
    logoutRequest();
    setAdmin(null);
  }, []);

  return (
    <AuthContext.Provider value={{ admin, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
