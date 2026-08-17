import { useState } from 'react'
import estilos from './Cursos.module.css'

type Curso = {
    id: number
    titulo: string
    categoria: string
    nivel: string
    duracao: string
    descricao: string
}

const cursos: Curso[] = [
    { id: 1, titulo: 'Fundamentos da Informática', categoria: 'Base', nivel: 'Iniciante', duracao: '4 semanas', descricao: 'Aprenda os conceitos básicos de computador, navegador e arquivos.' },
    { id: 2, titulo: 'Navegação Segura na Web', categoria: 'Segurança', nivel: 'Iniciante', duracao: '3 semanas', descricao: 'Entenda como navegar com mais segurança e evitar golpes online.' },
    { id: 3, titulo: 'E-mails e Comunicação Digital', categoria: 'Produtividade', nivel: 'Iniciante', duracao: '4 semanas', descricao: 'Domine e-mails, mensagens e organização digital do dia a dia.' },
    { id: 4, titulo: 'Aplicativos de Mensagem', categoria: 'Aplicativos', nivel: 'Iniciante', duracao: '3 semanas', descricao: 'Use WhatsApp e outros apps para se comunicar com facilidade.' },
    { id: 5, titulo: 'Introdução ao Google Workspace', categoria: 'Produtividade', nivel: 'Básico', duracao: '5 semanas', descricao: 'Conheça documentos, planilhas e ferramentas online do Google.' },
    { id: 6, titulo: 'Trabalhando com Fotos e Imagens', categoria: 'Criatividade', nivel: 'Básico', duracao: '4 semanas', descricao: 'Aprenda a visualizar, editar e organizar imagens com segurança.' },
    { id: 7, titulo: 'Uso de Redes Sociais', categoria: 'Comunicação', nivel: 'Básico', duracao: '3 semanas', descricao: 'Explore redes sociais de forma consciente e prática.' },
    { id: 8, titulo: 'Pagamentos Digitais', categoria: 'Financeiro', nivel: 'Básico', duracao: '4 semanas', descricao: 'Entenda pagamentos online, boletos e transações seguras.' },
    { id: 9, titulo: 'Online Banking para Iniciantes', categoria: 'Financeiro', nivel: 'Básico', duracao: '4 semanas', descricao: 'Aprenda a usar bancos digitais e consultar contas online.' },
    { id: 10, titulo: 'Segurança para Celular', categoria: 'Segurança', nivel: 'Básico', duracao: '3 semanas', descricao: 'Proteja seu aparelho com senhas, biometria e atualizações.' },
    { id: 11, titulo: 'Organização de Arquivos', categoria: 'Produtividade', nivel: 'Básico', duracao: '3 semanas', descricao: 'Mantenha documentos e fotos em ordem com boas práticas.' },
    { id: 12, titulo: 'Introdução à Saúde Digital', categoria: 'Bem-estar', nivel: 'Básico', duracao: '3 semanas', descricao: 'Aprenda a usar informações médicas e agendamentos online.' },
    { id: 13, titulo: 'Acesso a Serviços Públicos', categoria: 'Cidadania', nivel: 'Básico', duracao: '4 semanas', descricao: 'Descubra como acessar documentos e serviços digitais do governo.' },
    { id: 14, titulo: 'Uso de Videoconferência', categoria: 'Comunicação', nivel: 'Básico', duracao: '3 semanas', descricao: 'Participe de reuniões online com mais confiança e clareza.' },
    { id: 15, titulo: 'Como Ler Conteúdo Online', categoria: 'Leitura', nivel: 'Básico', duracao: '3 semanas', descricao: 'Desenvolva hábitos de leitura e interpretação de textos digitais.' },
    { id: 16, titulo: 'Educação Financeira Digital', categoria: 'Financeiro', nivel: 'Intermediário', duracao: '5 semanas', descricao: 'Aprenda a controlar despesas, contas e compras digitais.' },
    { id: 17, titulo: 'Introdução à IA para Iniciantes', categoria: 'Tecnologia', nivel: 'Básico', duracao: '4 semanas', descricao: 'Conheça ferramentas de inteligência artificial de forma simples.' },
    { id: 18, titulo: 'Uso de Assistentes Virtuais', categoria: 'Tecnologia', nivel: 'Básico', duracao: '3 semanas', descricao: 'Descubra como pedir ajuda a assistentes por voz e texto.' },
    { id: 19, titulo: 'Planejamento de Estudos Online', categoria: 'Aprendizado', nivel: 'Básico', duracao: '4 semanas', descricao: 'Organize sua rotina de estudos com recursos digitais.' },
    { id: 20, titulo: 'Primeiros Passos com Tablets', categoria: 'Dispositivos', nivel: 'Iniciante', duracao: '4 semanas', descricao: 'Aprenda a usar tablets e aplicativos de forma intuitiva.' },
]

export function Cursos() {
    const [cursoSelecionado, setCursoSelecionado] = useState<Curso | null>(cursos[0])

    return (
        <div className={estilos.container}>
            <section className={estilos.hero}>
                <div className={estilos.textoHero}>
                    <p className={estilos.rotulo}>Catálogo de cursos</p>
                    <h1>Escolha um caminho de aprendizado</h1>
                    <p className={estilos.subtitulo}>
                        O DigiWay reúne 20 opções de cursos pensadas para facilitar o acesso à tecnologia.
                        Cada opção estará conectada a uma API para atribuição da função correspondente ao perfil do usuário.
                    </p>
                </div>

                <div className={estilos.resumoSelecionado}>
                    <h2>{cursoSelecionado?.titulo ?? 'Selecione um curso'}</h2>
                    <p>
                        {cursoSelecionado?.descricao ?? 'Escolha uma opção para ver os detalhes e a proposta do curso.'}
                    </p>
                    <span>Integração futura com API</span>
                </div>
            </section>

            <section className={estilos.grade}>
                {cursos.map((curso) => (
                    <button
                        key={curso.id}
                        type="button"
                        className={`${estilos.cartao} ${cursoSelecionado?.id === curso.id ? estilos.cartaoSelecionado : ''}`}
                        onClick={() => setCursoSelecionado(curso)}
                    >
                        <div className={estilos.cabecalhoCartao}>
                            <span className={estilos.categoria}>{curso.categoria}</span>
                            <span className={estilos.nivel}>{curso.nivel}</span>
                        </div>
                        <h3>{curso.titulo}</h3>
                        <p>{curso.descricao}</p>
                        <div className={estilos.rodapeCartao}>
                            <span>{curso.duracao}</span>
                            <span className={estilos.apiTexto}>API para atribuição da função</span>
                        </div>
                    </button>
                ))}
            </section>
        </div>
    )
}