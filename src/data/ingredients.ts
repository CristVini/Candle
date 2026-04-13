export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- HERBAIS / TERAPÊUTICOS ---
  "Alecrim": { name: "Alecrim", image: "", benefit: "Foco", description: "Estimula a concentração, melhora a memória e combate o cansaço mental." },
  "Alecrim Blanc": { name: "Alecrim Blanc", image: "", benefit: "Clareza", description: "Traz clareza mental com uma sensação limpa e sofisticada." },
  "Alfazema": { name: "Alfazema", image: "", benefit: "Relaxamento", description: "Acalma a mente, reduz ansiedade e promove relaxamento profundo." },
  "Lavanda": { name: "Lavanda", image: "", benefit: "Paz Interior", description: "O padrão ouro do relaxamento. Reduz os níveis de cortisol e prepara o corpo para o repouso." },
  "Arruda": { name: "Arruda", image: "", benefit: "Limpeza", description: "Conhecida por limpeza energética e proteção emocional." },
  "Capim Limão": { name: "Capim Limão", image: "", benefit: "Anti-Estresse", description: "Reduz estresse, ansiedade e traz sensação de leveza." },
  "Camomila": { name: "Camomila", image: "", benefit: "Sono", description: "Acalma emoções, ajuda no relaxamento e melhora o sono." },
  "Cedro": { name: "Cedro", image: "", benefit: "Segurança", description: "Traz estabilidade, segurança e sensação de aterramento." },
  "Eucalipto": { name: "Eucalipto", image: "", benefit: "Respiração", description: "Refrescante, limpa a mente e melhora a respiração." },
  "Hortelã-Pimenta": { name: "Hortelã-Pimenta", image: "", benefit: "Estímulo", description: "Aroma intenso, refrescante e altamente estimulante, ideal para aumentar o foco." },
  "Patchouli": { name: "Patchouli", image: "", benefit: "Presença", description: "Estabiliza emoções e traz sensação de presença e sensualidade terrosa." },
  "Bamboo": { name: "Bamboo", image: "", benefit: "Frescor", description: "Traz leveza e sensação de ambiente renovado e limpo." },
  "Pinho": { name: "Pinho", image: "", benefit: "Limpeza", description: "Purificante, ideal para limpeza energética e sensação de frescor silvestre." },
  "Mirra": { name: "Mirra", image: "", benefit: "Equilíbrio", description: "Introspectiva, auxilia no equilíbrio emocional e meditação." },

  // --- CÍTRICOS / FRUTADOS ---
  "Bergamota": { name: "Bergamota", image: "", benefit: "Otimismo", description: "O 'óleo da felicidade'. Eleva o humor e combate estados depressivos leves." },
  "Tangerina": { name: "Tangerina", image: "", benefit: "Vitalidade", description: "Cítrico doce que desperta a criança interior e traz entusiasmo para o dia." },
  "Abacaxi": { name: "Abacaxi", image: "", benefit: "Alegria", description: "Refrescante e alegre, traz leveza e energia tropical." },
  "Cereja": { name: "Cereja", image: "", benefit: "Aconchego", description: "Doce e envolvente, remete a memórias afetivas prazerosas." },
  "Pitanga": { name: "Pitanga", image: "", benefit: "Energia", description: "Vibrante e tipicamente brasileira, desperta a criatividade." },

  // --- GOURMAND / DOCES ---
  "Mel": { name: "Mel", image: "", benefit: "Doçura", description: "Acalma a alma e traz uma sensação de nutrição emocional e conforto." },
  "Black Vanilla": { name: "Black Vanilla", image: "", benefit: "Sedução", description: "Uma baunilha madura e escura que desperta o magnetismo e o conforto luxuoso." },
  "Cereja c/ Avelã": { name: "Cereja c/ Avelã", image: "", benefit: "Aconchego", description: "Combinação sofisticada que abraça os sentidos e reduz a sensação de solidão." },
  "Canela": { name: "Canela", image: "", benefit: "Energia", description: "Especiaria quente que estimula a circulação e a libido." },

  // --- ESPECIAIS / AMADEIRADOS ---
  "Âmbar Lelis": { name: "Âmbar Lelis", image: "", benefit: "Proteção", description: "Um aroma quente e amadeirado que cria um escudo de proteção energética." },
  "Vet Vert": { name: "Vet Vert", image: "", benefit: "Aterramento", description: "Aroma terroso que ajuda no equilíbrio e na sensação de estar presente no agora." },
  "Sândalo": { name: "Sândalo", image: "", benefit: "Equilíbrio", description: "Acalma profundamente e promove equilíbrio emocional e espiritual." }
};