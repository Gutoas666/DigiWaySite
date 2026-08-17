import estilos from "./NovoUsuario.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalMensagem } from "../componentes/ModalMensagem";
import { type UsuarioTipo } from "../tipos/Usuario";
import { LayoutContexto } from "../contextos/LayoutContexto";
import { useAutenticacao } from "../hooks/useAutenticacao";

import fundo from "../assets/imagens/estudando.png";
import logo from "../assets/imagens/image.png";

type FormValues = {
  nome: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  senha: string;
  confirmaSenha: string;
};

const loginSchema = z
  .object({
    nome: z
      .string()
      .min(3, { message: "Informe seu nome." })
      .max(25, { message: "Máximo de 25 caracteres." }),

    dataNascimento: z
      .string()
      .min(1, { message: "Informe sua data de nascimento." }),

    telefone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, {
      message: "Informe um telefone válido.",
    }),

    email: z.email({
      message: "Informe um e-mail válido.",
    }),

    senha: z.string().length(6, {
      message: "Informe uma senha com 6 caracteres.",
    }),

    confirmaSenha: z.string().length(6, {
      message: "Informe a mesma senha.",
    }),
  })
  .refine((data) => data.senha === data.confirmaSenha, {
    message: "As senhas não conferem.",
    path: ["confirmaSenha"],
  });

const formatarTelefone = (valor: string): string => {
  const apenasNumeros = valor.replace(/\D/g, "");

  if (apenasNumeros.length <= 2) {
    return apenasNumeros;
  } else if (apenasNumeros.length <= 6) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
  } else if (apenasNumeros.length <= 10) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
  }

  return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
};

export function NovoUsuario() {
  const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false);
  const [modalMensagemTitulo, setModalMensagemTitulo] = useState("");
  const [modalMensagemTexto, setModalMensagemTexto] = useState("");

  const exibirModal = () => {
    setModalMensagemTitulo("Novo usuário");
    setModalMensagemVisivel(true);
  };

  const ocultarModal = () => {
    setModalMensagemVisivel(false);
    navegacao(-1);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  const navegacao = useNavigate();

  const { setNomeUsuarioContexto } = useContext(LayoutContexto);

  const { criarAutenticacaoUsuario } = useAutenticacao();

  const dadosUsuario: UsuarioTipo = {
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    senha: "",
  };

  const adicionarUsuario = async (data: FormValues) => {
    dadosUsuario.nome = data.nome;
    dadosUsuario.dataNascimento = data.dataNascimento;
    dadosUsuario.telefone = data.telefone;
    dadosUsuario.email = data.email;
    dadosUsuario.senha = data.senha;

    const retorno = await criarAutenticacaoUsuario(
      dadosUsuario.email,
      dadosUsuario.senha,
    );

    if (retorno == "sucesso") {
      setNomeUsuarioContexto(dadosUsuario.nome);

      setModalMensagemTexto(`Seja bem-vindo(a) ${dadosUsuario.nome}!`);
    } else {
      setModalMensagemTexto(retorno);
    }

    exibirModal();
  };

  return (
    <div className={estilos.conteiner}>
      <div>
        <img className={estilos.imagem} src={fundo} alt="Fundo" />
      </div>
      <img className={estilos.logo} src={logo} alt="Logo" />

      <form
        className={estilos.formulario}
        onSubmit={handleSubmit(adicionarUsuario)}
      >
        <h1 className={estilos.subTitulo}>Cadastre-se</h1>

        <input
          {...register("nome")}
          className={estilos.campo}
          placeholder="Nome"
        />
        {errors.nome && (
          <p className={estilos.mensagem}>{errors.nome.message}</p>
        )}

        <input
          {...register("dataNascimento")}
          className={estilos.campo}
          type="date"
        />
        {errors.dataNascimento && (
          <p className={estilos.mensagem}>{errors.dataNascimento.message}</p>
        )}

        <input
          {...register("email")}
          className={estilos.campo}
          placeholder="E-mail"
        />
        {errors.email && (
          <p className={estilos.mensagem}>{errors.email.message}</p>
        )}

        <input
          {...register("telefone")}
          className={estilos.campo}
          placeholder="Telefone"
          type="tel"
          maxLength={15}
          onChange={(e) => {
            const formatado = formatarTelefone(e.target.value);

            setValue("telefone", formatado, {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
        />
        {errors.telefone && (
          <p className={estilos.mensagem}>{errors.telefone.message}</p>
        )}

        <input
          {...register("senha")}
          className={estilos.campo}
          placeholder="Senha"
          type="password"
        />
        {errors.senha && (
          <p className={estilos.mensagem}>{errors.senha.message}</p>
        )}

        <input
          {...register("confirmaSenha")}
          className={estilos.campo}
          placeholder="Confirmar senha"
          type="password"
        />
        {errors.confirmaSenha && (
          <p className={estilos.mensagem}>{errors.confirmaSenha.message}</p>
        )}

        <button className={estilos.botao} type="submit">
          <FaUserPlus className={estilos.icone} />
          Cadastrar
        </button>
      </form>

      <ModalMensagem
        exibir={modalMensagemVisivel}
        ocultar={ocultarModal}
        titulo={modalMensagemTitulo}
        texto={modalMensagemTexto}
      />
    </div>
  );
}
