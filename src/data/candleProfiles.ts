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
  // ... (perfis anteriores mantidos internamente, adicionando os novos)
  burnout: {
    id: 'burnout',
    title: 'Recuperação do Guerreiro',
    archetype: 'O Guerreiro Exausto',
    description: 'A carga foi pesada e você sustentou por muito tempo. Agora é hora de restaurar sua força.',
    clinicalContext: 'Esgotamento de performance.',
    scent: 'Alecrim e Cedro',
    activeIngredients: 'Cineol',
    psychologicalAction: 'Fortalece a estrutura emocional.',
    color: 'bg-stone-100 text-stone-900 border-stone-200',
    imageUrl: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Recupere sua força vital.'
  },
  joy: {
    id: 'joy',
    title: 'Vibração Solar',
    archetype: 'O Celebrante',
    description: 'A vida é uma sucessão de vitórias que merecem ser sentidas. Este aroma amplifica sua gratidão e energia vital.',
    clinicalContext: 'Estado de fluxo (Flow) e celebração de conquistas.',
    scent: 'Champagne e Yuzu (Cítrico Japonês)',
    activeIngredients: 'Ésteres Frutais e Citronelal',
    psychologicalAction: 'Eleva a frequência vibracional e promove o otimismo expansivo.',
    color: 'bg-yellow-50 text-yellow-900 border-yellow-200',
    imageUrl: 'https://images.unsplash.com/photo-1592179900431-1e021ea53b28?q=80&w=1000&auto=format&fit=crop', // Frutas cítricas brilhantes
    strongCTA: 'Celebre o agora. Sua luz merece brilhar com intensidade máxima.'
  },
  sensuality: {
    id: 'sensuality',
    title: 'Magnetismo Noturno',
    archetype: 'A Alma Sedutora',
    description: 'Um convite ao toque, ao mistério e à conexão profunda. Ideal para momentos de intimidade e poder pessoal.',
    clinicalContext: 'Estímulo da libido e autoconfiança corporal.',
    scent: 'Baunilha Negra, Musk e Ylang Ylang',
    activeIngredients: 'Linalol e Moléculas de Musk Vegetal',
    psychologicalAction: 'Desperta os sentidos primordiais e reduz as inibições sociais.',
    color: 'bg-rose-950 text-rose-50 border-rose-900',
    imageUrl: 'https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?q=80&w=1000&auto=format&fit=crop', // Baunilha e especiarias escuras
    strongCTA: 'Renda-se ao prazer. Crie uma atmosfera inesquecível hoje.'
  },
  anxiety: {
    id: 'anxiety',
    title: 'Foco no Presente',
    archetype: 'O Visionário Ansioso',
    description: 'Muitas ideias, pouco fôlego. Vamos aterrar sua mente.',
    clinicalContext: 'Ansiedade antecipatória.',
    scent: 'Capim-Limão e Hortelã',
    activeIngredients: 'Mentol',
    psychologicalAction: 'Refresca a consciência.',
    color: 'bg-green-50 text-green-900 border-green-200',
    imageUrl: 'https://images.unsplash.com/photo-1515589158968-351cf4afe8b0?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Respire e execute.'
  },
  mental_fatigue: {
    id: 'mental_fatigue',
    title: 'Alta Performance',
    archetype: 'O Executivo Sobrecarregado',
    description: 'Sua mente é seu principal ativo. Recupere a nitidez.',
    clinicalContext: 'Fadiga de decisão.',
    scent: 'Café Torrado e Cardamomo',
    activeIngredients: 'Terpenos de Café',
    psychologicalAction: 'Aumenta a vigilância.',
    color: 'bg-orange-100 text-orange-950 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Mente afiada, decisão clara.'
  },
  creative_block: {
    id: 'creative_block',
    title: 'O Arquiteto',
    archetype: 'O Criador Travado',
    description: 'Abre os caminhos da imaginação estruturada.',
    clinicalContext: 'Inibição criativa.',
    scent: 'Eucalipto e Pinho',
    activeIngredients: 'Alfa-pineno',
    psychologicalAction: 'Expande a percepção espacial.',
    color: 'bg-teal-50 text-teal-900 border-teal-200',
    imageUrl: 'https://images.unsplash.com/photo-1588336142586-36aff13141fc?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'A inspiração está no ar.'
  },
  irritability: {
    id: 'irritability',
    title: 'Domínio Interno',
    archetype: 'O Líder em Conflito',
    description: 'Recupere sua compostura e liderança interior.',
    clinicalContext: 'Baixa tolerância a ruído.',
    scent: 'Bergamota e Lavanda',
    activeIngredients: 'Acetato de Linalila',
    psychologicalAction: 'Dissipa a energia da raiva.',
    color: 'bg-zinc-100 text-zinc-900 border-zinc-200',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Lidere a si mesmo.'
  },
  acute_stress: {
    id: 'acute_stress',
    title: 'Escudo de Serenidade',
    archetype: 'O Protetor sob Pressão',
    description: 'O ruído externo está alto demais. Recupere seu refúgio.',
    clinicalContext: 'Estresse ocupacional.',
    scent: 'Vetiver e Sândalo',
    activeIngredients: 'Khusimol',
    psychologicalAction: 'Reduz a hiperatividade do sistema nervoso.',
    color: 'bg-gray-100 text-gray-900 border-gray-200',
    imageUrl: 'https://images.unsplash.com/photo-1615485240384-58af230869cd?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Recupere seu silêncio.'
  },
  hopelessness: {
    id: 'hopelessness',
    title: 'Nova Estratégia',
    archetype: 'O Estrategista Sem Rumo',
    description: 'Quando o caminho some da vista, eleve a perspectiva.',
    clinicalContext: 'Perda de propósito.',
    scent: 'Laranja e Âmbar',
    activeIngredients: 'Limoneno',
    psychologicalAction: 'Estimula a visão de longo prazo.',
    color: 'bg-orange-50 text-orange-900 border-orange-200',
    imageUrl: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30eb3?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Acenda sua visão.'
  },
  loneliness: {
    id: 'loneliness',
    title: 'Refúgio de Inverno',
    archetype: 'O Lobo Solitário',
    description: 'O isolamento pode ser frio. Este aroma traz o calor de uma lareira.',
    clinicalContext: 'Acolhimento térmico.',
    scent: 'Tabaco e Couro',
    activeIngredients: 'Vanilina',
    psychologicalAction: 'Evoca memórias de segurança.',
    color: 'bg-amber-100 text-amber-950 border-amber-200',
    imageUrl: 'https://images.unsplash.com/photo-1524295928322-4b98168b9589?q=80&w=1000&auto=format&fit=crop',
    strongCTA: 'Transforme sua solidão em solitude.'
  }
};