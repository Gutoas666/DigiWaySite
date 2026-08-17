import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { autenticacao } from "../firebase/FirebaseConexao";

export function useAutenticacao() {
  const criarAutenticacaoUsuario = async (
    email: string,
    senha: string
  ): Promise<string> => {
    let retorno = "sucesso";

    try {
      await createUserWithEmailAndPassword(autenticacao, email, senha);
    } catch (error) {
      if (error instanceof FirebaseError) {
        retorno = error.code;
      } else {
        retorno = `${error}`;
      }
    }

    return retorno;
  };

  const validarUsuario = async (
    email: string,
    senha: string
  ): Promise<string> => {
    let retorno = "sucesso";

    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
    } catch (error) {
      if (error instanceof FirebaseError) {
        retorno = error.code;
      } else {
        retorno = `${error}`;
      }
    }

    return retorno;
  };

  const deslogar = async (): Promise<string> => {
    let retorno = "sucesso";

    try {
      await signOut(autenticacao);
    } catch (error) {
      if (error instanceof FirebaseError) {
        retorno = error.code;
      } else {
        retorno = `${error}`;
      }
    }

    return retorno;
  };

  return {
    criarAutenticacaoUsuario,
    validarUsuario,
    deslogar,
  };
}