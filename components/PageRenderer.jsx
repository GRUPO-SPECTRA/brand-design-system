import Link from 'next/link';
import { brands } from '../lib/system';

const Section = ({ kicker, title, children }) => <section className="section"><div className="section-head"><div><span>{kicker}</span><h2>{title}</h2></div></div>{children}</section>;
const Card = ({ label, title, children, className = '' }) => <article className={`card ${className}`}><small>{label}</small><h3>{title}</h3>{children && <p>{children}</p>}</article>;

function Header({ brand, page }) {
  return <><div className="page-head"><div><span className="eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.description}</p></div><span className="status">v1.0 · living system</span></div><div className="brand-line" /></>;
}

function Overview({ brandKey, brand }) {
  return <>
    <div className="hero-grid">
      <div className="hero-copy"><span className="mini">{brand.concept}</span><h2>{brand.statement}</h2><p>{brand.description}</p></div>
      <div className="hero-visual"><div className="hero-orbit" /><span>{brand.territory}</span></div>
    </div>
    <Section kicker="01 · Central idea" title="O raciocínio por trás da marca"><div className="notice">{brand.relationship}</div></Section>
    <Section kicker="02 · Construction" title="Como a identidade é construída">
      <div className="grid four">{brand.construction.map(([title, text], i) => <Card key={title} label={`0${i + 1}`} title={title}>{text}</Card>)}</div>
    </Section>
    <Section kicker="03 · Principles" title="Princípios permanentes">
      <div className="grid four">{brand.principles.map((item, i) => <Card key={item} label={`0${i + 1}`} title={item}>Toda decisão de comunicação, produto e experiência deve conseguir ser justificada por este princípio.</Card>)}</div>
    </Section>
    <Section kicker="04 · Ecosystem" title="Luz → Matéria → Emoção">
      <div className="brand-triad">{Object.entries(brands).map(([key, item], i) => <Link key={key} href={`/${key}/brand/overview`} className={`brand-tile tile-${key} ${key === brandKey ? 'active' : ''}`}><small>0{i + 1}</small><strong>{item.name}</strong><span>{item.territory}</span><i /></Link>)}</div>
    </Section>
  </>;
}

function PaletteSwatches({ brand }) {
  return <div className="swatches">{brand.palette.map(([name, value]) => <div className="swatch" key={name}><div style={{ background: value }} /><strong>{name}</strong><code>{value}</code></div>)}</div>;
}

function Colors({ brand, brandKey }) {
  const spectra = brandKey === 'spectra';
  return <>
    <Section kicker="Palette" title="Cores fundamentais"><PaletteSwatches brand={brand} /></Section>
    <Section kicker="Meaning" title="Por que cada cor existe"><div className="grid three">{brand.palette.map(([name, value, role, reason, usage]) => <Card key={name} label={`${value} · ${role}`} title={name}>{reason} Uso principal: {usage}</Card>)}</div></Section>
    {spectra ? <Section kicker="Refraction" title="Gradientes oficiais"><div className="notice" style={{marginBottom:14}}>{brand.gradientReason}</div><div className="grid three">{brand.gradients.map(([name, value]) => <div className="gradient" style={{ background: value }} key={name}><span>{name}</span></div>)}</div></Section> : <Section kicker="Solid colour" title="Por que não usamos gradientes"><div className="notice">{brand.gradientReason}</div></Section>}
    <Section kicker="Usage" title="Regra de aplicação"><div className="grid two"><Card label="DO" title="Use cor com função">Cada cor deve ter papel claro: base, contraste, assinatura, informação ou expressão.</Card><Card label="DON'T" title="Não use a paleta como catálogo">Consistência vem de hierarquia e repetição. Nem toda peça precisa mostrar todas as cores disponíveis.</Card></div></Section>
  </>;
}

function VisualIdentity({ brand, brandKey }) {
  const guides = brand.pageGuides?.['visual-identity'] || [];
  const spectra = brandKey === 'spectra';
  return <>
    <div className="quote-stage"><small>{brand.concept}</small><blockquote>“{brand.relationship}”</blockquote></div>
    <Section kicker="01 · Construction" title="Como a identidade visual nasce do conceito">
      <div className="grid three">{guides.map(([title, text], i) => <Card key={title} label={`0${i + 1}`} title={title}>{text}</Card>)}</div>
    </Section>
    <Section kicker="02 · Colour system" title="A cor como parte da identidade">
      <div className="notice" style={{marginBottom:20}}>{spectra ? brand.gradientReason : brand.gradientReason}</div>
      <PaletteSwatches brand={brand} />
    </Section>
    <Section kicker="03 · Meaning" title="O papel de cada cor na construção da marca">
      <div className="grid three">{brand.palette.map(([name, value, role, reason, usage]) => <Card key={name} label={`${value} · ${role}`} title={name}>{reason} Uso principal: {usage}</Card>)}</div>
    </Section>
    {spectra && <Section kicker="04 · Refraction" title="Quando o espectro aparece"><div className="grid three">{brand.gradients.map(([name, value]) => <div className="gradient" style={{ background: value }} key={name}><span>{name}</span></div>)}</div></Section>}
    <Section kicker={spectra ? '05 · Relationship' : '04 · Relationship'} title="Cor, tipografia, imagem e matéria precisam falar a mesma língua">
      <div className="grid three">
        <Card label="COLOUR" title="Cor">A paleta define atmosfera, contraste e assinatura. Ela nunca deve ser aplicada separada do conceito central.</Card>
        <Card label="TYPE" title="Tipografia">A tipografia controla o tom da marca e equilibra a intensidade visual da cor, fotografia e composição.</Card>
        <Card label="IMAGE" title="Imagem">Fotografia e materialidade mostram no mundo físico aquilo que a paleta e a linguagem gráfica sugerem.</Card>
      </div>
    </Section>
  </>;
}

function Typography({ brand }) {
  const scale = [['Display',72],['H1',48],['H2',32],['H3',24],['Body',16],['Caption',12]];
  return <>
    <div className="type-hero"><small>DISPLAY · {brand.type.display}</small><strong style={{ fontFamily: 'var(--font-display)' }}>{brand.type.sample}</strong></div>
    <Section kicker="Rationale" title="Por que estas famílias"><div className="grid two"><Card label="DISPLAY" title={brand.type.display}>{brand.type.displayReason}</Card><Card label="UI / BODY" title={brand.type.ui}>{brand.type.uiReason}</Card></div></Section>
    <Section kicker="Hierarchy" title="Escala tipográfica">
      <div className="type-table" role="table" aria-label={`Escala tipográfica de ${brand.name}`}>
        <div className="type-row type-head" role="row"><span role="columnheader">Escala</span><strong role="columnheader">{brand.type.display}</strong><strong role="columnheader">{brand.type.ui}</strong></div>
        {scale.map(([label,size]) => <div className="type-row" role="row" key={label} style={{'--sample-size':`${size}px`}}><code role="cell">{label} / {size}</code><span role="cell" className="type-sample display-font">Aa</span><span role="cell" className="type-sample ui-font">Aa</span></div>)}
      </div>
    </Section>
    <Section kicker="Pairing" title="Como as duas trabalham juntas"><div className="notice">A fonte display carrega personalidade e marca; a fonte de interface carrega clareza e continuidade. A primeira deve aparecer onde a voz precisa ser reconhecida. A segunda, onde o conteúdo precisa desaparecer atrás da leitura.</div></Section>
  </>;
}

function Photography({ brand }) {
  return <><div className="photo-stage"><span>Direção fotográfica</span><strong>{brand.concept}</strong></div><Section kicker="Why" title="O papel da fotografia"><div className="notice">A fotografia não é apenas um banco de imagens coerente: ela é uma das principais formas de materializar o conceito da marca.</div></Section><Section kicker="Principles" title="Como a imagem deve se comportar"><div className="grid four">{brand.photography.map(([title, text], i) => <Card key={title} label={`0${i+1}`} title={title}>{text}</Card>)}</div></Section></>;
}

function GuidancePage({ brand, page, guides }) {
  return <><div className="quote-stage"><small>{brand.concept}</small><blockquote>“{brand.relationship}”</blockquote></div><Section kicker={page.eyebrow} title="Decisões de construção"><div className="grid three">{guides.map(([title,text],i)=><Card key={title} label={`0${i+1}`} title={title}>{text}</Card>)}</div></Section><Section kicker="Validation" title="Pergunta de controle"><div className="notice">Antes de aprovar uma aplicação, pergunte: esta decisão reforça o conceito da marca ou foi adicionada apenas por preferência estética? O sistema deve sempre conseguir explicar o porquê.</div></Section></>;
}

function GridDemo() { return <><div className="grid-demo">{Array.from({length:12},(_,i)=><span key={i}>{i+1}</span>)}</div><Section kicker="Responsive" title="Breakpoints de referência"><div className="grid three"><Card label="DESKTOP" title="12 colunas">1440px · margem 80px · gutter 24px.</Card><Card label="TABLET" title="8 colunas">768px · margem 32px · gutter 24px.</Card><Card label="MOBILE" title="4 colunas">390px · margem 16px · gutter 16px.</Card></div></Section></>;
}
function Spacing(){const values=[4,8,12,16,24,32,40,48,64,80,96];return <Section kicker="Scale" title="Ritmo espacial"><div className="spacing-list">{values.map(v=><div key={v}><code>{v}px</code><span style={{width:`${Math.min(v*3,288)}px`}} /></div>)}</div></Section>}
function Spec(){return <Section kicker="Specification" title="Estados e anatomia"><div className="grid three"><Card label="STATES" title="Comportamento">Default, hover, pressed, focus, disabled e loading quando aplicável.</Card><Card label="RESPONSIVE" title="Adaptação">Preserva hierarquia, alvo de toque e leitura em telas menores.</Card><Card label="ACCESSIBILITY" title="Acessibilidade">Contraste, foco visível, semântica e navegação por teclado.</Card></div></Section>}
function GenericVisual({id}){return <><div className={`generic-visual visual-${id}`}><span>{id.replaceAll('-',' ')}</span><div className="visual-object"><i/><i/><i/></div></div><Section kicker="System" title="Princípios de implementação"><div className="grid three"><Card label="ANATOMY" title="Estrutura">Elementos essenciais, zonas de conteúdo e relações entre partes.</Card><Card label="BEHAVIOUR" title="Comportamento">Estados, responsividade, movimento e regras de interação.</Card><Card label="TOKENS" title="Fonte de verdade">Valores devem sempre vir dos tokens da marca selecionada.</Card></div></Section></>}
function Components({id}){if(id==='buttons'||id==='icon-buttons')return <><div className="component-stage"><button className="btn primary">Primary action</button><button className="btn secondary">Secondary</button><button className="btn ghost">Tertiary</button><button className="round-btn">＋</button></div><Spec/></>;if(id==='forms')return <><div className="component-stage form-stage"><label>Nome completo<input placeholder="Digite aqui"/></label><label>E-mail<input type="email" placeholder="nome@empresa.com"/></label><button className="btn primary">Continuar</button></div><Spec/></>;if(id==='cards')return <><div className="grid three"><Card label="FEATURE" title="Card editorial">Conteúdo com título, texto e hierarquia.</Card><Card label="STATUS" title="Card funcional">Dados, contexto e ações rápidas.</Card><article className="card media-card"><div/><small>MEDIA</small><h3>Card com imagem</h3></article></div><Spec/></>;return <GenericVisual id={id}/>}

function BrandGeneric({brand,page}){
  const maps={'brand-core':['Essência','Propósito','Promessa'],strategy:['Posicionamento','Diferenciação','Territórios'],audience:['Público central','Necessidades','Ocasiões'],personality:['Traços','Comportamento','Limites'],'verbal-identity':['Voz','Ritmo','Vocabulário'],messaging:['Institucional','Produto','Conversão'],storytelling:['Origem','Processo','Objeto'],layout:['Hierarquia','Respiro','Ritmo'],'brand-experience':['Digital','Físico','Atendimento'],'brand-in-action':['Campanha','Produto','Conteúdo'],'ai-guidelines':['Texto','Imagem','Automação'],governance:['Responsáveis','Aprovação','Evolução']};
  const items=maps[page.id]||['Princípio','Aplicação','Validação'];
  return <><div className="quote-stage"><small>{brand.concept}</small><blockquote>“{brand.statement}”</blockquote></div><Section kicker={page.eyebrow} title="Diretrizes"><div className="grid three">{items.map((item,i)=><Card key={item} label={`0${i+1}`} title={item}>Toda definição desta área deve nascer do conceito central da marca e registrar o motivo da escolha, não apenas a decisão final.</Card>)}</div></Section></>;
}

export default function PageRenderer({brandKey,area,page}){
  const brand=brands[brandKey];
  const guides=brand.pageGuides?.[page.id];
  let content;
  if(page.id==='overview')content=<Overview brandKey={brandKey} brand={brand}/>;
  else if(page.id==='colors')content=<Colors brandKey={brandKey} brand={brand}/>;
  else if(page.id==='visual-identity')content=<VisualIdentity brandKey={brandKey} brand={brand}/>;
  else if(page.id==='typography')content=<Typography brand={brand}/>;
  else if(page.id==='photography')content=<Photography brand={brand}/>;
  else if(guides)content=<GuidancePage brand={brand} page={page} guides={guides}/>;
  else if(page.id==='grid')content=<GridDemo/>;
  else if(page.id==='spacing')content=<Spacing/>;
  else if(area==='design')content=<Components id={page.id}/>;
  else content=<BrandGeneric brand={brand} page={page}/>;
  return <><Header brand={brand} page={page}/>{content}</>;
}
