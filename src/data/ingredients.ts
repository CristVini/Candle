export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  "Bamboo": {
    name: "Bamboo",
    image: "https://images.unsplash.com/photo-1542362567-b055001307f4?auto=format&fit=crop&q=80&w=800",
    benefit: "Flexibilidade",
    description: "Conhecido como o 'aroma da renovação', o Bamboo ajuda a mente a se adaptar a novas fases, trazendo frescor e leveza para ambientes carregados."
  },
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoestima",
    description: "O 'raio de sol líquido'. A Bergamota transmuta a tristeza em alegria espontânea e ajuda a dissipar a autocrítica excessiva."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Intuição",
    description: "O 'óleo da clareza mental'. Ajuda a limpar pensamentos negativos e estimula a percepção intuitiva para decisões difíceis."
  },
  "Flor de Cerejeira": {
    name: "Flor de Cerejeira",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800",
    benefit: "Recomeço",
    description: "Simboliza a beleza do efêmero. Convida à gratidão pelo momento presente e traz uma energia de renovação e esperança."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Alívio da Ansiedade",
    description: "Um bálsamo para o sistema nervoso. Acalma corações agitados e traz uma sensação de paz profunda e acolhedora."
  },
  "Jasmim": {
    name: "Jasmim",
    image: "https://images.unsplash.com/photo-1533614767277-33152569e236?auto=format&fit=crop&q=80&w=800",
    benefit: "Sensualidade",
    description: "O 'rei das flores'. Desperta a autoconfiança, a libido e a capacidade de se permitir sentir prazer e beleza na vida."
  },
  "Lavanda": {
    name: "Lavanda",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz Interior",
    description: "O 'colo de mãe'. Envolve o ser em um manto de segurança, silenciando o caos mental e preparando o corpo para o descanso."
  },
  "Limão Siciliano": {
    name: "Limão Siciliano",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco e Purificação",
    description: "O 'óleo da limpeza'. Purifica ambientes e mentes saturadas de informações, trazendo foco e brilho para o raciocínio."
  },
  "Maçã com Canela": {
    name: "Maçã com Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=80&w=800",
    benefit: "Memória Afetiva",
    description: "O 'aroma do lar'. Traz conforto imediato e desperta lembranças de acolhimento, sendo ideal para combater a solidão."
  },
  "Madeiras Nobres": {
    name: "Madeiras Nobres",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Estabilidade",
    description: "O 'óleo da linhagem'. Traz sofisticação e uma profunda sensação de segurança, autoridade pessoal e pés no chão."
  },
  "Melancia": {
    name: "Melancia",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    benefit: "Vitalidade",
    description: "Resgata a criança interior. Traz leveza, bom humor e uma alegria espontânea para dias que parecem pesados demais."
  },
  "Orquídea": {
    name: "Orquídea",
    image: "https://images.unsplash.com/photo-1534885110300-2443681432f8?auto=format&fit=crop&q=80&w=800",
    benefit: "Elevação",
    description: "O 'aroma da raridade'. Promove a sensação de luxo e exclusividade, ajudando a elevar a vibração energética pessoal."
  },
  "Peônia": {
    name: "Peônia",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Abundância",
    description: "Atrai energias de prosperidade e suaviza a rigidez emocional com sua delicadeza floral encantadora."
  },
  "Vanilla": {
    name: "Vanilla",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Acolhimento",
    description: "O 'óleo do carinho'. Dissolve a amargura e a rigidez, permitindo que você se sinta nutrido emocionalmente e seguro."
  },
  "Verbena": {
    name: "Verbena",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio",
    description: "O 'calmante revigorante'. Equilibra o sistema nervoso enquanto mantém a mente alerta e disposta para a ação."
  }
};