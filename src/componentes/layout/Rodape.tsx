import estilos from './Rodape.module.css'

export function Rodape(){
    return(
        <footer className={estilos.conteiner}>
            <p className={estilos.titulo}>© 2025 DigiWay — Projeto de TCC · Etec de Hortolândia · Todos os direitos reservados.</p>
        </footer>
    )
}