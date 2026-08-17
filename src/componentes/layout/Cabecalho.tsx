import estilos from "./Cabecalho.module.css";
import { useContext } from "react";
import { LayoutContexto } from "../../contextos/LayoutContexto";

import logo from "../../assets/imagens/image.png";

const mensagemBoasVindas = (nomeUsuario: string) => {
  if (nomeUsuario) {
    return `Olá, ${nomeUsuario}!`;
    } else {
    return "Precisa da implementação ao firebase.";
  }
};
export function Cabecalho() {
    const { nomeUsuarioContexto } = useContext(LayoutContexto);
  return (
    <header className={estilos.conteiner}>
      <img src={logo} alt="Logo" className={estilos.logo} />

    <h1 className={estilos.usuario}>{mensagemBoasVindas(nomeUsuarioContexto)}</h1>
    </header>
  );
}
