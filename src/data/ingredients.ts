export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- FRESCOS / HERBAIS / NATUREZA ---
  "Alecrim": { name: "Alecrim", image: "", benefit: "Foco", description: "Estimula a concentração, melhora a memória e combate o cansaço mental." },
  "Lavanda": { name: "Lavanda", image: "", benefit: "Paz Interior", description: "O padrão ouro do relaxamento. Reduz os níveis de cortisol e prepara o corpo para o repouso." },
  "Capim Limão": { name: "Capim Limão", image: "", benefit: "Anti-Estresse", description: "Reduz estresse, ansiedade e traz sensação de leveza." },
  "Eucalipto": { name: "Eucalipto", image: "", benefit: "Respiração", description: "Refrescante, limpa a mente e melhora a respiração." },
  "Bamboo": { name: "Bamboo", image: "", benefit: "Frescor", description: "Traz leveza e sensação de ambiente renovado e limpo." },
  "Hortelã": { name: "Hortelã", image: "", benefit: "Estímulo", description: "Aroma refrescante que desperta os sentidos e aumenta o alerta." },
  "Hortelã-Pimenta": { name: "Hortelã-Pimenta", image: "", benefit: "Estímulo", description: "Aroma intenso, refrescante e altamente estimulante, ideal para aumentar o foco." },
  "Pinho": { name: "Pinho", image: "", benefit: "Limpeza", description: "Purificante, ideal para limpeza energética e sensação de frescor silvestre." },
  "Cedro": { name: "Cedro", image: "", benefit: "Segurança", description: "Traz estabilidade, segurança e sensação de aterramento." },
  "Patchouli": { name: "Patchouli", image: "", benefit: "Presença", description: "Estabiliza emoções e traz sensação de presença e sensualidade terrosa." },
  "Vet Vert": { name: "Vet Vert", image: "", benefit: "Aterramento", description: "Aroma terroso que ajuda no equilíbrio e na sensação de estar presente no agora." },
  "Chá Branco": { name: "Chá Branco", image: "", benefit: "Clareza", description: "Aroma delicado e sofisticado que promove sensação de pureza e ordem." },
  "Chá Verde": { name: "Chá Verde", image: "", benefit: "Revitalização", description: "Notas herbais que auxiliam na renovação das energias e foco suave." },
  "Verbena": { name: "Verbena", image: "", benefit: "Equilíbrio", description: "Cítrico herbal que acalma o sistema nervoso e refresca a mente." },

  // --- CÍTRICOS / ENERGIA ---
  "Bergamota": { name: "Bergamota", image: "", benefit: "Otimismo", description: "O 'óleo da felicidade'. Eleva o humor e combate estados depressivos leves." },
  "Tangerina": { name: "Tangerina", image: "", benefit: "Vitalidade", description: "Cítrico doce que desperta a criança interior e traz entusiasmo para o dia." },
  "Laranja": { name: "Laranja", image: "", benefit: "Alegria", description: "Estimula o positivismo e reduz a irritabilidade." },
  "Limão": { name: "Limão", image: "", benefit: "Purificação", description: "Aumenta o foco e limpa a mente de pensamentos repetitivos." },

  // --- FRUTADOS / ESCAPE ---
  "Abacaxi": { name: "Abacaxi", image: "", benefit: "Alegria", description: "Refrescante e alegre, traz leveza e energia tropical." },
  "Cereja": { name: "Cereja", image: "", benefit: "Aconchego", description: "Doce e envolvente, remete a memórias afetivas prazerosas." },
  "Pitanga": { name: "Pitanga", image: "", benefit: "Energia", description: "Vibrante e tipicamente brasileira, desperta a criatividade." },
  "Coco": { name: "Coco", image: "", benefit: "Bem-estar", description: "Aroma tropical que remete a relaxamento e conforto solar." },
  "Manga": { name: "Manga", image: "", benefit: "Motivação", description: "Frutado intenso que estimula a disposição e o prazer." },
  "Melancia": { name: "Melancia", image: "", benefit: "Liberdade", description: "Fresco e aquoso, promove sensação de leveza e descompressão." },
  "Morango": { name: "Morango", image: "", benefit: "Desejo", description: "Doce e vibrante, associado à jovialidade e atração." },
  "Pêssego": { name: "Pêssego", image: "", benefit: "Afeto", description: "Suave e aveludado, promove sensação de proximidade e carinho." },
  "Lichia": { name: "Lichia", image: "", benefit: "Leveza", description: "Exótico e delicado, evita a sobrecarga sensorial." },
  "Pêra": { name: "Pêra", image: "", benefit: "Suavidade", description: "Fresco e levemente doce, ideal para ambientes neutros." },

  // --- DOCES / ACONCHEGO ---
  "Café": { name: "Café", image: "", benefit: "Vigor", description: "Estimulante sensorial que desperta a mente e traz sensação de energia imediata." },
  "Mel": { name: "Mel", image: "", benefit: "Doçura", description: "Acalma a alma e traz uma sensação de nutrição emocional e conforto." },
  "Black Vanilla": { name: "Black Vanilla", image: "", benefit: "Sedução", description: "Uma baunilha madura e escura que desperta o magnetismo e o conforto luxuoso." },
  "Baunilha": { name: "Baunilha", image: "", benefit: "Conforto", description: "Evoca memórias de infância e gera sensação de segurança absoluta." },
  "Chocolate": { name: "Chocolate", image: "", benefit: "Prazer", description: "Estimula a liberação de endorfinas e traz conforto emocional." },
  "Caramelo": { name: "Caramelo", image: "", benefit: "Acolhimento", description: "Doce e quente, ideal para momentos de autocuidado." },
  "Doce de Leite": { name: "Doce de Leite", image: "", benefit: "Memória", description: "Aroma nostálgico que remete ao cuidado doméstico." },
  "Cereja c/ Avelã": { name: "Cereja c/ Avelã", image: "", benefit: "Aconchego", description: "Combinação sofisticada que abraça os sentidos e reduz a sensação de solidão." },

  // --- ESPECIARIAS / ESTÍMULO ---
  "Canela": { name: "Canela", image: "", benefit: "Energia", description: "Especiaria quente que estimula a circulação e a libido." },
  "Cravo": { name: "Cravo", image: "", benefit: "Alerta", description: "Aroma forte e picante que desperta a energia corporal." },
  "Gengibre": { name: "Gengibre", image: "", benefit: "Vigor", description: "Estimulante físico que combate a apatia e o cansaço." },
  "Noz Moscada": { name: "Noz Moscada", image: "", benefit: "Ativação", description: "Quente e exótico, auxilia na prontidão física." },

  // --- FLORAIS / CONEXÃO ---
  "Jasmim": { name: "Jasmim", image: "", benefit: "Intensidade", description: "Floral inebriante que desperta a sensualidade e a confiança." },
  "Rosa": { name: "Rosa", image: "", benefit: "Amor", description: "O aroma do afeto. Promove empatia e conexão emocional profunda." },
  "Rosas Brancas": { name: "Rosas Brancas", image: "", benefit: "Pureza", description: "Traz paz e sensação de limpeza emocional." },
  "Rosas Vermelhas": { name: "Rosas Vermelhas", image: "", benefit: "Paixão", description: "Estimula a entrega emocional e a presença." },
  "Orquídea": { name: "Orquídea", image: "", benefit: "Luxo", description: "Floral exótico que eleva a percepção de valor do ambiente." },
  "Frésia": { name: "Frésia", image: "", benefit: "Delicadeza", description: "Aroma leve que evita a irritação sensorial." },
  "Gerânio": { name: "Gerânio", image: "", benefit: "Estabilidade", description: "Regulador hormonal e emocional, promove a homeostase." },
  "Calêndula": { name: "Calêndula", image: "", benefit: "Cuidado", description: "Suave e protetor, acalma peles e mentes agitadas." },

  // --- SOFISTICADOS / ESPECIAIS ---
  "Âmbar": { name: "Âmbar", image: "", benefit: "Elegância", description: "Resinoso e quente, cria uma atmosfera de status e sofisticação." },
  "Âmbar Lelis": { name: "Âmbar Lelis", image: "", benefit: "Proteção", description: "Um aroma quente e amadeirado que cria um escudo de proteção energética." },
  "Figo": { name: "Figo", image: "", benefit: "Status", description: "Verde e doce na medida certa, aroma assinatura de ambientes de luxo." },
  "Neroli": { name: "Neroli", image: "", benefit: "Preciosidade", description: "Extraído da flor de laranjeira, é um dos óleos mais nobres da perfumaria." },
  "Sândalo": { name: "Sândalo", image: "", benefit: "Equilíbrio", description: "Acalma profundamente e promove equilíbrio emocional e espiritual." },
  "Oceano": { name: "Oceano", image: "", benefit: "Amplitude", description: "Notas marinhas que trazem sensação de espaço e liberdade." },
  "Ozônio": { name: "Ozônio", image: "", benefit: "Ar Puro", description: "Remete ao cheiro de chuva e ar limpo, renovando o ambiente." },
  "Algodão": { name: "Algodão", image: "", benefit: "Proteção", description: "Suave e limpo, remete ao conforto de um lar seguro." },
  "Talco": { name: "Talco", image: "", benefit: "Nostalgia", description: "Aroma de limpeza clássica que gera relaxamento imediato." },
  "Flor de Algodão": { name: "Flor de Algodão", image: "", benefit: "Zelo", description: "Combina a limpeza do algodão com um toque floral delicado." }
};