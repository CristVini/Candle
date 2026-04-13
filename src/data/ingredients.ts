export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- HERBAIS / TERAPÊUTICOS ---
  "Alecrim Blanc": {
    name: "Alecrim Blanc",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco e Clareza",
    description: "O 'óleo do estudante'. Estimula a memória, a concentração e a coragem para agir, expulsando o cansaço mental."
  },
  "Bamboo": {
    name: "Bamboo",
    image: "https://images.unsplash.com/photo-1534431215433-255d67873299?auto=format&fit=crop&q=80&w=800",
    benefit: "Renovação",
    description: "Traz a sensação de leveza e frescor. É ideal para purificar o ambiente e renovar as energias após dias pesados."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515544832579-37385966969b?auto=format&fit=crop&q=80&w=800",
    benefit: "Acalmar o Fluxo",
    description: "Reduz a hiperatividade mental e ajuda a organizar os pensamentos em momentos de pressão extrema."
  },
  "Pinho": {
    name: "Pinho",
    image: "https://images.unsplash.com/photo-1547619292-24040a7a5d7a?auto=format&fit=crop&q=80&w=800",
    benefit: "Liberação",
    description: "Conhecido como o 'óleo da liberação', ajuda a eliminar a culpa, o ressentimento e o cansaço mental profundo."
  },
  "Patchouly": {
    name: "Patchouly",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    benefit: "Presença",
    description: "O 'óleo do aterramento'. Fortalece a conexão com o corpo e ajuda a dissipar a ansiedade de quem vive no futuro."
  },

  // --- GOURMAND (AS QUE MAIS VENDEM) ---
  "Black Vanilla": {
    name: "Black Vanilla",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Nutrição Emocional",
    description: "Remete ao acolhimento e à doçura. Dissolve a rigidez e a amargura, permitindo que a pessoa se sinta segura e amada."
  },
  "Caramelo": {
    name: "Caramelo",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785943?auto=format&fit=crop&q=80&w=800",
    benefit: "Poder do Conforto",
    description: "Traz uma sensação imediata de recompensa e prazer, ajudando a aliviar o estresse acumulado durante o dia."
  },
  "Café Gourmet": {
    name: "Café Gourmet",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    benefit: "Vigor e Ação",
    description: "Estimula o sistema nervoso para a ação imediata. Desperta os sentidos e traz motivação para novos projetos."
  },
  "Mel": {
    name: "Mel",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&q=80&w=800",
    benefit: "Regeneração",
    description: "Símbolo milenar de cura e abundância. Traz doçura para momentos de aridez e ajuda a digerir experiências difíceis."
  },

  // --- FRUTADOS / DOCES ---
  "Cereja c/ Avelã": {
    name: "Cereja c/ Avelã",
    image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoamor",
    description: "Uma combinação sedutora que desperta a sensualidade e o cuidado consigo mesma, elevando a autoestima."
  },
  "Figo em Calda": {
    name: "Figo em Calda",
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?auto=format&fit=crop&q=80&w=800",
    benefit: "Sofisticação",
    description: "Um aroma exótico que remete ao luxo e à plenitude. Ajuda a criar uma atmosfera de abundância e gratidão."
  },

  // --- FLORAIS / SOFISTICADOS ---
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Alívio Traumático",
    description: "Um bálsamo para o sistema nervoso. Ajuda a acalmar pânicos e choques, trazendo doçura regeneradora para a alma."
  },
  "Lavanda": {
    name: "Lavanda",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Calma Absoluta",
    description: "A essência universal da paz. Silencia o ruído mental e prepara o corpo e a mente para um repouso profundo."
  },
  "Âmbar Lelis": {
    name: "Âmbar Lelis",
    image: "https://images.unsplash.com/photo-1589307304022-303726710777?auto=format&fit=crop&q=80&w=800",
    benefit: "Proteção Magnética",
    description: "Um aroma quente e amadeirado que cria um escudo de proteção energética e traz conforto ancestral."
  },

  // --- CÍTRICOS / ESPECIARIAS ---
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=80&w=800",
    benefit: "Otimismo",
    description: "O 'raio de sol líquido'. Transmuta a tristeza em alegria e ajuda a dissipar sentimentos de autocrítica."
  },
  "Canela": {
    name: "Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=80&w=800",
    benefit: "Vitalidade",
    description: "O 'óleo da paixão'. Aquece corações gelados pelo isolamento e estimula a criatividade estagnada."
  },
  "Chá Branco": {
    name: "Chá Branco",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio",
    description: "Simboliza a pureza e a simplicidade. Excelente para momentos de meditação e busca por harmonia interior."
  }
};