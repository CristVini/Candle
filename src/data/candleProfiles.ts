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
}

export const candleProfiles: Record<string, CandleProfile> = {
  burnout: {
    id: 'burnout',
    title: 'Restauração de Ciclos',
    archetype: 'O Guerreiro Exausto',
    description: 'Você atingiu o limite da sua reserva de energia psíquica. O burnout não é apenas cansaço, é uma despersonalização e falta de realização.',
    clinicalContext: 'Níveis críticos de fadiga adrenal e exaustão cognitiva.',
    scent: 'Alecrim e Hortelã-Pimenta',
    activeIngredients: 'Cineol e Mentol',
    psychologicalAction: 'Estimula o córtex pré-frontal, combatendo a "névoa mental" e restaurando a clareza para a tomada de decisões.',
    color: 'bg-red-50 text-red-900 border-red-200'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Horizonte de Luz',
    archetype: 'O Viajante no Escuro',
    description: 'A sensação de que o futuro é nebuloso ou de que nada vai mudar. A desesperança requer um choque de vitalidade sensorial.',
    clinicalContext: 'Baixa reatividade a estímulos positivos e anedonia.',
    scent: 'Bergamota e Laranja Doce',
    activeIngredients: 'Limoneno',
    psychologicalAction: 'Atua no sistema límbico para promover a liberação de dopamina, associada à antecipação de prazer e esperança.',
    color: 'bg-amber-50 text-amber-900 border-amber-200'
  },
  sadness: {
    id: 'sadness',
    title: 'Abraço Mineral',
    archetype: 'O Poeta Melancólico',
    description: 'Uma tristeza profunda que parece pesar nos ombros. Você precisa de um aroma que valide seu sentimento enquanto o conforta.',
    clinicalContext: 'Processamento de luto emocional ou melancolia persistente.',
    scent: 'Sândalo e Jasmim',
    activeIngredients: 'Santalol',
    psychologicalAction: 'Proporciona aterramento (grounding) e conforto emocional, reduzindo a sensação de vazio no peito.',
    color: 'bg-blue-50 text-blue-900 border-blue-200'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Santuário de Silêncio',
    archetype: 'O Observador Vigilante',
    description: 'Seu sistema nervoso está em estado de "luta ou fuga" constante. Tudo parece um alerta de perigo.',
    clinicalContext: 'Hipervigilância e cortisol elevado.',
    scent: 'Lavanda Francesa e Vetiver',
    activeIngredients: 'Linalol e Acetato de Linalila',
    psychologicalAction: 'Inibe a superestimulação da amígdala, o centro do medo no cérebro, induzindo relaxamento imediato.',
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Raízes de Conexão',
    archetype: 'A Alma Isolada',
    description: 'Uma sensação de desconexão com o mundo ao redor, mesmo estando acompanhado.',
    clinicalContext: 'Privação de suporte social percebido.',
    scent: 'Canela e Baunilha',
    activeIngredients: 'Aldeído Cinâmico',
    psychologicalAction: 'Evoca calor físico e memórias olfativas de segurança e pertencimento, combatendo o frio emocional.',
    color: 'bg-orange-50 text-orange-900 border-orange-200'
  }
};