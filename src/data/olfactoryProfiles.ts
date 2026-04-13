export const olfactoryProfiles: Record<string, any> = {
  joy: {
    id: "joy",
    name: "Euphoria",
    archetype: "O Sol Radiante",
    description: "Seu sistema nervoso pede estímulos que tragam luz e expansão. Recomendamos uma combinação de notas cítricas e solares.",
    notes: ["Bergamota", "Tangerina", "Mel"],
    candleRitual: [
      { time: "Manhã", candle: "Bergamota", activity: "para despertar com otimismo" },
      { time: "Tarde", candle: "Tangerina", activity: "para manter a vitalidade" },
      { time: "Noite", candle: "Mel", activity: "para um descanso doce" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  sensuality: {
    id: "sensuality",
    name: "Velvet",
    archetype: "O Amante",
    description: "Para este momento, buscamos notas que despertem a autoconfiança e o magnetismo pessoal através de aromas densos e envolventes.",
    notes: ["Cereja c/ Avelã", "Black Vanilla", "Patchouli"],
    candleRitual: [
      { time: "Banho", candle: "Cereja c/ Avelã", activity: "para um momento de auto-amor" },
      { time: "Jantar", candle: "Black Vanilla", activity: "para criar atmosfera e magnetismo" },
      { time: "Noite", candle: "Patchouli", activity: "para conexão e presença" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  burnout: {
    id: "burnout",
    name: "Resilience",
    archetype: "O Restaurador",
    description: "O foco aqui é a recuperação profunda. Notas amadeiradas e herbais ajudam a 'aterrar' a mente exausta.",
    notes: ["Pinho", "Eucalipto", "Cedro"],
    candleRitual: [
      { time: "Banho", candle: "Eucalipto", activity: "para descompressão imediata" },
      { time: "Meditação", candle: "Pinho", activity: "para aterramento emocional" },
      { time: "Dormir", candle: "Cedro", activity: "para restauração profunda" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800",
    color: "#1E3A8A"
  },
  anxiety: {
    id: "anxiety",
    name: "Serenity",
    archetype: "O Observador",
    description: "Buscamos o silenciamento do caos mental. Notas florais clássicas e herbais leves são suas maiores aliadas.",
    notes: ["Lavanda", "Camomila", "Bamboo"],
    candleRitual: [
      { time: "Trabalho", candle: "Bamboo", activity: "para manter o foco leve" },
      { time: "Banho", candle: "Camomila", activity: "para acalmar os pensamentos" },
      { time: "Dormir", candle: "Lavanda", activity: "para uma paz absoluta" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  mental_fatigue: {
    id: "mental_fatigue",
    name: "Focus",
    archetype: "O Sábio",
    description: "Clareza e agilidade mental. Notas que estimulam a cognição e combatem a névoa do cansaço intelectual.",
    notes: ["Alecrim Blanc", "Capim Limão", "Hortelã-Pimenta"],
    candleRitual: [
      { time: "Manhã", candle: "Capim Limão", activity: "para clareza mental" },
      { time: "Trabalho", candle: "Alecrim Blanc", activity: "para foco e concentração" },
      { time: "Pausa", candle: "Hortelã-Pimenta", activity: "para revigorar a mente" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  loneliness: {
    id: "loneliness",
    name: "Cuddle",
    archetype: "O Acolhedor",
    description: "Aromas que remetem ao colo, ao lar e a memórias doces. Notas quentes e especiadas que preenchem o vazio.",
    notes: ["Black Vanilla", "Mel", "Canela"],
    candleRitual: [
      { time: "Tarde", candle: "Canela", activity: "para aquecer o ambiente" },
      { time: "Jantar", candle: "Mel", activity: "para nutrição emocional" },
      { time: "Dormir", candle: "Black Vanilla", activity: "para um abraço olfativo" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  acute_stress: {
    id: "acute_stress",
    name: "Shield",
    archetype: "O Guardião",
    description: "Proteção e blindagem emocional. Notas resinosas e profundas que ajudam a manter o eixo em momentos de crise.",
    notes: ["Âmbar Lelis", "Mirra", "Vet Vert"],
    candleRitual: [
      { time: "Meditação", candle: "Mirra", activity: "para equilíbrio espiritual" },
      { time: "Banho", candle: "Vet Vert", activity: "para presença e segurança" },
      { time: "Noite", candle: "Âmbar Lelis", activity: "para proteção energética" }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#374151"
  }
};