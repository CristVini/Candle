export interface Ingredient {
  name: string;
  image: string;
  benefit: string;
  description: string;
}

export const ingredientsData: Record<string, Ingredient> = {
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=60&w=600",
    benefit: "Elevação de Humor",
    description: "Atua no sistema nervoso reduzindo a fadiga e promovendo uma sensação de otimismo imediato."
  },
  "Grapefruit": {
    name: "Grapefruit",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=60&w=600",
    benefit: "Vitalidade e Foco",
    description: "Conhecido como o aroma da felicidade, estimula a mente e ajuda a combater o desânimo matinal."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=60&w=600",
    benefit: "Alívio da Ansiedade",
    description: "Possui propriedades sedativas suaves que ajudam a acalmar o coração e reduzir a tensão nervosa."
  },
  "Patchouli": {
    name: "Patchouli",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=60&w=600",
    benefit: "Aterramento e Equilíbrio",
    description: "Ajuda a conectar-se com o momento presente, sendo excelente para meditação e estabilidade emocional."
  },
  "Âmbar": {
    name: "Âmbar",
    image: "https://images.unsplash.com/photo-1589307304022-303726710777?auto=format&fit=crop&q=60&w=600",
    benefit: "Conforto e Calor",
    description: "Proporciona uma sensação de segurança e acolhimento, como um abraço invisível em dias frios."
  },
  "Baunilha Negra": {
    name: "Baunilha Negra",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=60&w=600",
    benefit: "Relaxamento Profundo",
    description: "Sua doçura natural reduz a irritabilidade e promove um sono mais tranquilo e reparador."
  },
  "Lavanda Francesa": {
    name: "Lavanda Francesa",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=60&w=600",
    benefit: "Calma Absoluta",
    description: "O padrão ouro da aromaterapia para reduzir o estresse, a insônia e a agitação mental."
  },
  "Sândalo": {
    name: "Sândalo",
    image: "https://images.unsplash.com/photo-1621262070138-0857c3272445?auto=format&fit=crop&q=60&w=600",
    benefit: "Clareza Espiritual",
    description: "Facilita a introspecção e ajuda a silenciar o ruído externo para focar no que é essencial."
  },
  "Hortelã-Pimenta": {
    name: "Hortelã-Pimenta",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=60&w=600",
    benefit: "Concentração",
    description: "Desperta as faculdades cognitivas e ajuda a manter a nitidez durante tarefas exigentes."
  },
  "Canela": {
    name: "Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=60&w=600",
    benefit: "Estimulante Físico",
    description: "Aquece o ambiente e ativa a circulação de energia, combatendo a letargia e o cansaço."
  }
};