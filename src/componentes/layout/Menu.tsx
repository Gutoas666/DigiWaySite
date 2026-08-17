import estilos from './Menu.module.css'
import { useContext } from 'react'
import { Link, useLocation, useNavigate} from'react-router-dom'
import { LayoutContexto } from '../../contextos/LayoutContexto'
import { IoHomeSharp, IoPersonSharp } from "react-icons/io5";
import { useAutenticacao } from '../../hooks/useAutenticacao'
import { BsFillMenuButtonWideFill, BsFillMenuButtonFill  } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";

export function Menu(){

    const location = useLocation()

    const { menuAbertoContexto, setMenuAbertoContexto } = useContext(LayoutContexto)

    const controlarMenu = () => setMenuAbertoContexto(!menuAbertoContexto)

    const navegacao = useNavigate()

    const {deslogar} = useAutenticacao()

    const sair = async () =>{
        await deslogar()
        navegacao('/')
    }

    return(
        <aside
            className={estilos.conteiner}
            style={{ width: menuAbertoContexto ? '175px' : '70px' }}
        >
            <button
                className={estilos.botaoMenu}
                onClick={controlarMenu}
            >
                { menuAbertoContexto ? <BsFillMenuButtonWideFill size={32} /> : <BsFillMenuButtonFill size={32} /> }
            </button>

            <nav 
                className={estilos.itemConteiner}
            >

                <Link
                    className={estilos.item}
                    style={{
                        color: location.pathname === '/principal/home' 
                               ? 'var(--cor-primaria-clara)' 
                               : 'var(--cor-secundaria-clara)'
                    }}
                    to='/principal/home'               
                >
                    <IoHomeSharp 
                        size={28}
                    />
                    {menuAbertoContexto && <span className={estilos.rotulo}>Inicial</span>}              
                </Link>

                <Link
                    className={estilos.item}
                    style={{
                        color: location.pathname === '/principal/cursos' 
                               ? 'var(--cor-primaria-clara)' 
                               : 'var(--cor-secundaria-clara)'
                    }}
                    to='cursos'               
                >
                    <GiBookshelf 
                        size={28}
                    />
                    {menuAbertoContexto && <span className={estilos.rotulo}>Cursos</span>}              
                </Link>

                <Link
                    className={estilos.item}
                    style={{
                        color: location.pathname === '/principal/perfil' 
                               ? 'var(--cor-primaria-clara)' 
                               : 'var(--cor-secundaria-clara)'
                    }}
                    to='perfil'               
                >
                    <IoPersonSharp 
                        size={28}
                    />
                    {menuAbertoContexto && <span className={estilos.rotulo}>Perfil</span>}              
                </Link>                

                <Link
                    className={estilos.item}
                    to='/'               
                >
                    <IoIosLogOut 
                        size={28}
                        color='var(--cor-secundaria-clara)'
                    />
                    {menuAbertoContexto && <span className={estilos.rotulo}>Sair</span>}              
                </Link>

            </nav>
        </aside>
    )
}