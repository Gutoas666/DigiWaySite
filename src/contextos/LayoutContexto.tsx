import { createContext, useState } from "react";
import { type ReactNode } from "react";

interface LayoutProviderProps {
  children: ReactNode;
}

interface LayoutTipoContexto {
  menuAbertoContexto: boolean;
  emailUsuarioContexto: string;
  nomeUsuarioContexto: string;
  setMenuAbertoContexto: (menu: boolean) => void;
  setEmailUsuarioContexto: (email: string) => void;
  setNomeUsuarioContexto: (nome: string) => void;
}

export const LayoutContexto = createContext<LayoutTipoContexto>({
  menuAbertoContexto: false,
  emailUsuarioContexto: "",
  nomeUsuarioContexto: "",
  setMenuAbertoContexto: () => {},
  setEmailUsuarioContexto: () => {},
  setNomeUsuarioContexto: () => {},
});

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [menuAbertoContexto, setMenuAbertoContexto] = useState(false);
  const [emailUsuarioContexto, setEmailUsuarioContexto] = useState("");
  const [nomeUsuarioContexto, setNomeUsuarioContexto] = useState("");

  return (
    <LayoutContexto.Provider
      value={{
        menuAbertoContexto,
        setMenuAbertoContexto,
        emailUsuarioContexto,
        setEmailUsuarioContexto,
        nomeUsuarioContexto,
        setNomeUsuarioContexto,
      }}
    >
      {children}
    </LayoutContexto.Provider>
  );
};
