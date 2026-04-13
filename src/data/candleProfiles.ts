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
    description: 'A carga foi pesada e você sustentou por muito tempo. Agora é hora de baixar a guarda e restaurar sua força vital.',
    clinicalContext: 'Esgotamento de performance e fadiga adrenal.',
    scent: 'Alecrim e Cedro do Atlas',
    activeIngredients: 'Cineol e Sesquiterpenos',
    psychologicalAction: 'Fortalece a estrutura emocional e clareia a mente para novas batalhas.',
    color: 'bg-stone-100 text-stone-900 border-stone-200',
    imageUrl: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=1000&auto=format&fit=crop', // Madeira de Cedro
    strongCTA: 'Recupere sua autoridade sobre sua própria energia. Recomece agora.'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Nova Estratégia',
    archetype: 'O Estrategista Sem Rumo',
    description: 'Quando o caminho some da vista, é preciso elevar a perspectiva. Este aroma limpa o horizonte.',
    clinicalContext: 'Desmotivação e perda de propósito.',
    scent: 'Laranja Amarga e Âmbar',
    activeIngredients: 'Limoneno e Compostos Resinosos',
    psychologicalAction: 'Estimula a visão de longo prazo e a coragem para agir.',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30eb3?q=80&w=1000&auto=format&fit=crop', // Âmbar rústico
    strongCTA: 'Acenda sua visão. O próximo passo será o mais importante.'
  },
  sadness: {
    id: 'sadness',
    title: 'Aterramento Profundo',
    archetype: 'O Observador Silencioso',
    description: 'Para os momentos de melancolia que pedem solidez. Um aroma que serve como um porto seguro.',
    clinicalContext: 'Melancolia e instabilidade emocional.',
    scent: 'Musgo de Carvalho e Patchouli',
    activeIngredients: 'Patchoulol',
    psychologicalAction: 'Proporciona a sensação de "pé no chão" e estabilidade interior.',
    color: 'bg-slate-100 text-slate-900 border-slate-200',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop', // Floresta densa/Musgo
    strongCTA: 'Encontre sua força na terra. Você está seguro aqui.'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Escudo de Serenidade',
    archetype: 'O Protetor sob Pressão',
    description: 'O ruído externo está alto demais. Você precisa de um refúgio para sua mente processar o caos.',
    clinicalContext: 'Alto nível de cortisol e estresse ocupacional.',
    scent: 'Vetiver e Sândalo',
    activeIngredients: 'Khusimol',
    psychologicalAction: 'Reduz a hiperatividade do sistema nervoso simpático.',
    color: 'bg-gray-100 text-gray-900 border-gray-200',
    imageUrl: 'https://images.unsplash.com/photo-1615485240384-58af230869cd?q=80&w=1000&auto=format&fit=crop', // Sândalo rústico
    strongCTA: 'Seu silêncio é sua maior arma. Recupere-o agora.'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Refúgio de Inverno',
    archetype: 'O Lobo Solitário',
    description: 'O isolamento pode ser frio. Este aroma traz o calor de uma lareira acesa e de um ambiente seguro.',
    clinicalContext: 'Necessidade de conforto e acolhimento térmico.',
    scent: 'Tabaco, Couro e Baunilha',
    activeIngredients: 'Vanilina e Nicotiana volátil',
    psychologicalAction: 'Evoca memórias de segurança, biblioteca e proteção.',
    color: 'bg-amber-100 text-amber-950 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1524295928322-4b98168b9589?q=80&w=1000&auto=format&fit=crop', // Couro e Tabaco
    strongCTA: 'Transforme sua solidão em solitude produtiva e confortável.'
  },
  anxiety: {
    id: 'anxiety',
    title: 'Foco no Presente',
    archetype: 'O Visionário Ansioso',
    description: 'Muitas ideias, pouco fôlego. Vamos aterrar sua mente para que você possa executar com calma.',
    clinicalContext: 'Ansiedade antecipatória e agitação motora.',
    scent: 'Capim-Limão e Hortelã-Pimenta',
    activeIngredients: 'Mentol e Citral',
    psychologicalAction: 'Limpa o excesso de informação e refresca a consciência.',
    color: 'bg-green-50 text-green-900 border-green-200',
    imageUrl: 'https://images.unsplash.com/photo-1515589158968-351cf4afe8b0?q=80&w=1000&auto=format&fit=crop', // Ervas frescas
    strongCTA: 'Um passo de cada vez. Respire e execute.'
  },
  mental_fatigue: {
    id: 'mental_fatigue',
    title: 'Alta Performance',
    archetype: 'O Executivo Sobrecarregado',
    description: 'Sua mente é seu principal ativo. Recupere a nitidez mental necessária para decidir com precisão.',
    clinicalContext: 'Fadiga de decisão e saturação cognitiva.',
    scent: 'Café Torrado e Cardamomo',
    activeIngredients: 'Terpenos de Café',
    psychologicalAction: 'Aumenta a vigilância e a velocidade de processamento mental.',
    color: 'bg-orange-100 text-orange-950 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop', // Grãos de café escuros
    strongCTA: 'Volte ao topo da sua performance. Mente afiada, decisão clara.'
  },
  creative_block: {
    id: 'creative_block',
    title: 'O Arquiteto',
    archetype: 'O Criador Travado',
    description: 'A página em branco é um desafio. Este aroma abre os caminhos da imaginação estruturada.',
    clinicalContext: 'Inibição criativa e rigidez mental.',
    scent: 'Eucalipto e Pinho Siberiano',
    activeIngredients: 'Alfa-pineno',
    psychologicalAction: 'Expande a percepção espacial e estimula conexões neurais inusitadas.',
    color: 'bg-teal-50 text-teal-900 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1588336142586-36aff13141fc?q=80&w=1000&auto=format&fit=crop', // Floresta de Pinhos
    strongCTA: 'Desenhe seu futuro sem amarras. A inspiração está no ar.'
  },
  irritability: {
    id: 'irritability',
    title: 'Domínio Interno',
    archetype: 'O Líder em Conflito',
    description: 'A irritação é sinal de que seu limite foi invadido. Recupere sua compostura e liderança interior.',
    clinicalContext: 'Irritabilidade e baixa tolerância a ruído.',
    scent: 'Bergamota e Lavanda de Provence',
    activeIngredients: 'Acetato de Linalila',
    psychologicalAction: 'Equilibra o humor e dissipa a energia da raiva.',
    color: 'bg-zinc-100 text-zinc-900 border-zinc-200',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop', // Bergamota/Cítrico
    strongCTA: 'Lidere a si mesmo antes de liderar o mundo.'
  },
  grief: {
    id: 'grief',
    title: 'Legado e Honra',
    archetype: 'O Guardião das Memórias',
    description: 'Lidar com a perda exige força e respeito. Um aroma sóbrio que honra o que passou e o que permanece.',
    clinicalContext: 'Processamento de luto e transição de ciclo.',
    scent: 'Madeira de Ébano e Rosa Negra',
    activeIngredients: 'Compostos fenólicos',
    psychologicalAction: 'Apoia a integração emocional e o fechamento de ciclos.',
    color: 'bg-stone-200 text-stone-900 border-stone-300',
    imageUrl: 'https://images.unsplash.com/photo-1533551270381-0f757f920215?q=80&w=1000&auto=format&fit=crop', // Madeira escura/Ébano
    strongCTA: 'Honre sua história. Deixe o tempo curar o que a essência conforta.'
  }
};