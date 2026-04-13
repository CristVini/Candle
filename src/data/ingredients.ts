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
  "Arruda": { name: "Arruda", image: "", benefit: "Limpeza", description: "Conhecida por limpeza energética e proteção emocional." },
  "Arnica": { name: "Arnica", image: "", benefit: "Alívio", description: "Transmite alívio e conforto físico, ideal para relaxamento corporal." },
  "Andiroba": { name: "Andiroba", image: "", benefit: "Cuidado", description: "Promove sensação de cuidado e equilíbrio do corpo." },
  "Babosa": { name: "Babosa", image: "", benefit: "Leveza", description: "Refrescante e suave, traz sensação de leveza e renovação." },
  "Aloe Vera": { name: "Aloe Vera", image: "", benefit: "Frescor", description: "Acalma, hidrata e transmite frescor natural." },
  "Capim Limão": { name: "Capim Limão", image: "", benefit: "Anti-Estresse", description: "Reduz estresse, ansiedade e traz sensação de leveza." },
  "Camomila": { name: "Camomila", image: "", benefit: "Sono", description: "Acalma emoções, ajuda no relaxamento e melhora o sono." },
  "Calêndula": { name: "Calêndula", image: "", benefit: "Bem-estar", description: "Suave e reconfortante, promove bem-estar emocional." },
  "Cedro": { name: "Cedro", image: "", benefit: "Segurança", description: "Traz estabilidade, segurança e sensação de aterramento." },
  "Copaíba": { name: "Copaíba", image: "", benefit: "Anti-Tensão", description: "Relaxante, ajuda a aliviar tensões físicas e mentais." },
  "Erva Cidreira": { name: "Erva Cidreira", image: "", benefit: "Tranquilidade", description: "Reduz ansiedade e promove tranquilidade." },
  "Erva Doce": { name: "Erva Doce", image: "", benefit: "Conforto", description: "Acolhedora, diminui irritação e promove conforto emocional." },
  "Eucalipto": { name: "Eucalipto", image: "", benefit: "Respiração", description: "Refrescante, limpa a mente e melhora a respiração." },
  "Eucalipto Globulus": { name: "Eucalipto Globulus", image: "", benefit: "Respiração", description: "Refrescante intenso, auxilia na respiração e limpeza mental." },
  "Eucalipto Exp": { name: "Eucalipto Exp", image: "", benefit: "Frescor", description: "Revigorante, proporciona sensação de frescor e energia." },
  "Hortelã": { name: "Hortelã", image: "", benefit: "Energia", description: "Energizante, melhora foco e disposição." },
  "Hortelã-Pimenta": { name: "Hortelã-Pimenta", image: "", benefit: "Estímulo", description: "Aroma intenso, refrescante e altamente estimulante, ideal para aumentar o foco e reduzir o cansaço mental." },
  "Manjerona": { name: "Manjerona", image: "", benefit: "Relaxante", description: "Relaxante profundo, ideal para aliviar tensões." },
  "Mirra": { name: "Mirra", image: "", benefit: "Equilíbrio", description: "Introspectiva, auxilia no equilíbrio emocional." },
  "Olíbano": { name: "Olíbano", image: "", benefit: "Paz", description: "Promove paz interior e conexão espiritual." },
  "Patchouli": { name: "Patchouli", image: "", benefit: "Presença", description: "Estabiliza emoções e traz sensação de presença." },
  "Sândalo": { name: "Sândalo", image: "", benefit: "Equilíbrio", description: "Acalma profundamente e promove equilíbrio emocional." },
  "Sete Ervas": { name: "Sete Ervas", image: "", benefit: "Limpeza", description: "Limpeza energética e proteção do ambiente." },
  "Tomilho": { name: "Tomilho", image: "", benefit: "Vitalidade", description: "Fortalece a energia e estimula vitalidade." },
  "Verbena": { name: "Verbena", image: "", benefit: "Revigorante", description: "Relaxante leve com toque revigorante." },
  "Bamboo": { name: "Bamboo", image: "", benefit: "Frescor", description: "Traz leveza e sensação de ambiente renovado." },
  "Pinho": { name: "Pinho", image: "", benefit: "Limpeza", description: "Purificante, ideal para limpeza energética e sensação de ambiente limpo." },

  // --- FRUTADOS ---
  "Abacaxi": { name: "Abacaxi", image: "", benefit: "Alegria", description: "Refrescante e alegre, traz leveza e energia." },
  "Abacaxi em Calda": { name: "Abacaxi em Calda", image: "", benefit: "Doçura", description: "Doce e tropical, transmite conforto e suavidade." },
  "Açaí": { name: "Açaí", image: "", benefit: "Energia", description: "Vibrante, desperta disposição e vitalidade." },
  "Ameixa": { name: "Ameixa", image: "", benefit: "Aconchego", description: "Doce e confortável, transmite aconchego." },
  "Amora Negra": { name: "Amora Negra", image: "", benefit: "Intensidade", description: "Intensa e sofisticada, desperta os sentidos." },
  "Banana": { name: "Banana", image: "", benefit: "Conforto", description: "Cremosa e acolhedora." },
  "Blueberry": { name: "Blueberry", image: "", benefit: "Frescor", description: "Leve e moderno." },
  "Caju": { name: "Caju", image: "", benefit: "Alegria", description: "Tropical e vibrante." },
  "Cajá": { name: "Cajá", image: "", benefit: "Energia", description: "Ácido e refrescante, desperta os sentidos." },
  "Cereja": { name: "Cereja", image: "", benefit: "Aconchego", description: "Doce e envolvente." },
  "Jabuticaba": { name: "Jabuticaba", image: "", benefit: "Doçura", description: "Suave e brasileira, transmite conforto." },
  "Pitanga": { name: "Pitanga", image: "", benefit: "Energia", description: "Vibrante e tropical." },
  "Pitanga Preta": { name: "Pitanga Preta", image: "", benefit: "Intensidade", description: "Mais profunda e marcante." },
  "Pitaya": { name: "Pitaya", image: "", benefit: "Leveza", description: "Suave e refrescante." },
  "Romã": { name: "Romã", image: "", benefit: "Renovação", description: "Marcante e energética." },
  "Siriguela": { name: "Siriguela", image: "", benefit: "Alegria", description: "Tropical e doce." },
  "Melão": { name: "Melão", image: "", benefit: "Relaxamento", description: "Leve e refrescante." },

  // --- GOURMAND ---
  "Chocolate Branco": { name: "Chocolate Branco", image: "", benefit: "Conforto", description: "Doce e suave." },
  "Choconilha": { name: "Choconilha", image: "", benefit: "Aconchego", description: "Mistura de chocolate e baunilha, extremamente acolhedora." },
  "Chocotone": { name: "Chocotone", image: "", benefit: "Memória", description: "Doce e nostálgico." },
  "Amêndoas": { name: "Amêndoas", image: "", benefit: "Conforto", description: "Suave e levemente adocicado." },
  "Avelã c/ Café": { name: "Avelã c/ Café", image: "", benefit: "Energia", description: "Quente e estimulante." },
  "Buriti": { name: "Buriti", image: "", benefit: "Tropical", description: "Exótico e envolvente." },
  "Papaya": { name: "Papaya", image: "", benefit: "Leveza", description: "Suave e tropical." },
  "Yogurte de Morango": { name: "Yogurte de Morango", image: "", benefit: "Conforto", description: "Cremoso e delicado." },

  // --- FLORAIS ---
  "Flor de Algodão": { name: "Flor de Algodão", image: "", benefit: "Conforto", description: "Suave e acolhedor." },
  "Flor de Cerejeira": { name: "Flor de Cerejeira", image: "", benefit: "Delicadeza", description: "Leve e feminina." },
  "Flor de Cupuaçu": { name: "Flor de Cupuaçu", image: "", benefit: "Exótico", description: "Floral tropical envolvente." },
  "Flor de Lótus": { name: "Flor de Lótus", image: "", benefit: "Paz", description: "Calmante e espiritual." },
  "Flor de Maracujá": { name: "Flor de Maracujá", image: "", benefit: "Relaxamento", description: "Suave e calmante." },
  "Flor de Melissa": { name: "Flor de Melissa", image: "", benefit: "Tranquilidade", description: "Leve e relaxante." },
  "Floral Rose": { name: "Floral Rose", image: "", benefit: "Romance", description: "Elegante e romântico." },
  "Frésia": { name: "Frésia", image: "", benefit: "Leveza", description: "Fresca e delicada." },
  "Gerânio": { name: "Gerânio", image: "", benefit: "Equilíbrio", description: "Equilibra emoções." },
  "Girassol": { name: "Girassol", image: "", benefit: "Alegria", description: "Iluminado e positivo." },
  "Neroli": { name: "Neroli", image: "", benefit: "Calma", description: "Suave e relaxante." },

  // --- ESPECIARIAS ---
  "Canela": { name: "Canela", image: "", benefit: "Energia", description: "Quente e estimulante." },
  "Cravo": { name: "Cravo", image: "", benefit: "Ativação", description: "Forte e energizante." },
  "Gengibre": { name: "Gengibre", image: "", benefit: "Disposição", description: "Picante e revigorante." },
  "Noz Moscada": { name: "Noz Moscada", image: "", benefit: "Conforto", description: "Quente e envolvente." },
  "Pimenta Preta": { name: "Pimenta Preta", image: "", benefit: "Energia", description: "Intensa e estimulante." },
  "Pimenta Rosa": { name: "Pimenta Rosa", image: "", benefit: "Sensualidade", description: "Suave e envolvente." },

  // --- COMBINAÇÕES / ESPECIAIS (Mantidos do histórico) ---
  "Cereja c/ Avelã": { name: "Cereja c/ Avelã", image: "", benefit: "Aconchego", description: "Doce e envolvente, combina aconchego com sofisticação, ideal para relaxar e criar um clima acolhedor." },
  "Morango c/ Champanhe": { name: "Morango c/ Champanhe", image: "", benefit: "Celebração", description: "Leve, sofisticado e levemente efervescente, desperta alegria e sensação de celebração." },
  "Pêra c/ Chantilly": { name: "Pêra c/ Chantilly", image: "", benefit: "Conforto", description: "Suave e cremosa, transmite conforto emocional e delicadeza." },
  "Maçã c/ Canela": { name: "Maçã c/ Canela", image: "", benefit: "Lar", description: "Quente e acolhedora, perfeita para relaxar e trazer sensação de lar." },
  "Chocolate c/ Pimenta": { name: "Chocolate c/ Pimenta", image: "", benefit: "Sensualidade", description: "Estimulante e envolvente, desperta energy e sensualidade." },
  "Eucalipto c/ Bergamota": { name: "Eucalipto c/ Bergamota", image: "", benefit: "Humor", description: "Refrescante com toque cítrico, limpa a mente e melhora o humor." },
  "Café em Grãos": { name: "Café em Grãos", image: "", benefit: "Produtividade", description: "Energizante e marcante, estimula foco e produtividade." },

  // --- PERFUMARIA / MARCA (Mantidos do histórico) ---
  "Love Spell": { name: "Love Spell", image: "", benefit: "Feminilidade", description: "Doce e encantador, desperta feminilidade e bem-estar." },
  "Donna Spark": { name: "Donna Spark", image: "", benefit: "Confiança", description: "Sofisticado e moderno, transmite elegância e confiança." },
  "Douvie": { name: "Douvie", image: "", benefit: "Acolhedor", description: "Delicado e envolvente, ideal para criar um ambiente acolhedor." },
  "Eco Brasilis": { name: "Eco Brasilis", image: "", benefit: "Natureza", description: "Fresco e natural, conecta com sensação de natureza e equilíbrio." },
  "Iguatemi": { name: "Iguatemi", image: "", benefit: "Luxo", description: "Elegante e marcante, remete a luxo e sofisticação." },
  "Marine": { name: "Marine", image: "", benefit: "Tranquilidade", description: "Fresco e aquático, transmite leveza e tranquilidade." },
  "Noite Feliz": { name: "Noite Feliz", image: "", benefit: "Relaxar", description: "Suave e aconchegante, ideal para relaxar no fim do dia." },
  "Palmoluxo": { name: "Palmoluxo", image: "", benefit: "Frescor", description: "Limpo e sofisticado, sensação de banho e frescor." },
  "Âmbar Lelis": { name: "Âmbar Lelis", image: "", benefit: "Proteção", description: "Um aroma quente e amadeirado que cria um escudo de proteção energética." },

  // --- OUTROS (Mantidos do histórico) ---
  "Breu Branco": { name: "Breu Branco", image: "", benefit: "Purificação", description: "Purificante, muito usado para limpeza energética e espiritual." },
  "Cipreste": { name: "Cipreste", image: "", benefit: "Renovação", description: "Ajuda na renovação emocional e sensação de recomeço." },
  "Citronela": { name: "Citronela", image: "", benefit: "Proteção", description: "Refrescante e estimulante, traz sensação de proteção e limpeza." },
  "Cravo e Canela": { name: "Cravo e Canela", image: "", benefit: "Disposição", description: "Quente e estimulante, ativa energia e disposição." },
  "Figo em Calda": { name: "Figo em Calda", image: "", benefit: "Elegância", description: "Doce e sofisticado, transmite aconchego e elegância." },
  "Bergamota": { name: "Bergamota", image: "", benefit: "Otimismo", description: "Energizante e cítrica, promove otimismo e combate a tristeza." },
  "Vet Vert": { name: "Vet Vert", image: "", benefit: "Aterramento", description: "Aroma terroso que ajuda no equilíbrio e na sensação de presença." }
};