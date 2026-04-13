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
    description: 'Você atingiu o limite da sua reserva de energia psíquica. Sua mente pede uma pausa profunda e uma reconexão com o agora.',
    clinicalContext: 'Níveis críticos de fadiga adrenal e exaustão cognitiva.',
    scent: 'Alecrim e Hortelã-Pimenta',
    activeIngredients: 'Cineol e Mentol',
    psychologicalAction: 'Estimula o córtex pré-frontal, combatendo a "névoa mental" e restaurando a clareza.',
    color: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    imageUrl: 'https://images.unsplash.com/photo-1515589158968-351cf4afe8b0?q=80&w=1000&auto=format&fit=crop', // Alecrim fresco
    strongCTA: 'Não espere o fim para recomeçar. Resgate sua energia e clareza mental agora.'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Horizonte de Luz',
    archetype: 'O Viajante no Escuro',
    description: 'A sensação de que o futuro é nebuloso. Você precisa de um choque de vitalidade sensorial para reacender sua chama interior.',
    clinicalContext: 'Baixa reatividade a estímulos positivos e anedonia.',
    scent: 'Bergamota e Laranja Doce',
    activeIngredients: 'Limoneno',
    psychologicalAction: 'Promove a liberação de dopamina, associada à antecipação de prazer e renovação da esperança.',
    color: 'bg-amber-50 text-amber-900 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9caab53?q=80&w=1000&auto=format&fit=crop', // Laranjas e cítricos
    strongCTA: 'Acenda a esperança que você esqueceu que existia. Sinta a vida vibrar novamente.'
  },
  sadness: {
    id: 'sadness',
    title: 'Abraço Mineral',
    archetype: 'O Poeta Melancólico',
    description: 'Uma tristeza profunda que parece pesar. Você precisa de um aroma que valide seu sentimento enquanto o conforta suavemente.',
    clinicalContext: 'Processamento de luto emocional ou melancolia persistente.',
    scent: 'Sândalo e Jasmim',
    activeIngredients: 'Santalol',
    psychologicalAction: 'Proporciona aterramento (grounding) e conforto emocional, reduzindo a sensação de vazio.',
    color: 'bg-indigo-50 text-indigo-900 border-indigo-200',
    imageUrl: 'https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=1000&auto=format&fit=crop', // Flores de Jasmim
    strongCTA: 'Permita-se ser abraçado por este aroma. Você merece esse acolhimento agora.'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Santuário de Silêncio',
    archetype: 'O Observador Vigilante',
    description: 'Seu sistema nervoso está em estado de alerta constante. Tudo parece um ruído. Você precisa de silêncio interior.',
    clinicalContext: 'Hipervigilância e cortisol elevado.',
    scent: 'Lavanda Francesa e Vetiver',
    activeIngredients: 'Linalol e Acetato de Linalila',
    psychologicalAction: 'Inibe a superestimulação da amígdala, o centro do medo no cérebro, induzindo relaxamento.',
    color: 'bg-purple-50 text-purple-900 border-purple-200',
    imageUrl: 'https://images.unsplash.com/photo-1498612753354-772a3062993c?q=80&w=1000&auto=format&fit=crop', // Lavanda nítida
    strongCTA: 'O silêncio que sua mente implora está a um pavio de distância. Respire fundo.'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Raízes de Conexão',
    archetype: 'A Alma Isolada',
    description: 'Uma sensação de desconexão com o mundo. Este aroma evoca o calor de um lar seguro e o conforto de um abraço quente.',
    clinicalContext: 'Privação de suporte social percebido.',
    scent: 'Canela e Baunilha',
    activeIngredients: 'Aldeído Cinâmico',
    psychologicalAction: 'Evoca memórias olfativas de segurança e pertencimento, combatendo o frio emocional.',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?q=80&w=1000&auto=format&fit=crop', // Paus de canela
    strongCTA: 'Transforme sua casa em um abraço quente e seguro. Você não está sozinho.'
  }
};