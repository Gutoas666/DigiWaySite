import estilos from './Login.module.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImEnter } from 'react-icons/im'
import { FaUserPlus } from 'react-icons/fa'
import { LayoutContexto } from '../contextos/LayoutContexto'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { type UsuarioTipo } from '../tipos/Usuario'
import { useAutenticacao } from '../hooks/useAutenticacao'
import { ModalMensagem } from '../componentes/ModalMensagem'
import { useState } from 'react'

import logo from '../assets/imagens/image.png'

type FormValues = {
    email: string
    senha: string
}

const loginSchema = z.object({

    email: z.email({ message: 'Informe um e-mail válido.' }),

    senha: z.string()
        .length(6, { message: 'Informe uma senha com 6 caracteres.' })
})

export function Login() {

    const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false)
    const [modalMensagemTitulo, setModalMensagemTitulo] = useState('')
    const [modalMensagemTexto, setModalMensagemTexto] = useState('')

    const { setEmailUsuarioContexto } = useContext(LayoutContexto)


    const exibirModal = () => {
        setModalMensagemTitulo('Identidicação')
        setModalMensagemVisivel(true)
    }

    const ocultarModal = () => {
        setModalMensagemVisivel(false)
    }

    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FormValues>(
        { resolver: zodResolver(loginSchema) }
    )

    const navegacao = useNavigate()

    const dadosUsuario: UsuarioTipo = {
        nome: '',
        email: '',
        senha: '',
        dataNascimento: '',
        telefone: ''
    }

    const { validarUsuario } = useAutenticacao()

    const autenticarUsuario = async (data: FormValues) => {

        dadosUsuario.email = data.email
        dadosUsuario.senha = data.senha

        let retorno = await validarUsuario(dadosUsuario.email, dadosUsuario.senha)

        if (retorno == 'sucesso') {

            setEmailUsuarioContexto(dadosUsuario.email)
            navegacao('/principal/home')

        } else {
            
            setModalMensagemTexto(retorno)
            exibirModal()
        }

    }

    const novoUsuario = () => {
        navegacao('usuario')
    }

    return (
        <div className={estilos.conteiner}>
            <img
                className={estilos.logo}
                src={logo}
                alt='Logo do Cinefilia'
            />
            <form
                className={estilos.formulario}
                onSubmit={handleSubmit(autenticarUsuario)}
            >

                <input
                    {...register('email')}
                    className={estilos.campo}
                    placeholder='E-mail'
                />
                {errors.email && <p className={estilos.mensagem}>{errors.email.message}</p>}

                <input
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder='Senha'
                    type='password'
                />
                {errors.senha && <p className={estilos.mensagem}>{errors.senha.message}</p>}

                <button
                    className={estilos.botao}
                >
                    <ImEnter className={estilos.icone} />
                    Entrar
                </button>

            </form>

            <button
                className={estilos.novoUsuario}
                onClick={novoUsuario}
            >
                <FaUserPlus className={estilos.icone} />
                Cadastre-se
            </button>



            <ModalMensagem
                exibir={modalMensagemVisivel}
                ocultar={() => ocultarModal()}
                titulo={modalMensagemTitulo}
                texto={modalMensagemTexto}
            />
        </div>
    )
}
