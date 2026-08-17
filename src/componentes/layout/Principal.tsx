import estilos from './Principal.module.css'
import { useContext } from 'react'
import { Cabecalho } from './Cabecalho'
import { Menu } from './Menu'
import { Rodape } from './Rodape'
import { Outlet } from 'react-router-dom'
import { LayoutContexto } from '../../contextos/LayoutContexto'

export function Principal(){

    const { menuAbertoContexto } = useContext(LayoutContexto)

    return(
        <div 
            className={estilos.gridConteiner}
            style={{ gridTemplateColumns: menuAbertoContexto ? '175px 1fr' : '70px 1fr' }}
        >
            <Cabecalho />
            <Menu />
            <Outlet />
            <Rodape />
        </div>
    )
}