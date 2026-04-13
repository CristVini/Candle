export interface Archetype {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  ingredients: string[];
}

export const archetypesData: Archetype[] = [
  {
    id: "zen",
    name: "O Santuário de Paz",
    subtitle: "Para quem busca silêncio interior",
    description: "Esta vela foi desenhada para momentos onde o mundo parece barulhento demais. Ela cria uma redoma de proteção e serenidade.",
    ingredients: ["Lavanda", "Flor de Laranjeira", "Bamboo"]
  },
  {
    id: "focus",
    name: "A Chama da Clareza",
    subtitle: "Para quem precisa de direção",
    description: "Uma combinação vibrante que limpa a névoa mental e ajuda você a se concentrar no que realmente importa.",
    ingredients: ["Limão Siciliano", "Capim Limão", "Verbena"]
  },
  {
    id: "romance",
    name: "O Despertar de Vênus",
    subtitle: "Para celebrar o amor e a autoestima",
    description: "Fragrâncias envolventes que convidam ao toque, ao autocuidado e à celebração das conexões profundas.",
    ingredients: ["Jasmim", "Orquídea", "Vanilla"]
  },
  {
    id: "energy",
    name: "O Sopro da Manhã",
    subtitle: "Para renovar as forças",
    description: "Ideal para começar o dia ou para quando você precisa de um impulso de alegria e vitalidade.",
    ingredients: ["Melancia", "Bergamota", "Flor de Cerejeira"]
  },
  {
    id: "grounding",
    name: "Raízes da Terra",
    subtitle: "Para estabilidade e presença",
    description: "Um aroma que traz você de volta para o presente, ancorando sua energia na força e na segurança.",
    ingredients: ["Patchouli", "Madeiras Nobres", "Peônia"]
  },
  {
    id: "comfort",
    name: "Abraço de Algodão",
    subtitle: "Para se sentir em casa",
    description: "Aquece o coração e traz memórias doces. Perfeito para uma leitura tranquila ou um chá no fim de tarde.",
    ingredients: ["Maçã com Canela", "Vanilla", "Bamboo"]
  }
];