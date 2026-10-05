import { brands } from '../lib/system';

const Section = ({ kicker, title, children }) => <section className="section"><div className="section-head"><div><span>{kicker}</span><h2>{title}</h2></div></div>{children}</section>;
const Card = ({ label, title, children }) => <article className="card"><small>{label}</small><h3>{title}</h3>{children && <p>{children}</p>}</article>;

const identity = {
  spectra: {
    axis: 'Luz → descoberta',
    core: 'Spectra é luz atravessando matéria. O sistema deve revelar fenômenos que normalmente passariam despercebidos: refração, inclusão, estrutura, cor, transparência e transformação óptica.',
    object: 'Gema solta',
    reveal: 'Luz, cor, estrutura, inclusão e refração',
    rule: 'A Spectra fotografa a gema para revelar algo que o olho normalmente não percebe.',
    backgrounds: 'Mineral White, preto profundo e superfícies neutras/refletivas.',
    light: 'Luz dirigida atravessando ou tangenciando a gema. A cor deve nascer da pedra e da luz, nunca de um filtro arco-íris aplicado por cima.',
    framing: 'Macro e supermacro, enquadramento muito próximo, profundidade curta quando necessário e composição limpa para a matéria continuar protagonista.',
    families: [
      ['HERO MINERAL', 'Uma gema isolada como objeto de descoberta, quase científica ou museológica.'],
      ['INSIDE THE STONE', 'Macro extremo mostrando inclusões, zonas de cor, crescimento e estrutura interna.'],
      ['OPTICAL BEHAVIOR', 'A luz atravessa a gema e cria fogo, reflexo, dispersão ou projeção cromática real.'],
      ['GEMOLOGY', 'Gema em pinça, lupa, microscópio ou instrumento, conectando beleza a conhecimento técnico.']
    ],
    avoid: ['Arco-íris genérico ou neon sem origem física', 'CGI tratado como fotografia documental', 'Fundo excessivamente colorido competindo com a gema', 'Efeito óptico sem relação com a matéria real']
  },
  sur: {
    axis: 'Matéria → construção',
    core: 'Se Spectra é luz atravessando matéria, Sür é a própria matéria. O sistema visual deve fazer peso, metal, acabamento, aresta, encaixe e precisão serem percebidos antes de qualquer ornamento.',
    object: 'Joia pronta como objeto',
    reveal: 'Matéria, precisão, construção e acabamento',
    rule: 'Na Sür, a fotografia precisa fazer a pessoa sentir peso, superfície e precisão antes mesmo de tocar na peça.',
    backgrounds: 'Preto absoluto, grafite, pedra escura, metal escuro e superfícies pretas refletivas.',
    light: 'Luz lateral mais dura e controlada, desenhando arestas e gerando reflexos brancos ou prateados reais sobre o metal.',
    framing: 'Peça inteira com muito controle geométrico ou macro extremamente próximo de encaixe, cravação, textura, espessura e acabamento.',
    families: [
      ['HERO OBJECT', 'Uma peça isolada, pouca cenografia, presença forte e leitura imediata de forma e material.'],
      ['CONSTRUCTION MACRO', 'Close de cravação, fecho, encaixe, espessura, superfície e detalhe técnico.'],
      ['MATERIAL COMPOSITION', 'Duas ou três joias organizadas como objetos industriais, com composição geométrica e tensão de espaço.'],
      ['FUNCTIONAL DETAIL', 'Fotografia que mostra como a peça se articula, fecha, encaixa ou resolve um detalhe construtivo.']
    ],
    avoid: ['Flores, rosa e props românticos', 'Tecido bege como linguagem principal', 'Gradiente cromado digital', 'Refração prismática da Spectra', 'Cenografia que esconda forma e acabamento']
  },
  'ana-rios': {
    axis: 'Joia → emoção',
    core: 'Se Spectra descobre a matéria e Sür a constrói, Ana Rios apresenta a matéria já transformada em joia, desejo e memória. O sistema deve ser editorial, autoral, silencioso e quente.',
    object: 'Joia sozinha em natureza-morta editorial',
    reveal: 'Desejo, autoria, gema, delicadeza e atmosfera',
    rule: 'Na Ana Rios, a joia é protagonista de uma composição editorial; a gema pode ser o principal acontecimento cromático da imagem.',
    backgrounds: 'Marfim, creme, champagne, papel, tecido, pedra natural clara e superfícies foscas quentes.',
    light: 'Luz suave de janela ou estúdio difuso, sombras delicadas e sensação tátil. O brilho da gema e do metal deve parecer natural.',
    framing: 'Muito espaço negativo, assimetria controlada e composição de still life. A peça pode ficar pequena no quadro quando o respiro fizer parte da narrativa.',
    families: [
      ['EDITORIAL STILL LIFE', 'Uma ou duas peças em composição silenciosa com papel, tecido, pedra ou outra superfície tátil.'],
      ['SINGLE JEWEL', 'Uma peça praticamente sozinha, com muito espaço vazio e atenção integral à forma.'],
      ['MATERIAL DIALOGUE', 'Joia em relação com materiais naturais e editoriais que reforçam calor, autoria e sofisticação.'],
      ['GEM AS ACCENT', 'Composição neutra em que esmeralda, rubi, tanzanita ou outra gema vira o ponto cromático dominante.']
    ],
    avoid: ['E-commerce branco estéril como linguagem de campanha', 'Preto técnico dominante da Sür', 'Gradientes digitais institucionais', 'Props excessivos que transformem a cena em decoração', 'Cor de fundo competindo com a gema']
  }
};

function Concepts({ brandKey }) {
  const brand = brands[brandKey];
  const data = identity[brandKey];
  return <>
    <div className="quote-stage"><small>{brand.concept}</small><blockquote>“{brand.relationship}”</blockquote></div>
    <Section kicker="01 · Brand axis" title={data.axis}><div className="notice">{data.core}</div></Section>
    <Section kicker="02 · System consequence" title="Como o conceito governa o Design System">
      <div className="grid four">
        <Card label="COLOUR" title="Cor">{brandKey === 'spectra' ? 'A cor aparece como fenômeno de luz e refração sobre uma estrutura neutra.' : brandKey === 'sur' ? 'A identidade se sustenta em preto, grafite, prata e superfícies sólidas.' : 'A base permanece quente e neutra; a gema pode introduzir a cor narrativa.'}</Card>
        <Card label="MATERIAL" title="Matéria">{brandKey === 'spectra' ? 'Cristal, mineral, transparência e superfície conectam tecnologia a matéria real.' : brandKey === 'sur' ? 'Metal, peso, textura e acabamento são a própria linguagem da marca.' : 'Papel, pedra, tecido, metal e gema criam uma materialidade editorial e humana.'}</Card>
        <Card label="TYPE" title="Tipografia">{brandKey === 'spectra' ? 'Precisão geométrica equilibra a riqueza óptica.' : brandKey === 'sur' ? 'Geometria e controle reforçam engenharia e silêncio.' : 'Contraste editorial e serifas trazem autoria e delicadeza.'}</Card>
        <Card label="MOTION" title="Movimento">{brandKey === 'spectra' ? 'Luz se desloca e revela profundidade.' : brandKey === 'sur' ? 'Movimento curto, firme e mecânico.' : 'Ritmo suave, editorial e contemplativo.'}</Card>
      </div>
    </Section>
    <Section kicker="03 · Ecosystem" title="Descobrir → Construir → Transformar">
      <div className="grid three">
        <Card label="SPECTRA" title="A matéria é descoberta">A luz revela o que existe dentro da gema.</Card>
        <Card label="SÜR" title="A matéria é construída">Precisão transforma metal e pedra em objeto.</Card>
        <Card label="ANA RIOS" title="A matéria se torna joia">Autoria transforma o objeto em desejo, memória e expressão.</Card>
      </div>
    </Section>
  </>;
}

function Photography({ brandKey }) {
  const brand = brands[brandKey];
  const data = identity[brandKey];
  return <>
    <div className="photo-stage"><span>{data.object}</span><strong>{data.rule}</strong></div>
    <Section kicker="01 · Intent" title="O que fotografamos e o que queremos revelar">
      <div className="grid two"><Card label="SUBJECT" title={data.object}>O assunto principal precisa permanecer reconhecível mesmo sem logotipo ou elemento gráfico.</Card><Card label="REVEAL" title={data.reveal}>A fotografia deve revelar o conceito da marca, não apenas registrar o produto.</Card></div>
    </Section>
    <Section kicker="02 · Direction" title="Luz, fundo e enquadramento">
      <div className="grid three"><Card label="BACKGROUND" title="Fundo">{data.backgrounds}</Card><Card label="LIGHT" title="Luz">{data.light}</Card><Card label="FRAMING" title="Enquadramento">{data.framing}</Card></div>
    </Section>
    <Section kicker="03 · Image families" title="Famílias fotográficas">
      <div className="grid four">{data.families.map(([label,title]) => <Card key={label} label={label} title={label.replaceAll('_',' ')}>{title}</Card>)}</div>
    </Section>
    <Section kicker="04 · Don't" title="O que não pertence a esta linguagem">
      <div className="grid three">{data.avoid.map((item,index) => <Card key={item} label={`0${index+1}`} title="Evitar">{item}</Card>)}</div>
    </Section>
    <Section kicker="05 · Approval" title="Teste sem logotipo"><div className="notice">Remova o logotipo da fotografia. Ainda deve ser possível reconhecer a marca pela escolha do assunto, luz, fundo, enquadramento, materialidade e atmosfera. Se a imagem puder pertencer igualmente às três marcas, ela ainda não está específica o suficiente.</div></Section>
  </>;
}

export default function DesignIdentityPage({ brandKey, pageId }) {
  return pageId === 'concepts' ? <Concepts brandKey={brandKey} /> : <Photography brandKey={brandKey} />;
}
