export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- ANTERIORES (Mantidos para compatibilidade) ---
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

  // --- COMBINAÇÕES / ESPECIAIS ---
  "Cereja c/ Avelã": {
    name: "Cereja c/ Avelã",
    image: "",
    benefit: "Aconchego",
    description: "Doce e envolvente, combina aconchego com sofisticação, ideal para relaxar e criar um clima acolhedor."
  },
  "Morango c/ Champanhe": {
    name: "Morango c/ Champanhe",
    image: "",
    benefit: "Celebração",
    description: "Leve, sofisticado e levemente efervescente, desperta alegria e sensação de celebração."
  },
  "Pêra c/ Chantilly": {
    name: "Pêra c/ Chantilly",
    image: "",
    benefit: "Conforto",
    description: "Suave e cremosa, transmite conforto emocional e delicadeza."
  },
  "Maçã c/ Canela": {
    name: "Maçã c/ Canela",
    image: "",
    benefit: "Lar",
    description: "Quente e acolhedora, perfeita para relaxar e trazer sensação de lar."
  },
  "Chocolate c/ Pimenta": {
    name: "Chocolate c/ Pimenta",
    image: "",
    benefit: "Energia",
    description: "Estimulante e envolvente, desperta energia e sensualidade."
  },
  "Eucalipto c/ Bergamota": {
    name: "Eucalipto c/ Bergamota",
    image: "",
    benefit: "Humor",
    description: "Refrescante com toque cítrico, limpa a mente e melhora o humor."
  },
  "Lavanda Francesa": {
    name: "Lavanda Francesa",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Calmante",
    description: "Profundamente calmante, ajuda a desacelerar pensamentos e reduzir ansiedade."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515544832579-37385966969b?auto=format&fit=crop&q=80&w=800",
    benefit: "Clareza",
    description: "Leve e refrescante, reduz estresse e promove clareza mental."
  },
  "Coco Queimado": {
    name: "Coco Queimado",
    image: "",
    benefit: "Aconchego",
    description: "Quente e intenso, traz sensação de aconchego e conforto."
  },
  "Café em Grãos": {
    name: "Café em Grãos",
    image: "",
    benefit: "Foco",
    description: "Energizante e marcante, estimula foco e produtividade."
  },
  "Café Torrado": {
    name: "Café Torrado",
    image: "",
    benefit: "Conforto",
    description: "Intenso e acolhedor, ativa a mente com sensação de conforto."
  },

  // --- PERFUMADOS / MARCA ---
  "Love Spell": {
    name: "Love Spell",
    image: "",
    benefit: "Feminilidade",
    description: "Doce e encantador, desperta feminilidade e bem-estar."
  },
  "Donna Spark": {
    name: "Donna Spark",
    image: "",
    benefit: "Elegância",
    description: "Sofisticado e moderno, transmite elegância e confiança."
  },
  "Douvie": {
    name: "Douvie",
    image: "",
    benefit: "Acolhedor",
    description: "Delicado e envolvente, ideal para criar um ambiente acolhedor."
  },
  "Eco Brasilis": {
    name: "Eco Brasilis",
    image: "",
    benefit: "Equilíbrio",
    description: "Fresco e natural, conecta com sensação de natureza e equilíbrio."
  },
  "Iguatemi": {
    name: "Iguatemi",
    image: "",
    benefit: "Sofisticação",
    description: "Elegante e marcante, remete a luxo e sofisticação."
  },
  "Marine": {
    name: "Marine",
    image: "",
    benefit: "Tranquilidade",
    description: "Fresco e aquático, transmite leveza e tranquilidade."
  },
  "Noite Feliz": {
    name: "Noite Feliz",
    image: "",
    benefit: "Relaxar",
    description: "Suave e aconchegante, ideal para relaxar no fim do dia."
  },
  "Palmoluxo": {
    name: "Palmoluxo",
    image: "",
    benefit: "Frescor",
    description: "Limpo e sofisticado, sensação de banho e frescor."
  },

  // --- OUTROS IMPORTANTES ---
  "Breu Branco": {
    name: "Breu Branco",
    image: "",
    benefit: "Purificação",
    description: "Purificante, muito usado para limpeza energética e espiritual."
  },
  "Cipreste": {
    name: "Cipreste",
    image: "",
    benefit: "Renovação",
    description: "Ajuda na renovação emocional e sensação de recomeço."
  },
  "Citronela": {
    name: "Citronela",
    image: "",
    benefit: "Proteção",
    description: "Refrescante e estimulante, traz sensação de proteção e limpeza."
  },
  "Cravo e Canela": {
    name: "Cravo e Canela",
    image: "",
    benefit: "Energia",
    description: "Quente e estimulante, ativa energia e disposição."
  },
  "Cupuaçu": {
    name: "Cupuaçu",
    image: "",
    benefit: "Bem-estar",
    description: "Doce e exótico, promove conforto e bem-estar."
  },
  "Dama da Noite": {
    name: "Dama da Noite",
    image: "",
    benefit: "Sensorial",
    description: "Intenso e envolvente, cria um clima relaxante e sensorial."
  },
  "Figo em Calda": {
    name: "Figo em Calda",
    image: "",
    benefit: "Aconchego",
    description: "Doce e sofisticado, transmite aconchego e elegância."
  }
};