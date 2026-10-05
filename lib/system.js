export const brands = {
  spectra: {
    name: 'SPECTRA', short: 'Spectra', territory: 'Luz · Matéria · Tecnologia', theme: 'dark',
    concept: 'Prismatic Intelligence', statement: 'A cor não é decoração. É luz atravessando matéria.',
    description: 'Uma identidade tecnológica e mineral onde o espectro aparece como refração, profundidade e energia controlada.',
    principles: ['Precisão antes do efeito', 'Cor como fenômeno óptico', 'Tecnologia com materialidade', 'Clareza em primeiro plano'],
    palette: [
      ['Void', '#08090B'], ['Mineral White', '#F7F7F5'], ['Violet', '#7557FF'], ['Blue', '#3978FF'],
      ['Cyan', '#38D9FF'], ['Green', '#42E6A4'], ['Yellow', '#FFD65A'], ['Orange', '#FF875E'], ['Magenta', '#F058D7']
    ],
    gradients: [
      ['Prism', 'linear-gradient(115deg,#7557ff,#3978ff 24%,#38d9ff 44%,#42e6a4 61%,#ffd65a 76%,#ff875e 88%,#f058d7)'],
      ['Cold Refraction', 'linear-gradient(120deg,#7557ff,#3978ff,#38d9ff,#42e6a4)'],
      ['Warm Refraction', 'linear-gradient(120deg,#ffd65a,#ff875e,#f058d7,#7557ff)']
    ],
    type: { display: 'Manrope', ui: 'Inter', sample: 'Inteligência mineral em todo o espectro.' },
    photography: ['Macro mineral', 'Reflexo e transparência', 'Processo e precisão', 'Luz prismática controlada']
  },
  sur: {
    name: 'SÜR', short: 'Sür', territory: 'Matéria · Precisão · Metal', theme: 'dark',
    concept: 'Monochrome Precision', statement: 'A matéria fala através da precisão.',
    description: 'Preto, prata e metal constroem uma linguagem técnica, silenciosa e rigorosa, com luxo vindo do acabamento.',
    principles: ['Monocromia intencional', 'Engenharia visível', 'Contraste rigoroso', 'Detalhe como assinatura'],
    palette: [
      ['Carbon', '#070707'], ['Graphite', '#1A1A1C'], ['Steel', '#74777C'], ['Silver', '#C7C9CC'], ['Platinum', '#E4E5E6'], ['White Metal', '#F6F6F3']
    ],
    gradients: [
      ['Chrome', 'linear-gradient(115deg,#111,#5e6166 23%,#f1f1f1 48%,#75787e 65%,#d8d9db 82%,#181818)'],
      ['Brushed Steel', 'linear-gradient(90deg,#202124,#74777c,#e4e5e6,#606266,#f1f1f1)']
    ],
    type: { display: 'Space Grotesk', ui: 'Inter', sample: 'Precisão transformada em objeto.' },
    photography: ['Fundo preto', 'Luz lateral dura', 'Macro de metal', 'Reflexo especular']
  },
  'ana-rios': {
    name: 'ANA RIOS', short: 'Ana Rios', territory: 'Joia · Natureza · Autoria', theme: 'light',
    concept: 'Organic Luxury', statement: 'A joia encontra personalidade antes de encontrar ocasião.',
    description: 'Um luxo editorial, humano e autoral. A base é quente e silenciosa; as gemas entram como cores episódicas das coleções.',
    principles: ['Autoria acima de tendência', 'Calor e proximidade', 'Imagem editorial', 'Gema como cor narrativa'],
    palette: [
      ['Ivory', '#F4EFE7'], ['Warm Black', '#191615'], ['Wine', '#4B1828'], ['Mineral Rose', '#B98A87'], ['Champagne', '#C7A56A'], ['Chocolate', '#302521']
    ],
    gradients: [
      ['Editorial', 'linear-gradient(120deg,#4b1828,#8a4255 35%,#b98a87 62%,#c7a56a)'],
      ['Champagne Light', 'linear-gradient(120deg,#f4efe7,#d9c5a6,#c7a56a,#f4efe7)']
    ],
    type: { display: 'Cormorant Garamond', ui: 'Inter', sample: 'Joias que carregam histórias.' },
    photography: ['Pele e proximidade', 'Sombras suaves', 'Macro da gema', 'Composição editorial']
  }
};

export const navigation = {
  brand: [
    { group: 'Foundation', pages: [
      ['overview','Overview'], ['brand-core','Brand Core'], ['strategy','Brand Strategy'], ['audience','Audience'], ['personality','Brand Personality']
    ]},
    { group: 'Language & Narrative', pages: [
      ['verbal-identity','Verbal Identity'], ['messaging','Messaging System'], ['storytelling','Brand Storytelling']
    ]},
    { group: 'Visual Identity', pages: [
      ['visual-identity','Visual Identity'], ['typography','Typography'], ['photography','Photography'], ['graphic-language','Graphic Language'], ['layout','Layout Principles'], ['motion','Motion Identity']
    ]},
    { group: 'Experience & Governance', pages: [
      ['brand-experience','Brand Experience'], ['brand-in-action','Brand in Action'], ['ai-guidelines','AI Brand Guidelines'], ['governance','Brand Governance']
    ]}
  ],
  design: [
    { group: 'Foundations', pages: [
      ['grid','Layout Grid'], ['spacing','Sizes & Spacing'], ['typography','Typography'], ['colors','Colours'], ['icons','Icons'], ['effects','Effects']
    ]},
    { group: 'Identity', pages: [
      ['logo','Logo'], ['illustrations','Illustrations'], ['avatars','Avatars']
    ]},
    { group: 'Actions & Controls', pages: [
      ['buttons','Buttons'], ['icon-buttons','Icon Buttons'], ['selection-controls','Selection Controls'], ['slider','Slider'], ['tags','Tags']
    ]},
    { group: 'Navigation & Forms', pages: [
      ['navigation','Navigation'], ['tabs','Tabs'], ['header-links','Header Links'], ['forms','Forms']
    ]},
    { group: 'Content & Feedback', pages: [
      ['cards','Cards'], ['tables','Tables'], ['modals','Modals & Popups'], ['banners','Banners & Messaging']
    ]}
  ]
};

const descriptions = {
  overview: ['Ecossistema visual', 'Visão geral da marca, território, princípios e relação com as outras marcas do grupo.'],
  'brand-core': ['Foundation', 'Essência, propósito, promessa e atributos que sustentam todas as decisões de marca.'],
  strategy: ['Foundation', 'Posicionamento, diferenciação, territórios competitivos e critérios de decisão.'],
  audience: ['Foundation', 'Públicos, necessidades, tensões, ocasiões e comportamento que orientam a experiência.'],
  personality: ['Foundation', 'Traços de personalidade traduzidos em comportamento, tom, imagem e escolhas de design.'],
  'verbal-identity': ['Language', 'Princípios de voz, vocabulário, ritmo e construção textual da marca.'],
  messaging: ['Language', 'Arquitetura de mensagens para institucional, produto, campanha e conversão.'],
  storytelling: ['Language', 'Estruturas narrativas para contar origem, processo, produto e impacto.'],
  'visual-identity': ['Visual Identity', 'Sistema que conecta cor, tipografia, imagem, composição, materialidade e movimento.'],
  typography: ['Foundation', 'Famílias, hierarquia, escala e comportamento tipográfico em comunicação e produto.'],
  photography: ['Visual Identity', 'Direção fotográfica, luz, enquadramento, textura, pessoas, produto e pós-produção.'],
  'graphic-language': ['Visual Identity', 'Formas, linhas, superfícies, texturas, gradientes e recursos que tornam a marca reconhecível.'],
  layout: ['Visual Identity', 'Princípios de composição, ritmo, alinhamento, densidade e uso de espaço negativo.'],
  motion: ['Visual Identity', 'Comportamento de movimento, ritmo, duração, easing e transições da marca.'],
  'brand-experience': ['Experience', 'Como os princípios da marca aparecem em pontos de contato físicos e digitais.'],
  'brand-in-action': ['Experience', 'Exemplos de aplicação e critérios para manter consistência sem engessar criação.'],
  'ai-guidelines': ['Governance', 'Regras para uso de IA em texto, imagem, produto e automação sem descaracterizar a marca.'],
  governance: ['Governance', 'Papéis, critérios de aprovação, manutenção e evolução do sistema.'],
  grid: ['Foundations', 'Grid responsivo que organiza conteúdo em desktop, tablet e mobile.'],
  spacing: ['Foundations', 'Escala espacial para padding, gaps, ritmo vertical e dimensionamento.'],
  colors: ['Foundations', 'Paleta de marca, gradientes e tokens semânticos para comunicação e interfaces.'],
  icons: ['Foundations', 'Princípios de ícones, peso, escala, alinhamento óptico e uso funcional.'],
  effects: ['Foundations', 'Sombras, blur, refração, bordas, superfícies e profundidade.'],
  logo: ['Identity', 'Uso do logotipo existente, área de proteção, escalas e fundos permitidos. O logo não é redesenhado nesta fase.'],
  illustrations: ['Identity', 'Direção para ilustração funcional, editorial e estados vazios.'],
  avatars: ['Identity', 'Representação consistente de pessoas, perfis e fallbacks.'],
  buttons: ['Actions & Controls', 'Hierarquia de ações, tamanhos, estados e comportamento acessível.'],
  'icon-buttons': ['Actions & Controls', 'Ações compactas com alvo, feedback e rótulo acessível definidos.'],
  'selection-controls': ['Actions & Controls', 'Checkboxes, radios e toggles com estados consistentes.'],
  slider: ['Actions & Controls', 'Controle de valores e intervalos com feedback claro.'],
  tags: ['Actions & Controls', 'Rótulos de status, categoria, filtro e seleção.'],
  navigation: ['Navigation & Forms', 'Padrões de navegação, orientação e resposta entre breakpoints.'],
  tabs: ['Navigation & Forms', 'Navegação local entre conteúdos relacionados.'],
  'header-links': ['Navigation & Forms', 'Links de contexto para headers, menus e barras de ação.'],
  forms: ['Navigation & Forms', 'Campos, validação, mensagens, foco e estados de entrada.'],
  cards: ['Content & Feedback', 'Contêineres de informação, mídia e ações com hierarquia clara.'],
  tables: ['Content & Feedback', 'Estrutura para dados densos, ações e comportamento responsivo.'],
  modals: ['Content & Feedback', 'Camadas de foco para confirmação, decisão e tarefas curtas.'],
  banners: ['Content & Feedback', 'Mensagens contextuais, alertas e comunicação de estado.']
};

export function getPage(area, id) {
  const entry = navigation[area]?.flatMap(group => group.pages).find(([pageId]) => pageId === id);
  if (!entry) return null;
  const [eyebrow, description] = descriptions[id] || ['System', 'Documentação do sistema.'];
  return { id, title: entry[1], eyebrow, description };
}

export const staticParams = Object.keys(brands).flatMap(brand =>
  Object.entries(navigation).flatMap(([area, groups]) =>
    groups.flatMap(group => group.pages.map(([page]) => ({ brand, area, page })))
  )
);
