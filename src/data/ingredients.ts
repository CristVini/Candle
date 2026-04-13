export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  "Pinho": {
    name: "Pinho",
    image: "https://images.unsplash.com/photo-1547619292-24040a7a5d7a?auto=format&fit=crop&q=80&w=800",
    benefit: "Liberação Emocional",
    description: "Conhecido como o 'óleo da liberação', o Pinho ajuda a eliminar a culpa, o ressentimento e o cansaço mental profundo, trazendo a sensação de um novo fôlego."
  },
  "Lavanda Francesa": {
    name: "Lavanda Francesa",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz Interior",
    description: "Considerada a 'mãe da aromaterapia', ela envolve o sistema nervoso em um manto de segurança, silenciando o barulho mental e dissolvendo a ansiedade."
  },
  "Patchouli": {
    name: "Patchouli",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    benefit: "Aterramento",
    description: "O 'óleo da presença'. Ele ajuda a trazer a mente de volta ao corpo, combatendo o excesso de pensamentos e conectando você com sua força instintiva."
  },
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoestima",
    description: "Conhecida como 'o raio de sol líquido', a Bergamota transmuta a tristeza em alegria e ajuda a dissipar sentimentos de inadequação e autocrítica."
  },
  "Sândalo": {
    name: "Sândalo",
    image: "https://images.unsplash.com/photo-1621262070138-0857c3272445?auto=format&fit=crop&q=80&w=800",
    benefit: "Quietude Espiritual",
    description: "Um aroma sagrado que induz a estados profundos de introspecção. É o óleo da quietude, perfeito para silenciar o ego e encontrar clareza."
  },
  "Cedro": {
    name: "Cedro",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Estrutura e Foco",
    description: "O 'óleo da persistência'. O Cedro traz força e estabilidade em momentos de crise, ajudando a manter a coluna ereta diante dos desafios da vida."
  },
  "Eucalipto": {
    name: "Eucalipto",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800",
    benefit: "Expansão",
    description: "Promove a abertura das vias respiratórias e emocionais. Ajuda a 'limpar o ar' após conflitos, trazendo uma sensação de liberdade e renovação."
  },
  "Hortelã-Pimenta": {
    name: "Hortelã-Pimenta",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Clareza Mental",
    description: "Um tônico para o intelecto. Conhecido como o 'óleo da mente vibrante', ele expulsa a névoa mental e aumenta a velocidade do raciocínio."
  },
  "Alecrim": {
    name: "Alecrim",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Memória e Ação",
    description: "O 'óleo do foco'. Estimula a retenção de informação e a coragem para agir, sendo o companheiro ideal para quem precisa de produtividade."
  },
  "Canela": {
    name: "Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=80&w=800",
    benefit: "Aquecimento",
    description: "O 'óleo da paixão'. Aquece o coração gelado pelo isolamento social e estimula a libido e a criatividade estagnadas."
  },
  "Vetiver": {
    name: "Vetiver",
    image: "https://images.unsplash.com/photo-1540206276207-3af25c08abbb?auto=format&fit=crop&q=80&w=800",
    benefit: "Aterramento Profundo",
    description: "Extraído de raízes profundas, ele é o calmante natural mais potente da aromaterapia. É o óleo para quem se sente 'fora do corpo' ou desconectado."
  },
  "Mirra": {
    name: "Mirra",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Cura Emocional",
    description: "O 'óleo da terra mãe'. Ajuda a curar feridas emocionais profundas e promove um senso de confiança no fluxo natural da vida."
  },
  "Incenso": {
    name: "Incenso",
    image: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800",
    benefit: "Conexão Espiritual",
    description: "Conhecido como o 'Rei dos Óleos'. Ele eleva a vibração energética, ajuda a romper vínculos com o passado e promove estados elevados de consciência."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Alívio Traumático",
    description: "Um bálsamo para o sistema nervoso. Ajuda a acalmar pânicos e choques emocionais, trazendo uma doçura regeneradora para a alma."
  },
  "Limão Siciliano": {
    name: "Limão Siciliano",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Purificação",
    description: "O 'óleo da limpeza'. Purifica ambientes e mentes carregadas de pensamentos repetitivos, trazendo leveza e brilho para o dia a dia."
  },
  "Âmbar": {
    name: "Âmbar",
    image: "https://images.unsplash.com/photo-1589307304022-303726710777?auto=format&fit=crop&q=80&w=800",
    benefit: "Proteção",
    description: "Sua resina fóssil simboliza o tempo e a sabedoria. Ele cria um escudo de proteção energética e traz um conforto ancestral e magnético."
  },
  "Baunilha Negra": {
    name: "Baunilha Negra",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Nutrição Emocional",
    description: "Remete ao acolhimento do colo materno. Dissolve a rigidez e a amargura, permitindo que a pessoa se sinta amada e segura."
  },
  "Grapefruit": {
    name: "Grapefruit",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
    benefit: "Respeito ao Corpo",
    description: "Ajuda a melhorar a relação com a própria imagem física. É o 'óleo da aceitação', que traz uma energia vibrante de renovação celular e mental."
  },
  "Camomila": {
    name: "Camomila",
    image: "https://images.unsplash.com/photo-1515531737ef9-994323136709?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz Profunda",
    description: "O 'óleo do propósito'. Ajuda a acalmar a insatisfação e a agitação de quem procura seu lugar no mundo, trazendo serenidade para esperar o tempo certo."
  },
  "Mel": {
    name: "Mel",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&q=80&w=800",
    benefit: "Doçura e Cura",
    description: "Símbolo de regeneração e abundância. Traz doçura para os momentos de aridez emocional e ajuda a digerir experiências difíceis."
  },
  "Fava Tonka": {
    name: "Fava Tonka",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio Magnético",
    description: "Conhecida por seu poder de sedução e mistério, ela ajuda a equilibrar as energias yin e yang, promovendo um carisma natural e sereno."
  }
};