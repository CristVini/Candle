export const olfactoryProfiles: Record<string, any> = {
  relax: {
    id: "relax",
    name: "Modo Relaxar",
    archetype: "Regulação Emocional",
    description: "Reduz a ansiedade e desacelera a mente através da modulação do sistema límbico.",
    scientificBasis: "Aumento de ondas cerebrais alfa/θ associadas ao relaxamento profundo (Herz, 1998).",
    expectedEffect: "Queda nos níveis de cortisol e redução da frequência mental.",
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
    scientificBasis: "Ativação de ondas beta ligadas à atenção. Isômeros de limoneno elevam a vigília.",
    expectedEffect: "Aumento da atenção sustentada e memória de trabalho.",
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
    scientificBasis: "Aromas cítricos associados ao aumento de vigor e humor positivo (Herz, 2001).",
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
    scientificBasis: "Aromas gourmand evocam bem-estar e segurança emocional (Herz, 1998).",
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
    scientificBasis: "Estímulo cerebral (CNV ↑) associado a notas florais intensas e orientais.",
    expectedEffect: "Aumento da excitação emocional e presença sensorial.",
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
    scientificBasis: "Associação cognitiva entre aromas mentolados/cítricos e revitalização ambiental.",
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
    scientificBasis: "Processamento simbólico de notas nobres associado a status e elegância.",
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
    scientificBasis: "Redução de estresse fisiológico através da conexão com fitoncidas (pinho/cedro).",
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
    scientificBasis: "Notas florais associadas a comportamentos de cuidado e empatia (Herz, 2001).",
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
    scientificBasis: "Fragrâncias discretas mantêm a homeostase do humor via aprendizagem emocional.",
    expectedEffect: "Aumento do equilíbrio emocional e redução de oscilações.",
    notes: ["Gerânio", "Lavanda", "Verbena", "Erva Doce", "Mirra"],
    candleRitual: [
      { title: "Centro", candle: "Gerânio", description: "Regule oscilações emocionais." },
      { title: "Estabilidade", candle: "Verbena", description: "Mantenha a mente clara." },
      { title: "Paz", candle: "Mirra", description: "Promova a cura e introspecção." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#8B5CF6"
  }
};