export interface CandleProfile {
  id: string;
  title: string;
  archetype: string;
  description: string;
  clinicalContext: string;
  scent: string;
  activeIngredients: string;
  psychologicalAction: string;
  color: string;
  imageUrl: string;
  strongCTA: string;
}

export const candleProfiles: Record<string, CandleProfile> = {
  burnout: {
    id: 'burnout',
    title: 'Restauração de Ciclos',
    archetype: 'O Guerreiro Exausto',
    description: 'Você atingiu o limite da sua reserva de energia psíquica. Sua mente pede uma pausa profunda.',
    clinicalContext: 'Níveis críticos de fadiga adrenal.',
    scent: 'Alecrim e Hortelã',
    activeIngredients: 'Cineol e Mentol',
    psychologicalAction: 'Restaura a clareza cognitiva e combate a névoa mental.',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    imageUrl: 'https://images.unsplash.com/photo-1515589158968-351cf4afe8b0?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Recupere sua força vital. Sua mente merece este respiro.'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Horizonte de Luz',
    archetype: 'O Viajante no Escuro',
    description: 'A sensação de que o futuro é nebuloso. Você precisa de vitalidade sensorial.',
    clinicalContext: 'Anedonia e baixa reatividade emocional.',
    scent: 'Bergamota e Laranja',
    activeIngredients: 'Limoneno',
    psychologicalAction: 'Estimula a dopamina e a sensação de possibilidade.',
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9caab53?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'A luz que você procura começa com um suspiro profundo.'
  },
  sadness: {
    id: 'sadness',
    title: 'Abraço Mineral',
    archetype: 'O Poeta Melancólico',
    description: 'Uma tristeza profunda que parece pesar. Você precisa de acolhimento.',
    clinicalContext: 'Melancolia persistente.',
    scent: 'Jasmim e Cedro',
    activeIngredients: 'Santalol e Acetato de Benzila',
    psychologicalAction: 'Proporciona validação emocional e conforto físico.',
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    imageUrl: 'https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Deixe que este aroma cuide de você hoje.'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Santuário de Silêncio',
    archetype: 'O Observador Vigilante',
    description: 'Seu sistema nervoso está em alerta constante. Você precisa de paz.',
    clinicalContext: 'Hipervigilância e cortisol elevado.',
    scent: 'Lavanda e Vetiver',
    activeIngredients: 'Linalol',
    psychologicalAction: 'Inibe a resposta de medo na amígdala cerebral.',
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    imageUrl: 'https://images.unsplash.com/photo-1498612753354-772a3062993c?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Desligue o barulho do mundo. Encontre seu centro.'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Raízes de Conexão',
    archetype: 'A Alma Isolada',
    description: 'Uma sensação de desconexão. Este aroma evoca o calor de um lar.',
    clinicalContext: 'Privação de suporte social percebido.',
    scent: 'Canela e Baunilha',
    activeIngredients: 'Aldeído Cinâmico',
    psychologicalAction: 'Gera percepção térmica de calor e segurança.',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Sinta-se em casa, onde quer que você esteja.'
  },
  anxiety: {
    id: 'anxiety',
    title: 'Brisa de Calmaria',
    archetype: 'O Mente Acelerada',
    description: 'Pensamentos que não param, antecipando o amanhã. Você precisa de âncoras no presente.',
    clinicalContext: 'Transtorno de ansiedade generalizada e inquietação.',
    scent: 'Capim-Limão e Gengibre',
    activeIngredients: 'Citral',
    psychologicalAction: 'Refresca o sistema nervoso e interrompe ciclos de pensamentos repetitivos.',
    color: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1000&auto=format&fit=crop', // Capim-limão
    strongCTA: 'Traga seus pensamentos de volta para o agora. Respire alívio.'
  },
  mental_fatigue: {
    id: 'mental_fatigue',
    title: 'Foco Absoluto',
    archetype: 'O Estudioso Sobrecarregado',
    description: 'Dificuldade de concentração e cansaço mental após horas de telas e decisões.',
    clinicalContext: 'Fadiga cognitiva e saturação de informação.',
    scent: 'Café e Cravo',
    activeIngredients: 'Cafeína volátil e Eugenol',
    psychologicalAction: 'Aumenta a prontidão mental e a acuidade visual.',
    color: 'bg-stone-50 text-stone-900 border-stone-200',
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop', // Grãos de café
    strongCTA: 'Desperte seu potencial máximo. O foco que você precisa está aqui.'
  },
  creative_block: {
    id: 'creative_block',
    title: 'Expansão Criativa',
    archetype: 'O Criador Travado',
    description: 'A sensação de estar estagnado, sem novas ideias ou brilho criativo.',
    clinicalContext: 'Inibição cognitiva e tédio existencial.',
    scent: 'Eucalipto e Limão Siciliano',
    activeIngredients: 'Eucaliptol',
    psychologicalAction: 'Abre as vias respiratórias e expande a percepção espacial, facilitando o insight.',
    color: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    imageUrl: 'https://images.unsplash.com/photo-1543160732-723652a92661?q=80&w=1000&auto=format&fit=crop', // Eucalipto
    strongCTA: 'Rompa as barreiras da sua mente. Deixe a inspiração fluir.'
  },
  irritability: {
    id: 'irritability',
    title: 'Serenidade Profunda',
    archetype: 'O Vulcão Interno',
    description: 'Paciência curta, reações explosivas e sensação de irritação com pequenos ruídos.',
    clinicalContext: 'Baixa tolerância ao estresse e fadiga emocional.',
    scent: 'Camomila e Sândalo',
    activeIngredients: 'Azuleno',
    psychologicalAction: 'Suaviza as reações impulsivas e esfria o estado emocional inflamado.',
    color: 'bg-blue-50 text-blue-900 border-blue-200',
    imageUrl: 'https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=1000&auto=format&fit=crop', // Camomila
    strongCTA: 'Transforme sua agitação em paz. Escolha a serenidade.'
  },
  grief: {
    id: 'grief',
    title: 'Consolo Eterno',
    archetype: 'O Coração em Luto',
    description: 'Saudade que dói, perda de algo querido ou uma fase que se encerrou.',
    clinicalContext: 'Processamento de perda e luto agudo.',
    scent: 'Rosas e Patchouli',
    activeIngredients: 'Geraniol',
    psychologicalAction: 'Ajuda na liberação de ocitocina, promovendo o auto-acolhimento.',
    color: 'bg-rose-50 text-rose-900 border-rose-200',
    imageUrl: 'https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1000&auto=format&fit=crop', // Rosas
    strongCTA: 'Honre seus sentimentos. Deixe que este perfume cure seu coração.'
  }
};