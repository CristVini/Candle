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
    title: 'Recuperação do Guerreiro',
    archetype: 'O Guerreiro Exausto',
    description: 'Para quando a resiliência física e mental atingiu o esgotamento. Este aroma atua na restauração da estrutura interna.',
    clinicalContext: 'Fadiga adrenal e esgotamento de performance (Burnout).',
    scent: 'Alecrim e Cedro do Atlas',
    activeIngredients: '1,8-Cineol e Sesquiterpenos',
    psychologicalAction: 'Estimula a oxigenação cerebral e promove a sensação de suporte e segurança.',
    color: 'bg-stone-100 text-stone-900 border-stone-200',
    imageUrl: 'https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=1000&auto=format&fit=crop', // Alecrim e Madeira
    strongCTA: 'Recupere sua autoridade interna. Respire força.'
  },
  joy: {
    id: 'joy',
    title: 'Vibração Solar',
    archetype: 'O Celebrante',
    description: 'Alegria não é apenas um estado, é uma frequência. Este aroma amplifica o entusiasmo e o otimismo.',
    clinicalContext: 'Baixa produção de serotonina e falta de vitalidade.',
    scent: 'Yuzu (Cítrico Japonês) e Champagne',
    activeIngredients: 'Limoneno e Ésteres Frutais',
    psychologicalAction: 'Elevação imediata do humor e estímulo à sociabilidade e gratidão.',
    color: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    imageUrl: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?q=80&w=1000&auto=format&fit=crop', // Yuzu/Cítricos
    strongCTA: 'Brilhe com intensidade. A vida é uma celebração.'
  },
  sensuality: {
    id: 'sensuality',
    title: 'Magnetismo Noturno',
    archetype: 'A Alma Sedutora',
    description: 'O despertar dos sentidos através da sofisticação. Um aroma que flerta com o mistério e o poder pessoal.',
    clinicalContext: 'Inibição sensorial e necessidade de reforço da libido/autoestima.',
    scent: 'Baunilha Negra, Musk e Ylang Ylang',
    activeIngredients: 'Linalol e Acetato de Benzila',
    psychologicalAction: 'Ansiolítico sensorial que reduz a autocrítica e aumenta o magnetismo pessoal.',
    color: 'bg-rose-950 text-rose-50 border-rose-900',
    imageUrl: 'https://images.unsplash.com/photo-1505575967455-40e256f7377c?q=80&w=1000&auto=format&fit=crop', // Baunilha e flores exóticas
    strongCTA: 'Renda-se ao prazer. Crie o clima inesquecível.'
  },
  anxiety: {
    id: 'anxiety',
    title: 'Foco no Presente',
    archetype: 'O Visionário Ansioso',
    description: 'Para mentes que vivem no amanhã. Este aroma é uma âncora que traz a consciência para o aqui e agora.',
    clinicalContext: 'Ansiedade generalizada e ruminação mental.',
    scent: 'Capim-Limão e Hortelã-Pimenta',
    activeIngredients: 'Citral e Mentol',
    psychologicalAction: 'Interrompe ciclos de pensamentos repetitivos e refresca o sistema nervoso.',
    color: 'bg-green-50 text-green-900 border-green-200',
    imageUrl: 'https://images.unsplash.com/photo-1515589158968-351cf4afe8b0?q=80&w=1000&auto=format&fit=crop', // Ervas frescas
    strongCTA: 'Desligue o ruído. Encontre o seu centro.'
  },
  mental_fatigue: {
    id: 'mental_fatigue',
    title: 'Alta Performance',
    archetype: 'O Executivo Sobrecarregado',
    description: 'Quando o cansaço mental impede a tomada de decisão. Claridade e nitidez para o seu trabalho.',
    clinicalContext: 'Fadiga cognitiva e névoa mental (Brain Fog).',
    scent: 'Café Torrado e Cardamomo',
    activeIngredients: 'Terpenos de Café e Cineol',
    psychologicalAction: 'Aumenta a acuidade visual e a velocidade de processamento de informações.',
    color: 'bg-orange-100 text-orange-950 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop', // Grãos de Café
    strongCTA: 'Mente afiada, visão clara. Volte ao jogo.'
  },
  creative_block: {
    id: 'creative_block',
    title: 'O Arquiteto',
    archetype: 'O Criador Travado',
    description: 'A criatividade exige espaço. Este aroma expande as fronteiras da mente para novos insights.',
    clinicalContext: 'Rigidez cognitiva e bloqueio de ideias.',
    scent: 'Eucalipto e Pinho Siberiano',
    activeIngredients: 'Alfa-pineno e Eucaliptol',
    psychologicalAction: 'Abre as vias respiratórias e expande a percepção espacial (metáfora de liberdade).',
    color: 'bg-teal-50 text-teal-900 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1588336142586-36aff13141fc?q=80&w=1000&auto=format&fit=crop', // Floresta de Pinhos
    strongCTA: 'Desenhe o impossível. A inspiração flui agora.'
  },
  irritability: {
    id: 'irritability',
    title: 'Domínio Interno',
    archetype: 'O Líder em Conflito',
    description: 'Paciência curta e reações impulsivas. Recupere o controle e a diplomacia emocional.',
    clinicalContext: 'Estresse agudo e baixa tolerância à frustração.',
    scent: 'Bergamota e Lavanda de Provence',
    activeIngredients: 'Acetato de Linalila e Linalol',
    psychologicalAction: 'Equilibra o sistema límbico, suavizando a resposta de luta ou fuga.',
    color: 'bg-zinc-100 text-zinc-900 border-zinc-200',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop', // Bergamota fresca
    strongCTA: 'Mantenha a compostura. Lidere com serenidade.'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Escudo de Serenidade',
    archetype: 'O Protetor sob Pressão',
    description: 'Um santuário pessoal contra o caos do mundo externo. Silêncio para a sua mente.',
    clinicalContext: 'Hipervigilância e altos níveis de cortisol.',
    scent: 'Vetiver e Sândalo',
    activeIngredients: 'Khusimol e Santalol',
    psychologicalAction: 'Aterramento profundo. Reduz a frequência cardíaca e induz à calma reflexiva.',
    color: 'bg-gray-100 text-gray-900 border-gray-200',
    imageUrl: 'https://images.unsplash.com/photo-1615485240384-58af230869cd?q=80&w=1000&auto=format&fit=crop', // Sândalo e raízes
    strongCTA: 'Seu refúgio é inviolável. Respire paz.'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Nova Estratégia',
    archetype: 'O Estrategista Sem Rumo',
    description: 'Recupere o brilho nos olhos e a vontade de agir. Um aroma que ilumina o futuro.',
    clinicalContext: 'Desmotivação e perda de brilho vital.',
    scent: 'Laranja Amarga e Âmbar',
    activeIngredients: 'Limoneno e Pineno',
    psychologicalAction: 'Estimula a produção de dopamina e a sensação de possibilidade.',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1000&auto=format&fit=crop', // Laranja e Resina
    strongCTA: 'Acenda sua visão. O amanhã começa hoje.'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Refúgio de Inverno',
    archetype: 'O Lobo Solitário',
    description: 'Transforme o isolamento em uma experiência de conforto e auto-acolhimento.',
    clinicalContext: 'Sensação de desamparo ou isolamento social.',
    scent: 'Tabaco, Couro e Baunilha',
    activeIngredients: 'Vanilina e Fenóis rústicos',
    psychologicalAction: 'Promove conforto térmico psicológico e sensação de segurança doméstica.',
    color: 'bg-amber-100 text-amber-950 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1524295928322-4b98168b9589?q=80&w=1000&auto=format&fit=crop', // Couro e Tabaco
    strongCTA: 'Sinta-se em casa. Onde quer que você esteja.'
  },
  sadness: {
    id: 'sadness',
    title: 'Aterramento Profundo',
    archetype: 'O Observador Silencioso',
    description: 'Dê solidez aos seus sentimentos. Um suporte mineral para dias de introspecção.',
    clinicalContext: 'Melancolia e instabilidade emocional.',
    scent: 'Musgo de Carvalho e Patchouli',
    activeIngredients: 'Patchoulol',
    psychologicalAction: 'Proporciona a percepção de estabilidade e conexão com a terra.',
    color: 'bg-slate-100 text-slate-900 border-slate-200',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop', // Musgo/Floresta
    strongCTA: 'Encontre sua base. Você é inabalável.'
  },
  grief: {
    id: 'grief',
    title: 'Legado e Honra',
    archetype: 'O Guardião das Memórias',
    description: 'Honrar o que foi vivido é o primeiro passo para a cura. Um aroma solene e reconfortante.',
    clinicalContext: 'Processamento de perda e transições de vida.',
    scent: 'Madeira de Ébano e Rosa Negra',
    activeIngredients: 'Geraniol e Eugenol',
    psychologicalAction: 'Apoia a integração emocional e o fechamento de ciclos com dignidade.',
    color: 'bg-stone-200 text-stone-900 border-stone-300',
    imageUrl: 'https://images.unsplash.com/photo-1533551270381-0f757f920215?q=80&w=1000&auto=format&fit=crop', // Madeira escura/Ébano
    strongCTA: 'Honre sua história. A essência permanece.'
  }
};