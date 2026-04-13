export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  // --- RELAXAR ---
  "Lavanda": { name: "Lavanda", image: "", benefit: "Paz Interior", description: "O padrão ouro do relaxamento. Reduz os níveis de cortisol." },
  "Alfazema": { name: "Alfazema", image: "", benefit: "Tranquilidade", description: "Aroma clássico que promove limpeza espiritual e calma profunda." },
  "Camomila": { name: "Camomila", image: "", benefit: "Serenidade", description: "Suaviza as tensões e prepara o corpo para um descanso restaurador." },
  "Maracujá": { name: "Maracujá", image: "", benefit: "Descompressão", description: "Frutado calmante que ajuda a reduzir a ansiedade e o estresse." },
  "Erva Cidreira": { name: "Erva Cidreira", image: "", benefit: "Alívio", description: "Fresco e herbal, excelente para acalmar mentes agitadas." },
  "Manjerona": { name: "Manjerona", image: "", benefit: "Conforto", description: "Aroma quente e herbal que promove sensação de acolhimento." },
  "Sândalo": { name: "Sândalo", image: "", benefit: "Equilíbrio", description: "Amadeirado nobre que estabiliza as emoções e promove foco espiritual." },
  "Melissa": { name: "Melissa", image: "", benefit: "Leveza", description: "Cítrico herbal que combate a insônia e a irritabilidade." },

  // --- FOCO ---
  "Alecrim": { name: "Alecrim", image: "", benefit: "Foco", description: "Estimula a concentração e a memória de curto prazo." },
  "Hortelã": { name: "Hortelã", image: "", benefit: "Estímulo", description: "Refrescante, desperta os sentidos e aumenta o alerta mental." },
  "Hortelã-Pimenta": { name: "Hortelã-Pimenta", image: "", benefit: "Energia", description: "Aroma intenso que combate a fadiga e clareia a mente." },
  "Café": { name: "Café", image: "", benefit: "Vigor", description: "Estimulante sensorial que desperta a prontidão cognitiva." },
  "Eucalipto": { name: "Eucalipto", image: "", benefit: "Respiração", description: "Limpa as vias respiratórias e traz clareza mental." },
  "Limão": { name: "Limão", image: "", benefit: "Purificação", description: "Cítrico vibrante que ajuda na organização dos pensamentos." },
  "Gengibre": { name: "Gengibre", image: "", benefit: "Ativação", description: "Picante e revigorante, estimula a circulação e a disposição." },

  // --- ENERGIZAR ---
  "Laranja": { name: "Laranja", image: "", benefit: "Alegria", description: "Estimula o positivismo e reduz a irritabilidade." },
  "Tangerina": { name: "Tangerina", image: "", benefit: "Vitalidade", description: "Cítrico doce que traz entusiasmo e energia solar." },
  "Bergamota": { name: "Bergamota", image: "", benefit: "Otimismo", description: "O óleo da felicidade, eleva o humor instantaneamente." },
  "Abacaxi": { name: "Abacaxi", image: "", benefit: "Tropical", description: "Aroma vibrante que remete a celebração e prazer." },
  "Açaí": { name: "Açaí", image: "", benefit: "Força", description: "Frutado intenso que evoca a energia da natureza brasileira." },
  "Manga": { name: "Manga", image: "", benefit: "Motivação", description: "Doce e suculento, estimula a disposição física." },
  "Goiaba": { name: "Goiaba", image: "", benefit: "Entusiasmo", description: "Aroma tropical marcante que desperta a criatividade." },
  "Kiwi": { name: "Kiwi", image: "", benefit: "Frescor", description: "Frutado leve e ácido que traz sensação de renovação." },
  "Pitaya": { name: "Pitaya", image: "", benefit: "Exotismo", description: "Suave e sofisticado, promove uma energia equilibrada." },
  "Guaraná": { name: "Guaraná", image: "", benefit: "Poder", description: "Estimulante natural que evoca vigor e prontidão." },
  "Frutas Vermelhas": { name: "Frutas Vermelhas", image: "", benefit: "Vibração", description: "Mix doce e ácido que estimula a alegria e o dinamismo." },

  // --- ACONCHEGO ---
  "Baunilha": { name: "Baunilha", image: "", benefit: "Segurança", description: "Evoca memórias de infância e gera conforto absoluto." },
  "Black Vanilla": { name: "Black Vanilla", image: "", benefit: "Luxo", description: "Baunilha madura e escura para um aconchego sofisticado." },
  "Chocolate": { name: "Chocolate", image: "", benefit: "Prazer", description: "Estimula endorfinas e traz conforto emocional imediato." },
  "Caramelo": { name: "Caramelo", image: "", benefit: "Doçura", description: "Quente e envolvente, ideal para momentos de pausa." },
  "Doce de Leite": { name: "Doce de Leite", image: "", benefit: "Nostalgia", description: "Aroma afetivo que remete ao cuidado e ao lar." },
  "Coco": { name: "Coco", image: "", benefit: "Bem-estar", description: "Tropical e cremoso, promove relaxamento e conforto." },
  "Mel": { name: "Mel", image: "", benefit: "Nutrição", description: "Acalma a alma e traz uma sensação de doçura emocional." },
  "Chantilly": { name: "Chantilly", image: "", benefit: "Leveza", description: "Aroma doce e aerado que traz suavidade ao ambiente." },
  "Macadâmia": { name: "Macadâmia", image: "", benefit: "Nobreza", description: "Amendoado sofisticado que promove conforto elegante." },
  "Amêndoas": { name: "Amêndoas", image: "", benefit: "Zelo", description: "Suave e protetor, ideal para ambientes de descanso." },

  // --- SENSUAL ---
  "Patchouli": { name: "Patchouli", image: "", benefit: "Magnetismo", description: "Terroso e misterioso, desperta a sensualidade profunda." },
  "Jasmim": { name: "Jasmim", image: "", benefit: "Intensidade", description: "Floral inebriante que aumenta a confiança e a atração." },
  "Morango": { name: "Morango", image: "", benefit: "Desejo", description: "Doce e vibrante, associado à jovialidade e sedução." },
  "Cereja": { name: "Cereja", image: "", benefit: "Sedução", description: "Envolvente e marcante, cria uma atmosfera de mistério." },
  "Amora Negra": { name: "Amora Negra", image: "", benefit: "Mistério", description: "Frutado escuro e denso que desperta a curiosidade." },
  "Framboesa": { name: "Framboesa", image: "", benefit: "Paixão", description: "Vibrante e doce, estimula a entrega emocional." },
  "Ameixa": { name: "Ameixa", image: "", benefit: "Presença", description: "Frutado sofisticado que traz profundidade ao ambiente." },
  "Pimenta Rosa": { name: "Pimenta Rosa", image: "", benefit: "Atração", description: "Especiaria leve e floral que desperta o interesse sensorial." },
  "Almíscar": { name: "Almíscar", image: "", benefit: "Pele", description: "Aroma animalic suave que remete ao toque e à intimidade." },

  // --- LIMPEZA ---
  "Capim Limão": { name: "Capim Limão", image: "", benefit: "Anti-Estresse", description: "Reduz a ansiedade e traz sensação de ambiente limpo." },
  "Citronela": { name: "Citronela", image: "", benefit: "Proteção", description: "Purifica o ar e mantém o ambiente livre de distrações." },
  "Bamboo": { name: "Bamboo", image: "", benefit: "Frescor", description: "Traz leveza e sensação de renovação constante." },
  "Chá Branco": { name: "Chá Branco", image: "", benefit: "Clareza", description: "Aroma delicado que promove pureza e ordem mental." },
  "Chá Verde": { name: "Chá Verde", image: "", benefit: "Revitalização", description: "Notas herbais que auxiliam na renovação das energias." },
  "Aloe Vera": { name: "Aloe Vera", image: "", benefit: "Cura", description: "Fresco e aquoso, promove sensação de regeneração." },
  "Palmoluxo": { name: "Palmoluxo", image: "", benefit: "Higiene", description: "Floral limpo com fundo de musk, remete ao sabonete clássico." },
  "Eco Brasilis": { name: "Eco Brasilis", image: "", benefit: "Natureza Viva", description: "Mix verde e cítrico que traz a floresta para dentro de casa." },

  // --- SOFISTICADO ---
  "Âmbar": { name: "Âmbar", image: "", benefit: "Elegância", description: "Resinoso e quente, cria uma atmosfera de status." },
  "Âmbar Lelis": { name: "Âmbar Lelis", image: "", benefit: "Exclusividade", description: "Aroma assinatura que exala poder e sofisticação." },
  "Orquídea": { name: "Orquídea", image: "", benefit: "Luxo", description: "Floral exótico que eleva a percepção de valor do espaço." },
  "Figo": { name: "Figo", image: "", benefit: "Status", description: "Verde e doce, aroma clássico de ambientes premium." },
  "Neroli": { name: "Neroli", image: "", benefit: "Preciosidade", description: "Extraído da flor de laranjeira, é puro refinamento." },
  "Madeira do Oriente": { name: "Madeira do Oriente", image: "", benefit: "Poder", description: "Amadeirado denso que evoca sabedoria e estabilidade." },
  "Douvie": { name: "Douvie", image: "", benefit: "Suavidade", description: "Floral musk com baunilha leve, pura elegância discreta." },
  "Iguatemi": { name: "Iguatemi", image: "", benefit: "Design", description: "Madeiras nobres e âmbar, remete ao luxo contemporâneo." },

  // --- NATUREZA ---
  "Cedro": { name: "Cedro", image: "", benefit: "Segurança", description: "Traz estabilidade e sensação de aterramento." },
  "Vet Vert": { name: "Vet Vert", image: "", benefit: "Aterramento", description: "Aroma terroso que ajuda no equilíbrio emocional." },
  "Copaíba": { name: "Copaíba", image: "", benefit: "Resiliência", description: "Amadeirado medicinal que promove força interna." },
  "Andiroba": { name: "Andiroba", image: "", benefit: "Proteção", description: "Aroma denso da floresta que traz segurança." },
  "Pinho": { name: "Pinho", image: "", benefit: "Limpeza", description: "Purificante, ideal para renovação energética." },
  "Pau Brasil": { name: "Pau Brasil", image: "", benefit: "História", description: "Amadeirado clássico que evoca nossas raízes." },
  "Musgo": { name: "Musgo", image: "", benefit: "Umidade", description: "Aroma de floresta profunda que acalma o sistema nervoso." },
  "Terra Molhada": { name: "Terra Molhada", image: "", benefit: "Origem", description: "O cheiro da chuva que traz paz e renovação." },

  // --- ROMANCE ---
  "Rosa": { name: "Rosa", image: "", benefit: "Amor", description: "O aroma do afeto, promove empatia e conexão." },
  "Rosas Brancas": { name: "Rosas Brancas", image: "", benefit: "Pureza", description: "Traz paz e sensação de limpeza emocional." },
  "Rosas Vermelhas": { name: "Rosas Vermelhas", image: "", benefit: "Paixão", description: "Estimula a entrega e a intensidade emocional." },
  "Pêssego": { name: "Pêssego", image: "", benefit: "Afeto", description: "Suave e aveludado, promove proximidade." },
  "Maçã com Canela": { name: "Maçã com Canela", image: "", benefit: "Aconchego", description: "Combinação clássica que desperta o desejo e o conforto." },
  "Lírio": { name: "Lírio", image: "", benefit: "Nobreza", description: "Floral branco que exala elegância e pureza." },
  "Violeta": { name: "Violeta", image: "", benefit: "Modéstia", description: "Aroma doce e sutil que acalma o coração." },
  "Love Spell": { name: "Love Spell", image: "", benefit: "Encanto", description: "Mix de pêssego e cerejeira que desperta o romance." },

  // --- EQUILÍBRIO ---
  "Verbena": { name: "Verbena", image: "", benefit: "Equilíbrio", description: "Cítrico herbal que acalma o sistema nervoso." },
  "Erva Doce": { name: "Erva Doce", image: "", benefit: "Harmonia", description: "Aroma suave que combate a ansiedade e o medo." },
  "Gerânio": { name: "Gerânio", image: "", benefit: "Estabilidade", description: "Regulador emocional, promove a homeostase." },
  "Olíbano": { name: "Olíbano", image: "", benefit: "Espiritualidade", description: "Resina sagrada que aprofunda a meditação." },
  "Mirra": { name: "Mirra", image: "", benefit: "Paz", description: "Aroma milenar que promove cura e introspecção." },
  "Calêndula": { name: "Calêndula", image: "", benefit: "Cuidado", description: "Suave e protetor, acalma mentes agitadas." },

  // --- ESTÍMULO ---
  "Canela": { name: "Canela", image: "", benefit: "Energia", description: "Especiaria quente que estimula a circulação." },
  "Cravo": { name: "Cravo", image: "", benefit: "Alerta", description: "Aroma picante que desperta a energia corporal." },
  "Noz Moscada": { name: "Noz Moscada", image: "", benefit: "Ativação", description: "Quente e exótico, auxilia na prontidão física." },
  "Cardamomo": { name: "Cardamomo", image: "", benefit: "Vigor", description: "Especiaria nobre que desperta a mente e o corpo." },
  "Pimenta Preta": { name: "Pimenta Preta", image: "", benefit: "Fogo", description: "Estimulante intenso que combate a apatia." },
  "Noite Feliz": { name: "Noite Feliz", image: "", benefit: "Celebração", description: "Canela, cravo e baunilha para um estímulo festivo." },

  // --- CONFORTO ---
  "Algodão": { name: "Algodão", image: "", benefit: "Proteção", description: "Suave e limpo, remete ao conforto de um lar seguro." },
  "Talco": { name: "Talco", image: "", benefit: "Nostalgia", description: "Aroma de limpeza clássica que gera relaxamento." },
  "Flor de Algodão": { name: "Flor de Algodão", image: "", benefit: "Zelo", description: "Combina limpeza com um toque floral delicado." },
  "Donna Spark": { name: "Donna Spark", image: "", benefit: "Modernidade", description: "Floral frutado com fundo doce, pura sofisticação." },
  "Marine": { name: "Marine", image: "", benefit: "Amplitude", description: "Aquático e fresco, traz a brisa do mar para o lar." }
};