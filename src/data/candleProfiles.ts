export interface CandleProfile {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  scent: string;
  benefits: string;
  psychologicalNote: string;
  color: string;
}

export const candleProfiles: Record<string, CandleProfile> = {
  stressed: {
    id: 'stressed',
    title: 'Serenidade Profunda',
    description: 'Você parece estar enfrentando um nível alto de cortisol e tensão muscular.',
    symptoms: ['Ansiedade', 'Pensamentos acelerados', 'Tensão nos ombros'],
    scent: 'Lavanda e Camomila',
    benefits: 'A lavanda contém linalol, que estudos indicam ter efeitos relaxantes no sistema nervoso central, ajudando a reduzir a frequência cardíaca.',
    psychologicalNote: 'Foque em técnicas de respiração diafragmática enquanto acende sua vela.',
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
  depressed: {
    id: 'depressed',
    title: 'Despertar Solar',
    description: 'Sua energia parece estar baixa, com uma sensação de desânimo ou apatia.',
    symptoms: ['Falta de motivação', 'Tristeza persistente', 'Letargia'],
    scent: 'Limão Siciliano e Alecrim',
    benefits: 'Aromas cítricos são conhecidos por estimular a produção de serotonina e aumentar o estado de alerta mental.',
    psychologicalNote: 'Pequenos passos importam. O aroma pode ser o gatilho sensorial para iniciar uma atividade leve.',
    color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
  },
  exhausted: {
    id: 'exhausted',
    title: 'Refúgio na Floresta',
    description: 'Você atingiu um estado de esgotamento mental ou burnout.',
    symptoms: ['Exaustão mental', 'Dificuldade de concentração', 'Sensação de sobrecarga'],
    scent: 'Eucalipto e Cedro',
    benefits: 'O eucalipto ajuda na "limpeza" mental e na respiração, enquanto o cedro traz propriedades de aterramento (grounding).',
    psychologicalNote: 'Permita-se o ócio. Sua produtividade não define seu valor.',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  lonely: {
    id: 'lonely',
    title: 'Abraço de Baunilha',
    description: 'Você está buscando conforto emocional e uma sensação de acolhimento.',
    symptoms: ['Solidão', 'Necessidade de conforto', 'Vazio emocional'],
    scent: 'Baunilha e Sândalo',
    benefits: 'A baunilha evoca memórias de infância e segurança, promovendo uma sensação de "conforto térmico" emocional.',
    psychologicalNote: 'Pratique a autocompaixão. Trate-se com a mesma gentileza que trataria um amigo querido.',
    color: 'bg-orange-100 text-orange-800 border-orange-200'
  }
};