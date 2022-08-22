import { ReactNode } from "react";

import { TechProvider } from "./TechContext";
import { UserProvider } from "./UserContext";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <UserProvider>
    <TechProvider>{children}</TechProvider>
  </UserProvider>
);

export default Provider;
