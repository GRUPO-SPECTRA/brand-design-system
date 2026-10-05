import Link from 'next/link';
import { brands } from '../lib/system';

const Section = ({ kicker, title, children }) => <section className="section"><div className="section-head"><div><span>{kicker}</span><h2>{title}</h2></div></div>{children}</section>;
const Card = ({ label, title, children, className = '' }) => <article className={`card ${className}`}><small>{label}</small><h3>{title}</h3>{children && <p>{children}</p>}</article>;

function Header({ brand, area, page }) {
  return <><div className="page-head"><div><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.description}</p></div><span className="status">v1.0 · living system</span></div><div className="brand-line" /></>;
}

function Overview({ brandKey, brand }) {
  return <>
    <div className="hero-grid">
      <div className="hero-copy"><span className="mini">{brand.concept}</span><h2>{brand.statement}</h2><p>{brand.description}</p></div>
      <div className="hero-visual"><div className="hero-orbit" /><span>{brand.territory}</span></div>
    </div>
    <Section kicker="01 · Territory" title="Sistema de marca">
      <div className="grid four">{brand.principles.map((item, i) => <Card key={item} label={`0${i + 1}`} title={item}>Princípio permanente para orientar decisões de comunicação, produto e experiência.</Card>)}</div>
    </Section>
    <Section kicker="02 · Ecosystem" title="Luz → Matéria → Emoção">
      <div className="brand-triad">{Object.entries(brands).map(([key, item], i) => <Link key={key} href={`/${key}/brand/overview`} className={`brand-tile tile-${key} ${key === brandKey ? 'active' : ''}`}><small>0{i + 1}</small><strong>{item.name}</strong><span>{item.territory}</span><i /></Link>)}</div>
    </Section>
  </>;
}

function Colors({ brand, brandKey }) {
  const spectra = brandKey === 'spectra';
  return <>
    <Section kicker="Palette" title="Cores fundamentais"><div className="swatches">{brand.palette.map(([name, value]) => <div className="swatch" key={name}><div style={{ background: value }} /><strong>{name}</strong><code>{value}</code></div>)}</div></Section>
    {spectra ? <Section kicker="Refraction" title="Gradientes oficiais"><div className="grid three">{brand.gradients.map(([name, value]) => <div className="gradient" style={{ background: value }} key={name}><span>{name}</span></div>)}</div></Section> : <Section kicker="Solid colour" title="Superfícies sem gradiente"><div className="notice">{brand.name} trabalha com cores sólidas. Gradientes não fazem parte da linguagem principal da marca; contraste, materialidade e composição devem criar profundidade sem depender de transições cromáticas.</div></Section>}
    <Section kicker="Usage" title="Regra de aplicação"><div className="grid two"><Card label="DO" title="Use cor com intenção">A cor deve construir hierarquia, fenômeno, materialidade ou significado.</Card><Card label="DON'T" title="Evite ruído cromático">Não aplique toda a paleta em todos os componentes ou superfícies.</Card></div></Section>
  </>;
}

function Typography({ brand }) {
  const scale = [
    ['Display', 72], ['H1', 48], ['H2', 32], ['H3', 24], ['Body', 16], ['Caption', 12]
  ];
  return <>
    <div className="type-hero"><small>DISPLAY · {brand.type.display}</small><strong style={{ fontFamily: `var(--font-display)` }}>{brand.type.sample}</strong></div>
    <Section kicker="Hierarchy" title="Escala tipográfica">
      <div className="type-table" role="table" aria-label={`Escala tipográfica de ${brand.name}`}>
        <div className="type-row type-head" role="row">
          <span role="columnheader">Escala</span>
          <strong role="columnheader">{brand.type.display}</strong>
          <strong role="columnheader">{brand.type.ui}</strong>
        </div>
        {scale.map(([label, size]) => <div className="type-row" role="row" key={label} style={{ '--sample-size': `${size}px` }}>
          <code role="cell">{label} / {size}</code>
          <span role="cell" className="type-sample display-font">Aa</span>
          <span role="cell" className="type-sample ui-font">Aa</span>
        </div>)}
      </div>
    </Section>
    <Section kicker="Pairing" title="Display + interface"><div className="grid two"><Card label="DISPLAY" title={brand.type.display}>Títulos editoriais, frases de marca e comunicação de alto impacto.</Card><Card label="UI / BODY" title={brand.type.ui}>Interface, navegação, textos longos, dados e conteúdos utilitários.</Card></div></Section>
  </>;
}

function Photography({ brand }) {
  return <><div className="photo-stage"><span>Direção fotográfica</span><strong>{brand.concept}</strong></div><Section kicker="Principles" title="Como a imagem deve se comportar"><div className="grid four">{brand.photography.map((item, i) => <Card key={item} label={`0${i+1}`} title={item}>Critério recorrente para seleção, produção e tratamento das imagens.</Card>)}</div></Section></>;
}

function GridDemo() {
  return <><div className="grid-demo">{Array.from({length:12},(_,i)=><span key={i}>{i+1}</span>)}</div><Section kicker="Responsive" title="Breakpoints de referência"><div className="grid three"><Card label="DESKTOP" title="12 colunas">1440px · margem 80px · gutter 24px.</Card><Card label="TABLET" title="8 colunas">768px · margem 32px · gutter 24px.</Card><Card label="MOBILE" title="4 colunas">390px · margem 16px · gutter 16px.</Card></div></Section></>;
}

function Spacing() {
  const values=[4,8,12,16,24,32,40,48,64,80,96];
  return <Section kicker="Scale" title="Ritmo espacial"><div className="spacing-list">{values.map(v=><div key={v}><code>{v}px</code><span style={{width:`${Math.min(v*3,288)}px`}} /></div>)}</div></Section>;
}

function Components({ id }) {
  if (id === 'buttons' || id === 'icon-buttons') return <><div className="component-stage"><button className="btn primary">Primary action</button><button className="btn secondary">Secondary</button><button className="btn ghost">Tertiary</button><button className="round-btn">＋</button></div><Spec /></>;
  if (id === 'forms') return <><div className="component-stage form-stage"><label>Nome completo<input placeholder="Digite aqui" /></label><label>E-mail<input type="email" placeholder="nome@empresa.com" /></label><button className="btn primary">Continuar</button></div><Spec /></>;
  if (id === 'cards') return <><div className="grid three"><Card label="FEATURE" title="Card editorial">Conteúdo com título, texto e hierarquia.</Card><Card label="STATUS" title="Card funcional">Dados, contexto e ações rápidas.</Card><article className="card media-card"><div /><small>MEDIA</small><h3>Card com imagem</h3></article></div><Spec /></>;
  if (id === 'tags' || id === 'selection-controls') return <><div className="component-stage"><span className="tag">Default</span><span className="tag active">Brand</span><span className="tag success">Success</span><label className="check"><input type="checkbox" defaultChecked /> Selecionado</label></div><Spec /></>;
  return <GenericVisual id={id} />;
}

function Spec() { return <Section kicker="Specification" title="Estados e anatomia"><div className="grid three"><Card label="STATES" title="Comportamento">Default, hover, pressed, focus, disabled e loading quando aplicável.</Card><Card label="RESPONSIVE" title="Adaptação">Preserva hierarquia, alvo de toque e leitura em telas menores.</Card><Card label="ACCESSIBILITY" title="Acessibilidade">Contraste, foco visível, semântica e navegação por teclado.</Card></div></Section>; }

function GenericVisual({ id }) {
  return <><div className={`generic-visual visual-${id}`}><span>{id.replaceAll('-', ' ')}</span><div className="visual-object"><i/><i/><i/></div></div><Section kicker="System" title="Princípios de implementação"><div className="grid three"><Card label="ANATOMY" title="Estrutura">Elementos essenciais, zonas de conteúdo e relações entre partes.</Card><Card label="BEHAVIOUR" title="Comportamento">Estados, responsividade, movimento e regras de interação.</Card><Card label="TOKENS" title="Fonte de verdade">Valores devem sempre vir dos tokens da marca selecionada.</Card></div></Section><Section kicker="Guidance" title="Do / Don't"><div className="grid two"><Card label="DO" title="Mantenha a intenção">Aplique o componente respeitando hierarquia, contexto e personalidade da marca.</Card><Card label="DON'T" title="Não crie exceções gratuitas">Variações novas precisam resolver uma necessidade real e entrar no sistema.</Card></div></Section></>;
}

function BrandGeneric({ brand, page }) {
  const maps = {
    'brand-core': ['Essência', 'Propósito', 'Promessa'], strategy: ['Posicionamento', 'Diferenciação', 'Territórios'], audience: ['Público central', 'Necessidades', 'Ocasiões'], personality: ['Traços', 'Comportamento', 'Limites'],
    'verbal-identity': ['Voz', 'Ritmo', 'Vocabulário'], messaging: ['Institucional', 'Produto', 'Conversão'], storytelling: ['Origem', 'Processo', 'Objeto'], 'visual-identity': ['Cor', 'Tipo', 'Imagem'],
    'graphic-language': ['Forma', 'Superfície', 'Materialidade'], layout: ['Hierarquia', 'Respiro', 'Ritmo'], motion: ['Tempo', 'Easing', 'Energia'], 'brand-experience': ['Digital', 'Físico', 'Atendimento'],
    'brand-in-action': ['Campanha', 'Produto', 'Conteúdo'], 'ai-guidelines': ['Texto', 'Imagem', 'Automação'], governance: ['Responsáveis', 'Aprovação', 'Evolução']
  };
  const items = maps[page.id] || ['Princípio', 'Aplicação', 'Validação'];
  return <><div className="quote-stage"><small>{brand.concept}</small><blockquote>“{brand.statement}”</blockquote></div><Section kicker={page.eyebrow} title="Diretrizes"><div className="grid three">{items.map((item,i)=><Card key={item} label={`0${i+1}`} title={item}>Diretriz em construção. Toda decisão deve ser validada contra os princípios centrais da marca e documentada aqui.</Card>)}</div></Section><Section kicker="Status" title="Documento vivo"><div className="notice">Esta página estabelece a estrutura definitiva do sistema. Conteúdo estratégico ainda não aprovado deve ser registrado como hipótese ou pendência, nunca como fato.</div></Section></>;
}

export default function PageRenderer({ brandKey, area, page }) {
  const brand = brands[brandKey];
  let content;
  if (page.id === 'overview') content = <Overview brandKey={brandKey} brand={brand} />;
  else if (page.id === 'colors') content = <Colors brandKey={brandKey} brand={brand} />;
  else if (page.id === 'typography') content = <Typography brand={brand} />;
  else if (page.id === 'photography') content = <Photography brand={brand} />;
  else if (page.id === 'grid') content = <GridDemo />;
  else if (page.id === 'spacing') content = <Spacing />;
  else if (area === 'design') content = <Components id={page.id} />;
  else content = <BrandGeneric brand={brand} page={page} />;
  return <><Header brand={brand} area={area} page={page} />{content}</>;
}
