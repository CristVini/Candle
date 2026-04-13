export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- HERBAIS / TERAPÊUTICOS ---
  "Alecrim": {
    name: "Alecrim",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco",
    description: "Estimula a concentração, melhora a memória e combate o cansaço mental."
  },
  "Alecrim Blanc": {
    name: "Alecrim Blanc",
    image: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    benefit: "Clareza",
    description: "Traz clareza mental com uma sensação limpa e sofisticada."
  },
  "Alfazema": {
    name: "Alfazema",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Relaxamento",
    description: "Acalma a mente, reduz ansiedade e promove relaxamento profundo."
  },
  "Arruda": {
    name: "Arruda",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Limpeza",
    description: "Conhecida por limpeza energética e proteção emocional."
  },
  "Arnica": {
    name: "Arnica",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Alívio",
    description: "Transmite alívio e conforto físico, ideal para relaxamento corporal."
  },
  "Andiroba": {
    name: "Andiroba",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    benefit: "Cuidado",
    description: "Promove sensação de cuidado e equilíbrio do corpo."
  },
  "Babosa": {
    name: "Babosa",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
    benefit: "Leveza",
    description: "Refrescante e suave, traz sensação de leveza e renovação."
  },
  "Aloe Vera": {
    name: "Aloe Vera",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=800",
    benefit: "Frescor",
    description: "Acalma, hidrata e transmite frescor natural."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515544832579-37385966969b?auto=format&fit=crop&q=80&w=800",
    benefit: "Anti-Estresse",
    description: "Reduz estresse, ansiedade e traz sensação de leveza."
  },
  "Camomila": {
    name: "Camomila",
    image: "https://images.unsplash.com/photo-1515531737ef9-994323136709?auto=format&fit=crop&q=80&w=800",
    benefit: "Sono",
    description: "Acalma emoções, ajuda no relaxamento e melhora o sono."
  },
  "Calêndula": {
    name: "Calêndula",
    image: "https://images.unsplash.com/photo-1508711316410-0255502c98d6?auto=format&fit=crop&q=80&w=800",
    benefit: "Bem-estar",
    description: "Suave e reconfortante, promove bem-estar emocional."
  },
  "Cedro": {
    name: "Cedro",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800",
    benefit: "Segurança",
    description: "Traz estabilidade, segurança e sensação de aterramento."
  },
  "Copaíba": {
    name: "Copaíba",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800",
    benefit: "Anti-Tensão",
    description: "Relaxante, ajuda a aliviar tensões físicas e mentais."
  },
  "Erva Cidreira": {
    name: "Erva Cidreira",
    image: "https://images.unsplash.com/photo-1515544832579-37385966969b?auto=format&fit=crop&q=80&w=800",
    benefit: "Tranquilidade",
    description: "Reduz ansiedade e promove tranquilidade."
  },
  "Erva Doce": {
    name: "Erva Doce",
    image: "https://images.unsplash.com/photo-1530224416911-3075813f5035?auto=format&fit=crop&q=80&w=800",
    benefit: "Conforto",
    description: "Acolhedora, diminui irritação e promove conforto emocional."
  },
  "Eucalipto": {
    name: "Eucalipto",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800",
    benefit: "Respiração",
    description: "Refrescante, limpa a mente e melhora a respiração."
  },
  "Hortelã": {
    name: "Hortelã",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Energia",
    description: "Energizante, melhora foco e disposição."
  },
  "Hortelã Pimenta": {
    name: "Hortelã Pimenta",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Estímulo",
    description: "Estimula a mente e combate o cansaço."
  },
  "Mirra": {
    name: "Mirra",
    image: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio",
    description: "Introspectiva, auxilia no equilíbrio emocional."
  },
  "Olíbano": {
    name: "Olíbano",
    image: "https://images.unsplash.com/photo-1572451479139-6a308211d8be?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz",
    description: "Promove paz interior e conexão espiritual."
  },
  "Patchouly": {
    name: "Patchouly",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800",
    benefit: "Presença",
    description: "Estabiliza emoções e traz sensação de presença."
  },
  "Sândalo": {
    name: "Sândalo",
    image: "https://images.unsplash.com/photo-1621262070138-0857c3272445?auto=format&fit=crop&q=80&w=800",
    benefit: "Acalmar",
    description: "Acalma profundamente e promove equilíbrio emocional."
  },
  "Pinho": {
    name: "Pinho",
    image: "https://images.unsplash.com/photo-1547619292-24040a7a5d7a?auto=format&fit=crop&q=80&w=800",
    benefit: "Limpeza",
    description: "Conhecido por limpeza energética e proteção emocional."
  },

  // --- FRUTADOS ---
  "Abacaxi": {
    name: "Abacaxi",
    image: "https://images.unsplash.com/photo-1550258114-b834e70e9be1?auto=format&fit=crop&q=80&w=800",
    benefit: "Leveza",
    description: "Refresca e alegra, traz sensação de leveza e energia."
  },
  "Cereja": {
    name: "Cereja",
    image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&q=80&w=800",
    benefit: "Aconchego",
    description: "Doce e envolvente, cria um clima aconchegante."
  },
  "Frutas Vermelhas": {
    name: "Frutas Vermelhas",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
    benefit: "Positividade",
    description: "Energizante e marcante, desperta emoções positivas."
  },
  "Maracujá": {
    name: "Maracujá",
    image: "https://images.unsplash.com/photo-1589307304022-303726710777?auto=format&fit=crop&q=80&w=800",
    benefit: "Calmante",
    description: "Calmante natural, reduz ansiedade."
  },
  "Morango": {
    name: "Morango",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
    benefit: "Romantismo",
    description: "Doce e romântico, desperta sensações agradáveis."
  },

  // --- GOURMAND ---
  "Baunilha": {
    name: "Baunilha",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Conforto",
    description: "Extremamente acolhedora, reduz ansiedade e traz conforto."
  },
  "Black Vanilla": {
    name: "Black Vanilla",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Luxo",
    description: "Intensa e sofisticada, promove sensação de luxo."
  },
  "Chocolate": {
    name: "Chocolate",
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=800",
    benefit: "Prazer",
    description: "Estimula prazer e bem-estar emocional."
  },
  "Caramelo": {
    name: "Caramelo",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785943?auto=format&fit=crop&q=80&w=800",
    benefit: "Relaxar",
    description: "Quente e aconchegante, ideal para relaxar."
  },
  "Doce de Leite": {
    name: "Doce de Leite",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785943?auto=format&fit=crop&q=80&w=800",
    benefit: "Carinho",
    description: "Extremamente acolhedor, transmite carinho e conforto."
  },
  "Café": {
    name: "Café",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco",
    description: "Energizante, estimula foco e disposição."
  },
  "Mel": {
    name: "Mel",
    image: "https://images.unsplash.com/photo-1471943311424-646960669fba?auto=format&fit=crop&q=80&w=800",
    benefit: "Bem-estar",
    description: "Doce e calmante, promove bem-estar."
  },

  // --- FLORAIS ---
  "Lavanda": {
    name: "Lavanda",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Antiestresse",
    description: "Relaxante profunda, reduz estresse e ansiedade."
  },
  "Lavanda Francesa": {
    name: "Lavanda Francesa",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Tranquilidade",
    description: "Equilíbrio emocional e tranquilidade mental."
  },
  "Jasmim": {
    name: "Jasmim",
    image: "https://images.unsplash.com/photo-1508711316410-0255502c98d6?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoestima",
    description: "Estimulante emocional, aumenta autoestima."
  },
  "Rosa": {
    name: "Rosa",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    benefit: "Amor",
    description: "Promove amor, conforto e equilíbrio emocional."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Acolhimento",
    description: "Calmante e acolhedora."
  }
};