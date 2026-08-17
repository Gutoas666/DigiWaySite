import estilos from "./Perfil.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserEdit } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalMensagem } from "../componentes/ModalMensagem";
import { type UsuarioTipo } from "../tipos/Usuario";

type FormValues = UsuarioTipo;

const perfilSchema = z.object({
  nome: z
    .string()
    .min(2, "Mínimo de 2 caracteres.")
    .max(25, "Máximo de 25 caracteres."),
  dataNascimento: z.string().min(1, "Informe a data de nascimento."),
  telefone: z.string().regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, {
    message: "Informe um telefone válido.",
  }),
  email: z.email({ message: "Informe um e-mail válido." }),
  senha: z.string().length(6, { message: "Informe uma senha com 6 caracteres." }),
});

const formatarTelefone = (valor: string): string => {
  const apenasNumeros = valor.replace(/\D/g, "");

  if (apenasNumeros.length <= 2) {
    return apenasNumeros;
  }

  if (apenasNumeros.length <= 6) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
  }

  if (apenasNumeros.length <= 10) {
    return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 6)}-${apenasNumeros.slice(6)}`;
  }

  return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
};

export function Perfil() {
  const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false);
  const [modalMensagemTitulo, setModalMensagemTitulo] = useState("");
  const [modalMensagemTexto, setModalMensagemTexto] = useState("");

  const exibirModal = () => {
    setModalMensagemTitulo("Perfil");
    setModalMensagemVisivel(true);
  };

  const ocultarModal = () => {
    setModalMensagemVisivel(false);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(perfilSchema),
  });

  const modificarUsuario = (data: FormValues) => {
    setModalMensagemTexto(`Seus dados foram atualizados com sucesso, ${data.nome}!`);
    exibirModal();
  };

  return (
    <main className={estilos.conteiner}>
      <section className={estilos.cardPerfil}>
        <div className={estilos.cabecalho}>
          <p className={estilos.rotulo}>Meu perfil</p>
          <h1 className={estilos.titulo}>Atualize suas informações</h1>
          <p className={estilos.subtitulo}>
            Mantenha seus dados organizados e prontos para usar no DigiWay.
          </p>
        </div>

        <form className={estilos.formulario} onSubmit={handleSubmit(modificarUsuario)}>
          <input {...register("nome")} className={estilos.campo} placeholder="Nome" />
          {errors.nome && <p className={estilos.mensagem}>{errors.nome.message}</p>}

          <input {...register("dataNascimento")} className={estilos.campo} type="date" />
          {errors.dataNascimento && (
            <p className={estilos.mensagem}>{errors.dataNascimento.message}</p>
          )}

          <input
            {...register("telefone")}
            className={estilos.campo}
            placeholder="Telefone"
            type="tel"
            maxLength={15}
            onChange={(event) => {
              const formatado = formatarTelefone(event.target.value);

              setValue("telefone", formatado, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
          />
          {errors.telefone && <p className={estilos.mensagem}>{errors.telefone.message}</p>}

          <input {...register("email")} className={estilos.campo} placeholder="E-mail" />
          {errors.email && <p className={estilos.mensagem}>{errors.email.message}</p>}

          <input
            {...register("senha")}
            className={estilos.campo}
            placeholder="Senha"
            type="password"
          />
          {errors.senha && <p className={estilos.mensagem}>{errors.senha.message}</p>}

          <button className={estilos.botao} type="submit">
            <FaUserEdit className={estilos.icone} />
            Salvar alterações
          </button>
        </form>
      </section>

      <ModalMensagem
        exibir={modalMensagemVisivel}
        ocultar={ocultarModal}
        titulo={modalMensagemTitulo}
        texto={modalMensagemTexto}
      />
    </main>
  );
}