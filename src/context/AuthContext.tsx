// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  username: string;
  email: string;
  city?: string;
  state?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (data: {
    username: string;
    email: string;
    password: string;
    city: string;
    state: string;
  }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("tachos-user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = (email: string, password: string) => {
    const fakeUser: User = {
      id: Date.now().toString(),
      username: email.split("@")[0],
      email,
    };
    setUser(fakeUser);
    localStorage.setItem("tachos-user", JSON.stringify(fakeUser));
  };

  const register = (data: {
    username: string;
    email: string;
    password: string;
    city: string;
    state: string;
  }) => {
    const newUser: User = {
      id: Date.now().toString(),
      username: data.username,
      email: data.email,
      city: data.city,
      state: data.state,
    };
    setUser(newUser);
    localStorage.setItem("tachos-user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("tachos-user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar en cualquier componente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};