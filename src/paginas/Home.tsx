import estilos from './Home.module.css'

import fotoL from '../assets/imagens/leandro.jpeg'
import fotoLeo from '../assets/imagens/leonardo.jpg'
import fotoG from '../assets/imagens/gustavo.jpg'
import fotoF from '../assets/imagens/fumaca.jpg'

type Passo = {
    icone: string
    titulo: string
    texto: string
}

type Membro = {
    foto: string
    nome: string
    cargo: string
    descricao: string
}

type Valor = {
    titulo: string
    texto: string
}

const passos: Passo[] = [
    {
        icone: '🔍',
        titulo: 'Identifique sua dúvida',
        texto: 'Encontre facilmente o tema que precisa aprender, organizado em categorias visuais e intuitivas.',
    },
    {
        icone: '📖',
        titulo: 'Aprenda no seu ritmo',
        texto: 'Tutoriais em linguagem simples, com imagens e passo a passo adaptados para iniciantes.',
    },
    {
        icone: '✅',
        titulo: 'Pratique com segurança',
        texto: 'Exercícios práticos para fixar o aprendizado sem medo de errar ou perder dados.',
    },
    {
        icone: '🌐',
        titulo: 'Explore o digital',
        texto: 'Com confiança adquirida, o usuário passa a usar serviços, apps e internet de forma independente.',
    },
]

const membros: Membro[] = [
    {
        foto: fotoG,
        nome: 'Gustavo T',
        cargo: 'Dev & Documentação',
        descricao: 'Responsável pelo desenvolvimento e pela documentação técnica do projeto.',
    },
    {
        foto: fotoF,
        nome: 'Victor Felipe',
        cargo: 'Design & UX',
        descricao: 'Cuida da experiência do usuário e da identidade visual do aplicativo.',
    },
    {
        foto: fotoLeo,
        nome: 'Leonardo Prates',
        cargo: 'Back-end & Banco de Dados',
        descricao: 'Desenvolve a lógica de negócio e a estrutura de dados da aplicação.',
    },
    {
        foto: fotoL,
        nome: 'Leandro Amorim',
        cargo: 'Pesquisa & Conteúdo',
        descricao: 'Responsável pela pesquisa bibliográfica e pelo conteúdo educacional do app.',
    },
]

const valores: Valor[] = [
    {
        titulo: 'Acessibilidade acima de tudo',
        texto: 'Todo elemento do DigiWay é pensado para ser compreendido por qualquer pessoa, em qualquer contexto.',
    },
    {
        titulo: 'Empatia no design',
        texto: 'Desenvolvemos olhando para o usuário, não para a tecnologia. A experiência começa com escuta ativa.',
    },
    {
        titulo: 'Aprendizado progressivo',
        texto: 'Respeitamos o ritmo de cada pessoa, evoluindo o conteúdo conforme a confiança do usuário cresce.',
    },
    {
        titulo: 'Impacto social real',
        texto: 'Não queremos apenas um app funcionando — queremos que pessoas reais se sintam incluídas no mundo digital.',
    },
    {
        titulo: 'Gratuidade e abertura',
        texto: 'Acesso a informação de qualidade não deve depender de condição financeira.',
    },
    {
        titulo: 'Linguagem humana',
        texto: 'Zero jargão técnico. Falamos como pessoas, porque nossos usuários são pessoas.',
    },
]

export function Home() {
    return (
        <div className={estilos.pagina}>

            <main>
                <section className={estilos.heroPrincipal}>
                    <div className={estilos.rotuloHero}>Sobre o projeto</div>
                    <h1>
                        Tecnologia que <em>inclui</em> quem ficou para trás
                    </h1>
                    <p className={estilos.subtituloHero}>
                        O DigiWay nasceu com uma missão simples: tornar o mundo digital acessível para todos,
                        independente da idade ou do nível de experiência com tecnologia.
                    </p>
                    <div className={estilos.listaBadges}>
                        <span className={estilos.badge}> App mobile</span>
                        <span className={estilos.badge}>Inclusão digital</span>
                        <span className={estilos.badge}>TCC — Etec de Hortolândia</span>
                        <span className={estilos.badge}> Acessibilidade</span>
                    </div>
                </section>

                <section className={estilos.missao}>
                    <div className={estilos.container}>
                        <p className={estilos.rotuloSecao}>Nossa missão</p>
                        <h2 className={estilos.tituloSecao}>Por que o DigiWay existe</h2>
                        <p className={estilos.descricaoSecao}>
                            Milhões de brasileiros enfrentam barreiras no acesso à tecnologia — não por falta de interesse,
                            mas por falta de orientação clara e linguagem acessível. O DigiWay existe para mudar esse cenário,
                            oferecendo um guia digital pensado para quem está dando os primeiros passos.
                        </p>
                        <div className={estilos.gradeMissao}>
                            <div className={estilos.itemMissao}>
                                <div className={estilos.numeroMissao}>46%</div>
                                <div className={estilos.textoMissao}>dos brasileiros acima de 60 anos nunca usaram a internet regularmente</div>
                            </div>
                            <div className={estilos.itemMissao}>
                                <div className={estilos.numeroMissao}>1 de 4</div>
                                <div className={estilos.textoMissao}>pessoas em situação de baixa renda não sabe usar serviços digitais básicos</div>
                            </div>
                            <div className={estilos.itemMissao}>
                                <div className={estilos.numeroMissao}>100%</div>
                                <div className={estilos.textoMissao}>gratuito e pensado para ser simples desde o primeiro acesso</div>
                            </div>
                            <div className={estilos.itemMissao}>
                                <div className={estilos.numeroMissao}>4</div>
                                <div className={estilos.textoMissao}>estudantes apaixonados por tecnologia e inclusão social desenvolvendo a solução</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={estilos.comoFunciona}>
                    <div className={estilos.container}>
                        <p className={estilos.rotuloSecao}>Como funciona</p>
                        <h2 className={estilos.tituloSecao}>Simples do início ao fim</h2>
                        <p className={estilos.descricaoSecao}>
                            O DigiWay guia o usuário passo a passo, com linguagem clara e sem termos técnicos.
                        </p>
                        <div className={estilos.gradePassos}>
                            {passos.map((item) => (
                                <article key={item.titulo} className={estilos.cartaoPasso}>
                                    <div className={estilos.iconePasso}>{item.icone}</div>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.texto}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={estilos.equipe}>
                    <div className={estilos.container}>
                        <p className={estilos.rotuloSecao}>A equipe</p>
                        <h2 className={estilos.tituloSecao}>Quem está por trás do DigiWay</h2>
                        <p className={estilos.descricaoSecao}>
                            Quatro estudantes do curso técnico da Etec de Hortolândia, unidos pela vontade de usar
                            tecnologia como ferramenta de transformação social.
                        </p>
                        <div className={estilos.gradeEquipe}>
                            {membros.map((membro) => (
                                <article key={membro.nome} className={estilos.cartaoMembro}>
                                    <div className={estilos.avatar}>
                                        <img src={membro.foto} alt={membro.nome} />
                                    </div>
                                    <h3>{membro.nome}</h3>
                                    <div className={estilos.cargoMembro}>{membro.cargo}</div>
                                    <p className={estilos.descricaoMembro}>{membro.descricao}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={estilos.valores}>
                    <div className={estilos.container}>
                        <p className={estilos.rotuloSecao}>Nossos valores</p>
                        <h2 className={estilos.tituloSecao}>O que nos guia</h2>
                        <div className={estilos.listaValores}>
                            {valores.map((valor) => (
                                <div key={valor.titulo} className={estilos.itemValor}>
                                    <div className={estilos.pontoValor}></div>
                                    <div>
                                        <h4>{valor.titulo}</h4>
                                        <p>{valor.texto}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={estilos.secaoCta}>
                    <div className={estilos.container}>
                        <h2>Faça parte dessa mudança</h2>
                        <p>
                            O DigiWay está sendo construído para servir comunidades reais. Acompanhe nossa jornada e nos ajude a chegar a quem mais precisa.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}
