export const olfactoryProfiles: Record<string, any> = {
  relax: {
    id: "relax",
    name: "Modo Relaxar",
    archetype: "Regulação Emocional",
    description: "Reduz a ansiedade e desacelera a mente através da modulação do sistema límbico.",
    scientificBasis: "Redução da atividade da amígdala cerebral. Estudos comprovam o efeito calmante de lavanda e camomila.",
    expectedEffect: "Queda nos níveis de cortisol, redução da frequência mental e aumento da sensação de segurança.",
    notes: ["Lavanda", "Camomila", "Maracujá", "Erva Cidreira", "Sândalo"],
    candleRitual: [
      { title: "Desaceleração", candle: "Lavanda", description: "Sinalize ao cérebro o início do repouso." },
      { title: "Paz Mental", candle: "Camomila", description: "Silencie pensamentos repetitivos." },
      { title: "Aterramento", candle: "Sândalo", description: "Estabilize as emoções antes de dormir." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  focus: {
    id: "focus",
    name: "Modo Foco",
    archetype: "Ativação Cognitiva",
    description: "Aumenta a concentração e a produtividade através do estímulo do córtex pré-frontal.",
    scientificBasis: "Ativação do córtex pré-frontal. EEG mostra aumento de atenção com mentol e alecrim.",
    expectedEffect: "Aumento da atenção sustentada, memória de trabalho e energia mental.",
    notes: ["Alecrim", "Hortelã", "Café", "Eucalipto", "Limão"],
    candleRitual: [
      { title: "Ignição", candle: "Café", description: "Desperte a acuidade sensorial." },
      { title: "Fluxo", candle: "Alecrim", description: "Mantenha o trabalho profundo." },
      { title: "Alerta", candle: "Hortelã", description: "Combata a fadiga mental." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  energy: {
    id: "energy",
    name: "Modo Energizar",
    archetype: "Estímulo Positivo",
    description: "Eleva o humor e a disposição através da associação de aromas cítricos à serotonina.",
    scientificBasis: "Aromas cítricos associados ao aumento de serotonina e motivação.",
    expectedEffect: "Elevação do humor, aumento da motivação e redução da apatia.",
    notes: ["Laranja", "Tangerina", "Bergamota", "Abacaxi", "Manga"],
    candleRitual: [
      { title: "Despertar", candle: "Bergamota", description: "Configure um estado mental positivo." },
      { title: "Vibração", candle: "Tangerina", description: "Ideal para início de projetos criativos." },
      { title: "Vitalidade", candle: "Laranja", description: "Impulso extra de entusiasmo." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  cozy: {
    id: "cozy",
    name: "Modo Aconchego",
    archetype: "Memória Afetiva",
    description: "Gera conforto e sensação de cuidado ao evocar memórias emocionais do hipocampo.",
    scientificBasis: "Ligação direta com o hipocampo. Aromas doces evocam infância e segurança.",
    expectedEffect: "Aumento da sensação de acolhimento e redução do estresse emocional.",
    notes: ["Baunilha", "Chocolate", "Caramelo", "Doce de Leite", "Coco"],
    candleRitual: [
      { title: "Abraço", candle: "Baunilha", description: "Crie um refúgio após um dia exaustivo." },
      { title: "Nutrição", candle: "Chocolate", description: "Promova o autocuidado introspectivo." },
      { title: "Doçura", candle: "Mel", description: "Ideal para momentos de descanso no lar." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  sensual: {
    id: "sensual",
    name: "Modo Sensual",
    archetype: "Resposta Intensa",
    description: "Cria presença, atração e intensidade através da ativação da amígdala.",
    scientificBasis: "Ativação da amígdala e resposta emocional ligada à atração.",
    expectedEffect: "Aumento da excitação emocional, atenção social e presença.",
    notes: ["Patchouli", "Jasmim", "Morango", "Cereja", "Pimenta Rosa"],
    candleRitual: [
      { title: "Magnetismo", candle: "Patchouli", description: "Estabeleça uma base misteriosa." },
      { title: "Intensidade", candle: "Jasmim", description: "Eleve a vibração sensorial." },
      { title: "Toque", candle: "Cereja", description: "Finalize a atmosfera sedutora." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  clean: {
    id: "clean",
    name: "Modo Limpeza",
    archetype: "Cognição Ambiental",
    description: "Cria sensação de ordem, frescor e organização através da cognição ambiental.",
    scientificBasis: "Aromas frescos aumentam a percepção de limpeza e organização.",
    expectedEffect: "Aumento da sensação de organização e clareza mental.",
    notes: ["Eucalipto", "Capim Limão", "Bamboo", "Chá Branco", "Ozônio"],
    candleRitual: [
      { title: "Renovação", candle: "Ozônio", description: "Sele a sensação de frescor pós-limpeza." },
      { title: "Pureza", candle: "Chá Branco", description: "Ideal para ambientes que precisam de ordem." },
      { title: "Vigor", candle: "Bamboo", description: "Promova a sensação de renovação constante." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1558383331-f520f2888351?auto=format&fit=crop&q=80&w=800",
    color: "#0EA5E9"
  },
  sophisticated: {
    id: "sophisticated",
    name: "Modo Sofisticado",
    archetype: "Processamento Simbólico",
    description: "Eleva a percepção de luxo e status através de notas nobres e complexas.",
    scientificBasis: "Aromas influenciam o julgamento de valor e status social.",
    expectedEffect: "Aumento da percepção de valor e sensação premium.",
    notes: ["Âmbar", "Figo", "Neroli", "Orquídea", "Iguatemi"],
    candleRitual: [
      { title: "Assinatura", candle: "Figo", description: "Transforme o ambiente em um espaço de design." },
      { title: "Aura", candle: "Neroli", description: "Presença refinada para recepções." },
      { title: "Profundidade", candle: "Âmbar", description: "Base rica que exala poder." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1615485240384-552e40df3c9d?auto=format&fit=crop&q=80&w=800",
    color: "#1F2937"
  },
  nature: {
    id: "nature",
    name: "Modo Natureza",
    archetype: "Aterramento",
    description: "Conecta com o equilíbrio interno através de aromas terrosos e estáveis.",
    scientificBasis: "Aromas terrosos associados à estabilidade e redução de estresse fisiológico.",
    expectedEffect: "Redução da ansiedade e aumento da estabilidade emocional.",
    notes: ["Cedro", "Patchouli", "Vet Vert", "Pinho", "Terra Molhada"],
    candleRitual: [
      { title: "Raízes", candle: "Vet Vert", description: "Use quando se sentir disperso." },
      { title: "Equilíbrio", candle: "Bamboo", description: "Traga a serenidade do jardim." },
      { title: "Proteção", candle: "Cedro", description: "Barreira contra o caos externo." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    color: "#166534"
  },
  romance: {
    id: "romance",
    name: "Modo Romance",
    archetype: "Afeto / Vínculo",
    description: "Cria proximidade emocional e empatia através de notas florais clássicas.",
    scientificBasis: "Aromas florais associados a comportamentos de cuidado e conexão social.",
    expectedEffect: "Aumento da conexão emocional e empatia.",
    notes: ["Rosa", "Rosas Vermelhas", "Pêssego", "Love Spell", "Lírio"],
    candleRitual: [
      { title: "Coração", candle: "Rosa", description: "Suavize o clima para diálogos." },
      { title: "Vínculo", candle: "Rosas Brancas", description: "Promova confiança e transparência." },
      { title: "Encanto", candle: "Love Spell", description: "Desperte o romance e o afeto." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
    color: "#F43F5E"
  },
  balance: {
    id: "balance",
    name: "Modo Equilíbrio",
    archetype: "Homeostase",
    description: "Mantém o estado emocional estável através de aromas reguladores.",
    scientificBasis: "Aromas reguladores ajudam na estabilidade do sistema nervoso.",
    expectedEffect: "Aumento do equilíbrio emocional e redução de oscilações.",
    notes: ["Gerânio", "Lavanda", "Verbena", "Erva Doce", "Mirra"],
    candleRitual: [
      { title: "Centro", candle: "Gerânio", description: "Regule oscilações emocionais." },
      { title: "Estabilidade", candle: "Verbena", description: "Mantenha a mente clara." },
      { title: "Paz", candle: "Mirra", description: "Promova a cura e introspecção." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#8B5CF6"
  },
  stimulus: {
    id: "stimulus",
    name: "Modo Estímulo",
    archetype: "Ativação Física",
    description: "Desperta a energia corporal através de aromas especiados.",
    scientificBasis: "Aromas especiados aumentam a ativação fisiológica e circulação.",
    expectedEffect: "Aumento da circulação, energia e alerta físico.",
    notes: ["Canela", "Cravo", "Noz Moscada", "Cardamomo", "Pimenta Preta"],
    candleRitual: [
      { title: "Fogo", candle: "Canela", description: "Desperte a energia corporal." },
      { title: "Vigor", candle: "Gengibre", description: "Combata a letargia física." },
      { title: "Ativação", candle: "Cravo", description: "Prontidão e resposta rápida." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    color: "#B91C1C"
  },
  comfort: {
    id: "comfort",
    name: "Modo Conforto",
    archetype: "Segurança",
    description: "Cria uma sensação de lar e proteção através de aromas suaves.",
    scientificBasis: "Aromas suaves aumentam a sensação de proteção e memória doméstica.",
    expectedEffect: "Aumento da segurança e relaxamento leve.",
    notes: ["Algodão", "Talco", "Flor de Algodão", "Donna Spark", "Marine"],
    candleRitual: [
      { title: "Ninho", candle: "Algodão", description: "Ideal para o quarto e descanso." },
      { title: "Nostalgia", candle: "Talco", description: "Acalme mentes agitadas." },
      { title: "Brisa", candle: "Marine", description: "Traga a leveza do mar para o lar." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459061998-5645ad99e39f?auto=format&fit=crop&q=80&w=800",
    color: "#94A3B8"
  }
};