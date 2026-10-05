const card = (label, title, text) => [label, title, text];
const section = (kicker, title, items) => ({ kicker, title, items });

export const brandFramework = {
  spectra: {
    'brand-core': {
      lead: 'A Spectra não nasce apenas como comércio de gemas. Sua legitimidade vem de conhecimento mineral, experiência técnica e da capacidade de transformar uma matéria complexa em algo compreensível, desejável e confiável.',
      sections: [
        section('Essence', 'O núcleo da marca', [
          card('ESSÊNCIA', 'Inteligência mineral', 'Transformar conhecimento sobre minerais e gemas em clareza, valor e descoberta. A marca deve ensinar antes de impressionar.'),
          card('PROPÓSITO', 'Aproximar pessoas da matéria', 'Diminuir a distância entre o público e um universo normalmente técnico, raro ou pouco compreendido, tornando mineralogia e gemologia mais acessíveis.'),
          card('PROMESSA', 'Conhecimento antes da escolha', 'Toda interação deve ajudar a pessoa a entender melhor o que está vendo, comprando, avaliando ou colecionando.'),
          card('PROVA', 'Origem técnica real', 'A história começa com geologia, coleções educativas, minerais e gemas. Essa origem deve permanecer visível mesmo quando a comunicação for sofisticada.')
        ]),
        section('Brand tension', 'A tensão que move a Spectra', [
          card('MERCADO', 'Beleza sem contexto', 'Grande parte da categoria mostra a pedra como objeto bonito ou caro, mas explica pouco sobre origem, natureza, tratamento, identificação ou singularidade.'),
          card('RESPOSTA', 'Desejo com entendimento', 'A Spectra une fascínio visual e explicação. A beleza atrai; o conhecimento sustenta confiança e autoridade.'),
          card('LIMITE', 'Não virar catálogo técnico', 'Conhecimento não significa comunicação fria. O conteúdo precisa continuar visual, curioso e humano.')
        ])
      ]
    },
    strategy: {
      lead: 'O espaço competitivo mais defensável para a Spectra é ser reconhecida como referência em inteligência gemológica e mineral aplicada à vida real — não como mais uma loja de pedras ou joias.',
      sections: [
        section('Positioning', 'Posicionamento estratégico', [
          card('POSIÇÃO', 'Autoridade mineral contemporânea', 'Uma marca brasileira que conecta ciência, origem, gemas naturais, educação e tecnologia em uma experiência clara e visual.'),
          card('DIFERENCIAL', 'Conhecimento proprietário', 'Geologia, mineralogia, identificação, avaliação, lapidação e contato direto com a matéria criam um repertório difícil de copiar apenas com estética.'),
          card('TERRITÓRIO', 'Da matéria ao entendimento', 'O território é tudo o que ajuda alguém a enxergar melhor uma gema: luz, estrutura, cor, origem, lapidação, processo e valor.'),
          card('NÃO SOMOS', 'Luxo genérico', 'A Spectra não deve imitar os códigos tradicionais de joalheria premium nem depender de preto, dourado e linguagem aspiracional vazia.')
        ]),
        section('Competitive lens', 'Leitura da categoria', [
          card('PADRÃO', 'Design e desejo dominam', 'Marcas fortes de joalheria constroem territórios consistentes de design, natureza, autoria ou patrimônio. A Spectra precisa ser igualmente consistente, mas em um território diferente.'),
          card('WHITE SPACE', 'Gemologia como cultura', 'A oportunidade está em fazer conhecimento mineral virar cultura de marca: séries, explicações, demonstrações, comparações e descobertas recorrentes.'),
          card('VANTAGEM', 'Origem antes do storytelling', 'A narrativa não precisa ser inventada. Ela já existe na trajetória técnica e no contato real com minerais, gemas e processos.')
        ])
      ]
    },
    audience: {
      lead: 'A Spectra fala com públicos diferentes, mas todos compartilham uma mesma motivação: querem entender melhor a matéria antes de decidir o que fazer com ela.',
      sections: [
        section('Segments', 'Públicos prioritários', [
          card('ENTUSIASTAS', 'Curiosos e colecionadores', 'Pessoas fascinadas por minerais, gemas, geologia, lapidação e raridades. Buscam descoberta, repertório e peças interessantes.'),
          card('EDUCAÇÃO', 'Estudantes e professores', 'Precisam de informação clara, referência visual, kits, comparação e conteúdo confiável para aprender e ensinar.'),
          card('JOALHERIA', 'Profissionais e compradores de gemas', 'Buscam critérios de seleção, identificação, qualidade, lapidação, disponibilidade e confiança comercial.'),
          card('CONSUMIDOR FINAL', 'Quem quer comprar com segurança', 'Não precisa dominar gemologia, mas quer compreender naturalidade, características e valor antes da compra.')
        ]),
        section('Needs', 'Necessidades que a marca resolve', [
          card('ENTENDER', 'Traduzir complexidade', 'Explicar termos e diferenças sem infantilizar nem exigir conhecimento técnico prévio.'),
          card('CONFIAR', 'Reduzir assimetria de informação', 'Mostrar evidências, processos e critérios para diminuir insegurança em um mercado onde o consumidor frequentemente sabe menos que o vendedor.'),
          card('DESCOBRIR', 'Criar fascínio contínuo', 'Manter a sensação de que sempre existe algo novo para observar, comparar ou aprender dentro de uma pedra.')
        ])
      ]
    },
    personality: {
      lead: 'A Spectra deve soar como alguém que conhece profundamente o assunto, mas continua genuinamente fascinado por ele.',
      sections: [
        section('Traits', 'Traços de personalidade', [
          card('PRECISA', 'Rigor sem rigidez', 'Dados, nomenclaturas e afirmações precisam ser corretos, mas a comunicação não deve parecer acadêmica ou burocrática.'),
          card('CURIOSA', 'Descoberta permanente', 'A marca observa detalhes, testa, compara, explica e convida o público a olhar de novo.'),
          card('CONTEMPORÂNEA', 'Tecnologia com matéria', 'A linguagem visual e verbal pode ser avançada, desde que permaneça conectada a objetos e fenômenos reais.'),
          card('GENEROSA', 'Conhecimento compartilhado', 'Ensinar não é entregar menos valor; é a própria forma de construir autoridade e relacionamento.')
        ]),
        section('Boundaries', 'O que a personalidade evita', [
          card('EVITAR', 'Arrogância técnica', 'Nunca usar conhecimento para diminuir o público ou transformar dúvida em constrangimento.'),
          card('EVITAR', 'Misticismo como verdade científica', 'Conteúdos simbólicos, históricos ou culturais devem ser claramente diferenciados de afirmações técnicas ou científicas.'),
          card('EVITAR', 'Excesso futurista', 'A estética pode ser tecnológica, mas não deve desconectar a marca de pedra, peso, textura e origem natural.')
        ])
      ]
    },
    'verbal-identity': {
      lead: 'A voz da Spectra traduz complexidade em curiosidade. Ela explica, demonstra e compara com clareza, sem perder sofisticação.',
      sections: [
        section('Voice', 'Como a Spectra fala', [
          card('TOM', 'Claro e investigativo', 'Começar por uma pergunta, observação ou fenômeno e conduzir a pessoa até a explicação.'),
          card('VOCABULÁRIO', 'Técnico quando necessário', 'Usar termos corretos, mas sempre oferecer contexto simples quando uma palavra puder afastar quem está começando.'),
          card('RITMO', 'Frases objetivas + aprofundamento', 'Abrir com uma ideia curta e memorável; depois desenvolver com evidência, comparação e detalhe visual.'),
          card('PROVA', 'Mostrar antes de afirmar', 'Sempre que possível, usar imagem, teste, escala, detalhe, laudo, instrumento ou processo como evidência.')
        ]),
        section('Examples', 'Estruturas de mensagem', [
          card('HOOK', '“Parece igual. Não é.”', 'Boa abertura para conteúdos de comparação, identificação, tratamento, lapidação e qualidade.'),
          card('EDUCAÇÃO', '“O que você está vendo aqui?”', 'Convida o público a observar uma característica antes de explicar sua causa.'),
          card('PRODUTO', '“A beleza começa na matéria.”', 'Produto deve ser apresentado a partir da pedra, de sua característica e do que a torna interessante.')
        ])
      ]
    },
    messaging: {
      lead: 'A arquitetura de mensagens deve sempre partir da autoridade da Spectra e adaptar profundidade conforme a intenção: descobrir, entender, confiar ou comprar.',
      sections: [
        section('Hierarchy', 'Hierarquia de mensagens', [
          card('INSTITUCIONAL', 'Conhecer muda a forma de enxergar', 'Mensagem de marca: mineralogia e gemologia como conhecimento vivo, visual e aplicável.'),
          card('EDUCACIONAL', 'Observe, compare, entenda', 'Conteúdo que cria repertório e transforma seguidores em pessoas mais capazes de reconhecer valor.'),
          card('COMERCIAL', 'Escolha com informação', 'Oferta deve reduzir dúvida: características, origem disponível, material, medidas, tratamento quando aplicável e critérios claros.'),
          card('SERVIÇOS', 'Identificar antes de concluir', 'Laudos e avaliações devem comunicar método, evidência e segurança, não promessa absoluta sem exame.')
        ]),
        section('CTA', 'Chamadas para ação', [
          card('DESCOBERTA', 'Veja de perto', 'Para conteúdos visuais e educativos.'),
          card('CONVERSA', 'Envie sua dúvida', 'Para gerar diálogo sem transformar toda publicação em venda.'),
          card('CONVERSÃO', 'Conheça a gema / peça / serviço', 'CTA direto quando já existe contexto suficiente para a decisão.')
        ])
      ]
    },
    storytelling: {
      lead: 'A história da Spectra é uma vantagem competitiva porque conecta profissão, curiosidade, educação, matéria e negócio em uma sequência coerente.',
      sections: [
        section('Origin', 'Arco narrativo principal', [
          card('2017', 'Da geologia à coleção', 'O ponto de partida é um casal de geólogos, o interesse por minerais e rochas e a transformação desse repertório em uma atividade ligada a gemas.'),
          card('EDUCAÇÃO', 'Conhecimento como primeira entrega', 'Coleções e kits para professores, estudantes e colecionadores mostram que ensinar veio antes de ampliar o portfólio comercial.'),
          card('EVOLUÇÃO', 'Da pedra à lapidação', 'A entrada em lapidação e joalheria é consequência natural do aprofundamento sobre a matéria.'),
          card('2020', 'Marcas com papéis distintos', 'A divisão entre Spectra Minerais e Ana Rios organiza dois territórios: conhecimento/gemas e joalheria/expressão.')
        ]),
        section('Narrative rule', 'Como contar essa história', [
          card('COMEÇO', 'Partir de uma descoberta', 'Histórias funcionam melhor quando começam com uma pedra, dúvida, observação ou problema real.'),
          card('MEIO', 'Mostrar processo', 'Pesquisa, identificação, lapidação, seleção e fabricação tornam a história concreta.'),
          card('FIM', 'Entregar entendimento', 'Toda narrativa deve deixar uma ideia que o público consegue reconhecer ou aplicar depois.')
        ])
      ]
    },
    layout: {
      lead: 'O layout da Spectra precisa controlar a intensidade do espectro. Quanto mais expressiva a luz, mais silenciosa deve ser a estrutura ao redor.',
      sections: [
        section('Composition', 'Princípios de composição', [
          card('RESPIRO', 'Espaço como superfície de luz', 'Grandes áreas neutras criam o campo necessário para gradientes e imagens minerais terem impacto.'),
          card('HIERARQUIA', 'Uma ideia dominante', 'Cada tela ou peça deve ter um foco principal; múltiplos fenômenos cromáticos competindo reduzem percepção de precisão.'),
          card('GRID', 'Estrutura invisível', 'Alinhamentos rígidos e ritmo consistente compensam formas orgânicas, reflexos e refrações.'),
          card('DENSIDADE', 'Informação por camadas', 'Resumo primeiro, detalhe depois. A experiência deve permitir curiosidade sem despejar complexidade de uma vez.')
        ])
      ]
    },
    'brand-experience': {
      lead: 'A experiência Spectra deve fazer a pessoa sair sabendo mais do que sabia quando entrou — seja numa página, atendimento, embalagem, feira ou conteúdo.',
      sections: [
        section('Touchpoints', 'Princípios por ponto de contato', [
          card('DIGITAL', 'Descoberta guiada', 'Produto, conteúdo e serviço devem se conectar por contexto: o que é, por que importa e como observar.'),
          card('ATENDIMENTO', 'Explicar sem pressionar', 'A venda deve parecer consultiva: entender a dúvida, apresentar critérios e reduzir incerteza.'),
          card('FÍSICO', 'Matéria na mão', 'Exposição, embalagem e materiais impressos devem valorizar textura, escala, origem e observação direta.'),
          card('PÓS-VENDA', 'Continuar ensinando', 'Cuidados, conservação, características da gema e conteúdos relacionados prolongam a relação.')
        ]),
        section('Journey', 'Jornada de marca', [
          card('1', 'Atrair pela curiosidade', 'Fenômeno visual, pergunta, raridade ou comparação.'),
          card('2', 'Ensinar com clareza', 'Explicação acessível sustentada por prova.'),
          card('3', 'Construir confiança', 'Processo, transparência e consistência.'),
          card('4', 'Converter com contexto', 'Oferta entra quando a pessoa entende o que torna aquela escolha relevante.')
        ])
      ]
    },
    'brand-in-action': {
      lead: 'No Instagram e nos demais canais, a Spectra deve funcionar como uma publicação contínua sobre matéria, gemas e descoberta — não como um catálogo que ocasionalmente ensina.',
      sections: [
        section('Content pillars', 'Pilares editoriais', [
          card('01', 'Inteligência mineral', 'Identificação, propriedades, diferenças, tratamentos, inclusões, formação e curiosidades explicadas visualmente.'),
          card('02', 'Gema em detalhe', 'Macro, cor, lapidação, fenômenos ópticos, raridades e comparações que treinam o olhar.'),
          card('03', 'Processo e prova', 'Bastidores, instrumentos, avaliação, seleção, lapidação, fabricação e critérios de qualidade.'),
          card('04', 'Brasil mineral', 'Origem, diversidade de gemas brasileiras, cultura mineral e relação entre território e matéria.'),
          card('05', 'Produto com contexto', 'Produto entra associado a uma história, característica ou aprendizado — não isolado em fundo neutro com preço.')
        ]),
        section('Instagram system', 'Sistema para redes sociais', [
          card('REELS', 'Descoberta e demonstração', 'Começar com contraste visual ou pergunta concreta; mostrar a evidência rapidamente; aprofundar na legenda ou carrossel complementar.'),
          card('CARROSSEL', 'Ensino salvável', 'Comparações, guias, erros comuns, glossários visuais e sequências passo a passo.'),
          card('STORIES', 'Proximidade e rotina', 'Bastidores, perguntas, testes, chegada de gemas, enquetes e respostas rápidas criam frequência sem banalizar o feed.'),
          card('SÉRIES', 'Repetição reconhecível', 'Criar formatos fixos para que o público reconheça a proposta antes mesmo de ler o título.')
        ]),
        section('Conversion', 'Conteúdo também precisa mover a jornada', [
          card('ATRAIR', 'Curiosidade', 'Conteúdo fácil de compartilhar e entender sem contexto anterior.'),
          card('CONSIDERAR', 'Autoridade', 'Conteúdo que mostra método, repertório e critérios.'),
          card('CONVERTER', 'Oferta contextual', 'Produto ou serviço apresentado depois de demonstrar relevância e confiança.')
        ])
      ]
    },
    'ai-guidelines': {
      lead: 'IA pode acelerar produção e organização, mas nunca pode inventar fatos gemológicos, características de produto ou evidências de origem.',
      sections: [
        section('Guardrails', 'Regras obrigatórias', [
          card('DADOS', 'Não inventar especificações', 'Peso, dimensão, tratamento, naturalidade, origem, certificação e qualidade só podem aparecer quando existirem em fonte aprovada.'),
          card('CIÊNCIA', 'Separar fato de simbolismo', 'Não transformar tradição, crença ou narrativa cultural em alegação científica, terapêutica ou médica.'),
          card('IMAGEM', 'Não falsificar produto', 'Imagem gerada pode ilustrar conceito, mas não deve representar uma gema específica como se fosse fotografia documental.'),
          card('TEXTO', 'Explicar sem exagerar', 'Evitar superlativos não comprováveis, escassez artificial e linguagem que sugira certeza técnica sem evidência.')
        ])
      ]
    },
    governance: {
      lead: 'A força do sistema depende de consistência factual e visual. Toda nova regra precisa ter motivo, responsável e critério de validação.',
      sections: [
        section('Control', 'Governança da marca', [
          card('FONTE', 'Uma verdade por assunto', 'Paleta, tipografia, nomenclatura, mensagens e especificações precisam ter uma fonte oficial no sistema.'),
          card('APROVAÇÃO', 'Fato técnico exige revisão', 'Conteúdo gemológico, científico ou de produto deve ser validado por quem domina o assunto antes de publicação.'),
          card('EVOLUÇÃO', 'Registrar o porquê', 'Mudanças não devem apenas substituir valores; precisam documentar o motivo para evitar regressões e inconsistências.'),
          card('AUDITORIA', 'Revisão periódica', 'Comparar site, redes sociais, materiais comerciais e experiência física para identificar desvios entre identidade definida e identidade percebida.')
        ])
      ]
    }
  },

  sur: {
    'brand-core': {
      lead: 'Sür existe no território da matéria transformada com precisão. O valor está menos em ornamentar e mais em revelar construção, acabamento e presença física.',
      sections: [
        section('Essence', 'O núcleo da Sür', [
          card('ESSÊNCIA', 'Matéria com intenção', 'Metal, pedra, forma e acabamento são tratados como linguagem. O objeto precisa transmitir rigor antes de qualquer explicação.'),
          card('PROPÓSITO', 'Tornar processo visível', 'Valorizar inteligência construtiva e fabricação, aproximando design de técnica e execução.'),
          card('PROMESSA', 'Precisão perceptível', 'O cliente deve perceber qualidade em proporção, encaixe, superfície, peso e detalhe — não apenas em discurso.'),
          card('LIMITE', 'Sem luxo performático', 'A Sür evita excesso de ornamento, dourado digital, gradiente cromado ou linguagem de status sem relação com o objeto.')
        ])
      ]
    },
    strategy: {
      lead: 'A Sür deve ocupar um espaço de atelier contemporâneo em que engenharia, materialidade e acabamento funcionam como assinatura.',
      sections: [
        section('Positioning', 'Posicionamento estratégico', [
          card('POSIÇÃO', 'Atelier de precisão material', 'Uma marca orientada a construção, detalhe e objeto, com linguagem monocromática e disciplinada.'),
          card('DIFERENCIAL', 'Processo como desejo', 'Enquanto boa parte da categoria esconde fabricação atrás da imagem final, a Sür pode transformar processo e detalhe técnico em conteúdo aspiracional.'),
          card('TERRITÓRIO', 'Metal, corte, superfície, encaixe', 'Tudo que revela como uma peça existe fisicamente pertence ao universo da marca.'),
          card('NÃO SOMOS', 'Minimalismo vazio', 'Redução visual precisa ter densidade de material e técnica; não basta retirar elementos.')
        ]),
        section('Competitive lens', 'Leitura da categoria', [
          card('PADRÃO', 'Autoria e forma', 'Marcas de design costumam disputar originalidade formal. A Sür deve ir além e tornar a própria fabricação parte da autoria.'),
          card('WHITE SPACE', 'Engenharia silenciosa', 'Oportunidade de construir desejo por tolerância, superfície, espessura, encaixe, ferramenta e processo.'),
          card('VANTAGEM', 'Código reconhecível', 'Preto, prata, macro de matéria e linguagem objetiva podem formar um sistema imediatamente identificável.')
        ])
      ]
    },
    audience: {
      lead: 'A Sür fala com pessoas que percebem valor no detalhe e preferem objeto bem resolvido a excesso de códigos de luxo.',
      sections: [
        section('Segments', 'Públicos prioritários', [
          card('DESIGN', 'Pessoas orientadas por forma', 'Valorizam proporção, originalidade, material e coerência estética.'),
          card('PROCESSO', 'Quem gosta de saber como é feito', 'Enxerga fabricação e acabamento como parte do valor do produto.'),
          card('PRESENTE', 'Compra de objeto significativo', 'Busca uma peça com presença e permanência, sem depender de códigos românticos tradicionais.'),
          card('PROFISSIONAL', 'Arquitetos, designers e criativos', 'Tendem a responder bem a linguagem visual precisa, processo e referência material.')
        ])
      ]
    },
    personality: {
      lead: 'A personalidade da Sür é controlada, precisa e segura. Ela nunca precisa elevar a voz para parecer premium.',
      sections: [
        section('Traits', 'Traços de personalidade', [
          card('PRECISA', 'Nada por acaso', 'Espaço, palavra, fotografia e movimento devem parecer decididos.'),
          card('SILENCIOSA', 'Pouco ruído', 'A marca prefere poucas mensagens fortes a excesso de informação, adjetivos ou elementos visuais.'),
          card('TÁTIL', 'Física antes de digital', 'Sempre que possível, comunicar peso, textura, superfície, temperatura e acabamento.'),
          card('EXIGENTE', 'Detalhe é argumento', 'A marca não simplifica execução para parecer simples; ela usa complexidade técnica para chegar a um resultado limpo.')
        ])
      ]
    },
    'verbal-identity': {
      lead: 'A Sür fala pouco e com precisão. Texto deve ter a mesma economia de uma peça bem resolvida.',
      sections: [
        section('Voice', 'Como a Sür fala', [
          card('TOM', 'Direto e seguro', 'Frases curtas, poucos adjetivos e foco em matéria, processo e decisão de design.'),
          card('VOCABULÁRIO', 'Material e técnico', 'Superfície, corte, espessura, estrutura, encaixe, acabamento e proporção são palavras naturais da marca.'),
          card('RITMO', 'Pausa e espaço', 'Legendas podem ser mais curtas. A imagem e o objeto precisam ter tempo para falar.'),
          card('EVITAR', 'Luxo genérico', 'Evitar “exclusivo”, “sofisticado”, “perfeito” e outros adjetivos quando não houver algo concreto sustentando a afirmação.')
        ])
      ]
    },
    messaging: {
      lead: 'A mensagem da Sür parte do objeto e de sua construção. O benefício emocional surge da precisão percebida.',
      sections: [
        section('Hierarchy', 'Hierarquia de mensagens', [
          card('INSTITUCIONAL', 'A matéria fala através da precisão', 'Mensagem central que conecta identidade visual, processo e produto.'),
          card('PRODUTO', 'Forma, material, acabamento', 'Descrever o que torna a peça fisicamente diferente antes de recorrer a abstrações.'),
          card('PROCESSO', 'Feito para ser observado de perto', 'Bastidor deve destacar solução, dificuldade, ferramenta ou detalhe.'),
          card('CONVERSÃO', 'Conheça o objeto', 'CTA simples e coerente com uma marca que não precisa vender com urgência artificial.')
        ])
      ]
    },
    storytelling: {
      lead: 'A narrativa da Sür não precisa depender de uma biografia extensa. O protagonista é a transformação da matéria.',
      sections: [
        section('Narrative', 'Arco narrativo recorrente', [
          card('1', 'Material bruto', 'Começar pelo que existe fisicamente: metal, gema, superfície ou problema construtivo.'),
          card('2', 'Decisão', 'Mostrar por que determinada proporção, encaixe ou acabamento foi escolhido.'),
          card('3', 'Processo', 'Ferramenta, teste, erro, repetição e ajuste dão credibilidade.'),
          card('4', 'Objeto final', 'O resultado aparece como consequência do processo, não como imagem desconectada de sua fabricação.')
        ])
      ]
    },
    layout: {
      lead: 'O layout da Sür funciona como desenho técnico: alinhamento, proporção e vazio criam sensação de controle.',
      sections: [
        section('Composition', 'Princípios de composição', [
          card('GRID', 'Estrutura rígida', 'Usar alinhamentos claros, eixos e módulos consistentes.'),
          card('CONTRASTE', 'Preto, prata e branco', 'Profundidade nasce de contraste e material, não de gradientes.'),
          card('RECORTE', 'Detalhe ampliado', 'Macro e crop podem revelar textura e construção sem poluir a composição.'),
          card('RITMO', 'Poucos elementos por quadro', 'A sensação premium depende de foco e silêncio visual.')
        ])
      ]
    },
    'brand-experience': {
      lead: 'Toda experiência Sür deve reforçar a sensação de objeto preciso: interface, embalagem, atendimento e apresentação precisam parecer igualmente bem construídos.',
      sections: [
        section('Touchpoints', 'Princípios por ponto de contato', [
          card('DIGITAL', 'Interface sólida', 'Superfícies chapadas, hierarquia clara e microinterações curtas.'),
          card('FÍSICO', 'Material verdadeiro', 'Papel, metal, tecido e acabamento precisam ter qualidade tátil compatível com o discurso.'),
          card('ATENDIMENTO', 'Objetivo e consultivo', 'Explicar construção, material e possibilidade de personalização sem excesso de linguagem comercial.'),
          card('ENTREGA', 'Ritual contido', 'Apresentação precisa, poucos elementos e foco absoluto na peça.')
        ])
      ]
    },
    'brand-in-action': {
      lead: 'Nas redes sociais, a Sür deve parecer um atelier observado de perto: matéria, gesto, processo, detalhe e objeto.',
      sections: [
        section('Content pillars', 'Pilares editoriais', [
          card('01', 'Estudos de objeto', 'Peça isolada, ângulos, proporções e detalhes que mostrem presença física.'),
          card('02', 'Processo', 'Ferramentas, fabricação, ajustes, testes e decisões de construção.'),
          card('03', 'Matéria', 'Macro de metal, gema, textura, aresta, acabamento e transformação.'),
          card('04', 'Precisão', 'Conteúdos que mostrem medidas, encaixe, ergonomia, desenho ou solução técnica.'),
          card('05', 'Editorial monocromático', 'Campanhas com forte direção de arte, silêncio e consistência preto/prata.')
        ]),
        section('Instagram system', 'Sistema para redes sociais', [
          card('REELS', 'Processo hipnótico', 'Movimentos de ferramenta, acabamento e transformação funcionam melhor que vídeos excessivamente falados.'),
          card('CARROSSEL', 'Objeto explicado', 'Sequência de detalhe → decisão → processo → resultado.'),
          card('STORIES', 'Atelier em tempo real', 'Pequenos bastidores, testes, materiais e peças em andamento.'),
          card('COPY', 'Menos legenda, mais precisão', 'Texto complementa o que a imagem não consegue mostrar; não repete o óbvio.')
        ])
      ]
    },
    'ai-guidelines': {
      lead: 'IA deve apoiar organização e prototipagem, mas não pode substituir documentação real de material, processo ou produto.',
      sections: [
        section('Guardrails', 'Regras obrigatórias', [
          card('PRODUTO', 'Não simular como real', 'Render gerado precisa ser identificado quando não representa peça fabricada.'),
          card('PROCESSO', 'Bastidor deve ser verdadeiro', 'Não criar ferramentas, etapas ou técnicas inexistentes apenas para enriquecer storytelling.'),
          card('TEXTO', 'Sem adjetivo automático', 'Priorizar informação concreta e eliminar linguagem genérica de luxo produzida por IA.'),
          card('VISUAL', 'Preservar monocromia', 'IA não deve introduzir gradientes, efeitos holográficos ou códigos visuais fora do sistema.')
        ])
      ]
    },
    governance: {
      lead: 'A Sür precisa proteger principalmente consistência visual e qualidade de execução.',
      sections: [
        section('Control', 'Governança da marca', [
          card('VISUAL', 'Monocromia é regra', 'Novas cores só entram quando pertencem ao próprio material ou a uma coleção formalmente definida.'),
          card('PRODUTO', 'Imagem precisa corresponder ao objeto', 'Tratamento fotográfico não deve esconder acabamento, textura ou proporção real.'),
          card('COPY', 'Revisar excesso', 'Se o texto puder ser reduzido sem perder significado, reduzir.'),
          card('EVOLUÇÃO', 'Novo código precisa nascer do processo', 'Elementos gráficos novos devem ter relação justificável com matéria, técnica ou construção.')
        ])
      ]
    }
  },

  'ana-rios': {
    'brand-core': {
      lead: 'Ana Rios transforma a mesma matéria que a Spectra conhece e a Sür constrói em algo pessoal: joias que carregam identidade, vínculo e memória.',
      sections: [
        section('Essence', 'O núcleo da Ana Rios', [
          card('ESSÊNCIA', 'Matéria que vira memória', 'A joia não termina na pedra ou no metal; ela ganha sentido quando entra na vida de alguém.'),
          card('PROPÓSITO', 'Aproximar joia de personalidade', 'Criar desejo sem transformar luxo em distância. A peça deve parecer especial porque tem história, escolha e caráter.'),
          card('PROMESSA', 'Joia com presença e significado', 'Produto, atendimento e conteúdo devem equilibrar beleza, material natural, autoria e emoção.'),
          card('ORIGEM', 'Joalheria nascida da gema', 'A marca surge da evolução da Spectra para o universo das joias, mantendo o conhecimento de pedra natural como vantagem real.')
        ])
      ]
    },
    strategy: {
      lead: 'O território mais forte para Ana Rios não é competir apenas por “luxo” ou “design autoral”. É unir joia, gema natural, história e proximidade humana.',
      sections: [
        section('Positioning', 'Posicionamento estratégico', [
          card('POSIÇÃO', 'Joalheria autoral e humana', 'Uma marca que trata pedras naturais como personagens e joias como objetos de expressão pessoal.'),
          card('DIFERENCIAL', 'Conhecimento de gema + narrativa', 'A proximidade com a Spectra oferece repertório mineral que pode enriquecer produto e conteúdo de forma legítima.'),
          card('TERRITÓRIO', 'Corpo, memória, gema e gesto', 'Tudo que aproxima a peça da vida real pertence à Ana Rios.'),
          card('NÃO SOMOS', 'Luxo distante', 'Evitar códigos que transformem a marca em vitrine fria, inacessível ou genérica.')
        ]),
        section('Competitive lens', 'Leitura da categoria', [
          card('PADRÃO', 'Autoria, natureza e herança', 'Marcas brasileiras fortes frequentemente constroem desejo por designer, natureza, patrimônio ou linguagem formal própria.'),
          card('WHITE SPACE', 'A gema como história pessoal', 'Ana Rios pode ocupar um lugar mais íntimo: explicar a pedra, mostrar a peça no corpo e conectar escolha a ocasião, personalidade ou memória.'),
          card('VANTAGEM', 'Amplitude sem perder identidade', 'Gemas de cores diferentes podem variar entre coleções enquanto a base editorial quente mantém consistência.')
        ])
      ]
    },
    audience: {
      lead: 'A Ana Rios precisa organizar públicos por ocasião e motivação emocional, não apenas por idade ou renda.',
      sections: [
        section('Segments', 'Públicos prioritários', [
          card('AUTOEXPRESSÃO', 'Compra para si', 'Busca uma peça que converse com estilo, cor, personalidade e uso real.'),
          card('PRESENTE', 'Compra para marcar vínculo', 'Aniversário, conquista, agradecimento, nascimento, celebração e outros momentos em que significado importa.'),
          card('COMPROMISSO', 'Casais e alianças', 'Precisam de segurança, personalização, conforto, prazo e narrativa duradoura.'),
          card('GEMAS', 'Quem escolhe pela pedra', 'Consumidores atraídos primeiro por cor, raridade, simbolismo ou preferência por uma gema natural específica.')
        ]),
        section('Needs', 'Necessidades que a marca resolve', [
          card('ESCOLHER', 'Curadoria sem intimidação', 'Ajudar a pessoa a entender diferenças e encontrar algo que pareça pessoal.'),
          card('IMAGINAR', 'Ver a peça na vida', 'Fotografia e conteúdo devem mostrar corpo, escala, combinação e ocasião.'),
          card('SIGNIFICAR', 'Dar linguagem ao presente', 'História da gema, mensagem e contexto ajudam a transformar compra em memória.')
        ])
      ]
    },
    personality: {
      lead: 'Ana Rios é refinada, próxima e autoral. Ela tem repertório, mas não cria distância.',
      sections: [
        section('Traits', 'Traços de personalidade', [
          card('ELEGANTE', 'Sofisticação silenciosa', 'A marca prefere composição, detalhe e qualidade a excesso de símbolos de luxo.'),
          card('HUMANA', 'Corpo e história', 'Pessoas, gestos e relações são tão importantes quanto produto.'),
          card('AUTORAL', 'Curadoria reconhecível', 'Mesmo com variedade de gemas, fotografia, texto e composição precisam parecer escolhidos pela mesma sensibilidade.'),
          card('CALOROSA', 'Proximidade sem informalidade excessiva', 'A linguagem pode ser afetiva e conversacional sem perder refinamento.')
        ])
      ]
    },
    'verbal-identity': {
      lead: 'A voz da Ana Rios é editorial e íntima. Ela descreve sensação e história, mas ancora o texto em detalhes reais da peça e da gema.',
      sections: [
        section('Voice', 'Como Ana Rios fala', [
          card('TOM', 'Poético com medida', 'Usar imagem e emoção, mas sem transformar toda descrição em metáfora abstrata.'),
          card('VOCABULÁRIO', 'Cor, gesto, memória, forma', 'Palavras ligadas a corpo, luz, ocasião, textura e personalidade ajudam a tornar a joia viva.'),
          card('RITMO', 'Editorial', 'Frases podem respirar mais, com títulos curtos e textos que criam atmosfera.'),
          card('PROVA', 'Detalhe material', 'Depois da emoção, sempre trazer informação concreta: gema, metal, lapidação, tamanho, produção ou acabamento.')
        ])
      ]
    },
    messaging: {
      lead: 'A mensagem da Ana Rios deve fazer a pessoa se imaginar usando, presenteando ou guardando aquela peça antes de falar de especificações.',
      sections: [
        section('Hierarchy', 'Hierarquia de mensagens', [
          card('INSTITUCIONAL', 'Joias que carregam histórias', 'Marca como território de expressão, memória e matéria natural.'),
          card('PRODUTO', 'Começar pelo caráter da peça', 'Cor, gesto, personalidade e ocasião abrem a narrativa; especificações confirmam a escolha.'),
          card('PRESENTE', 'Marcar um momento', 'A comunicação deve ajudar o comprador a nomear o significado do gesto.'),
          card('CONVERSÃO', 'Encontre a peça que parece sua', 'CTA consultivo e pessoal funciona melhor que urgência genérica.')
        ])
      ]
    },
    storytelling: {
      lead: 'A narrativa da Ana Rios conecta a origem mineral da Spectra a histórias de uso, afeto e expressão pessoal.',
      sections: [
        section('Narrative', 'Arcos narrativos da marca', [
          card('ORIGEM', 'Da gema à joia', 'Mostrar que a marca nasce de conhecimento real sobre pedra natural e evolui para expressão através da joalheria.'),
          card('PEÇA', 'Uma escolha de design', 'Cada joia pode ser contada a partir de uma pedra, forma, encaixe ou intenção.'),
          card('PESSOA', 'A vida completa o objeto', 'Cliente, ocasião, presente, combinação e memória transformam produto em história.'),
          card('COLEÇÃO', 'Um tema, muitas gemas', 'Coleções devem ter uma ideia narrativa que organize cor, fotografia, nomes e conteúdo.')
        ])
      ]
    },
    layout: {
      lead: 'O layout da Ana Rios precisa parecer uma publicação editorial: imagem, tipografia e respiro constroem desejo antes de qualquer efeito digital.',
      sections: [
        section('Composition', 'Princípios de composição', [
          card('RESPIRO', 'Luxo pelo espaço', 'Evitar densidade comercial excessiva e deixar produto, pele e tipografia respirarem.'),
          card('ASSIMETRIA', 'Composição mais humana', 'Deslocamentos e crops editoriais criam uma linguagem menos rígida que a Sür.'),
          card('ESCALA', 'Imagem protagonista', 'Macro de gema e fotografia no corpo podem ocupar grande parte da composição.'),
          card('DETALHE', 'Filetes e acentos', 'Champagne, vinho e elementos gráficos entram de forma contida, sem gradiente institucional.')
        ])
      ]
    },
    'brand-experience': {
      lead: 'A experiência Ana Rios deve transformar compra em escolha assistida e entrega em ritual pessoal.',
      sections: [
        section('Touchpoints', 'Princípios por ponto de contato', [
          card('DIGITAL', 'Inspirar e orientar', 'Produto precisa combinar atmosfera editorial com informação objetiva suficiente para decisão.'),
          card('ATENDIMENTO', 'Curadoria pessoal', 'Perguntar ocasião, estilo, gema, uso e orçamento para ajudar a encontrar a peça certa.'),
          card('EMBALAGEM', 'Presente antes de abrir', 'Materiais, mensagem e apresentação devem prolongar a sensação de cuidado.'),
          card('PÓS-VENDA', 'Memória e cuidado', 'Orientação sobre conservação, história da gema e convite para compartilhar o momento fortalecem vínculo.')
        ])
      ]
    },
    'brand-in-action': {
      lead: 'Nas redes sociais, Ana Rios deve equilibrar desejo, identificação e conhecimento. O feed não pode virar catálogo nem revista distante demais da vida real.',
      sections: [
        section('Content pillars', 'Pilares editoriais', [
          card('01', 'Joia no corpo', 'Styling, movimento, escala e combinações mostram como a peça participa da vida.'),
          card('02', 'Gema protagonista', 'Macro, cor, lapidação e pequenas histórias sobre a pedra criam desejo e repertório.'),
          card('03', 'Histórias de ocasião', 'Presentes, conquistas, casamentos, aniversários e escolhas pessoais humanizam produto.'),
          card('04', 'Atelier e processo', 'Bastidores de criação, montagem, acabamento e personalização constroem autoria e confiança.'),
          card('05', 'Editorial de coleção', 'Campanhas com direção de arte forte consolidam personalidade e criam imagens de marca memoráveis.'),
          card('06', 'Curadoria e cuidado', 'Como escolher, combinar, presentear, conservar e entender diferentes tipos de joia.')
        ]),
        section('Instagram system', 'Sistema para redes sociais', [
          card('REELS', 'Movimento e identificação', 'Peça no corpo, transformação de look, detalhe em movimento, processo e histórias curtas de cliente ou ocasião.'),
          card('CARROSSEL', 'Curadoria salvável', 'Guias de presente, combinações, diferenças entre gemas, cuidados e storytelling de coleção.'),
          card('STORIES', 'Proximidade', 'Bastidores, provas, votação de gemas, atendimento, novidades e contexto diário.'),
          card('SÉRIES', 'Formatos recorrentes', 'Ex.: “A pedra da semana”, “Como usar”, “Por trás da peça” e “Histórias que viraram joia”.')
        ]),
        section('Conversion', 'Conteúdo e jornada', [
          card('ATRAIR', 'Identificação e desejo', 'Conteúdo visual com corpo, cor e história.'),
          card('CONSIDERAR', 'Curadoria e prova', 'Detalhe, gema, processo, comparação e resposta a dúvidas.'),
          card('CONVERTER', 'Atendimento próximo', 'CTA para conversar, escolher tamanho, personalizar ou encontrar uma peça para determinada ocasião.')
        ])
      ]
    },
    'ai-guidelines': {
      lead: 'IA pode apoiar conceito, variações e produção editorial, mas não deve apagar a materialidade real da joia nem inventar características do produto.',
      sections: [
        section('Guardrails', 'Regras obrigatórias', [
          card('PRODUTO', 'Não alterar a peça real', 'Imagens de venda não podem mudar cor da gema, quantidade de pedras, proporção, metal, acabamento ou construção.'),
          card('PESSOAS', 'Evitar perfeição artificial', 'Campanhas geradas não devem criar um padrão humano irreal que contradiga a proximidade da marca.'),
          card('COPY', 'Emoção com verdade', 'Não inventar origem, significado histórico, raridade ou promessa energética para tornar a descrição mais sedutora.'),
          card('COLEÇÕES', 'IA como exploração, não autoria final', 'Pode ajudar a testar direções, mas decisões finais precisam passar por curadoria humana e pelo sistema de marca.')
        ])
      ]
    },
    governance: {
      lead: 'A Ana Rios precisa proteger coerência editorial sem impedir que cada coleção tenha personalidade própria.',
      sections: [
        section('Control', 'Governança da marca', [
          card('BASE', 'A identidade institucional permanece estável', 'Marfim, vinho, champagne, tipografia e direção editorial sustentam a marca entre coleções.'),
          card('COLEÇÃO', 'Cores de gema são episódicas', 'Novas cores podem entrar por produto ou coleção sem automaticamente virar cor institucional.'),
          card('PRODUTO', 'Especificação é factual', 'Descrição emocional nunca substitui informação correta sobre gema, metal, medidas e fabricação.'),
          card('AUDITORIA', 'Revisar coerência entre canais', 'Instagram, site, embalagem e atendimento precisam contar a mesma história com níveis diferentes de profundidade.')
        ])
      ]
    }
  }
};

export function getBrandFramework(brandKey, pageId) {
  return brandFramework[brandKey]?.[pageId] || null;
}
