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
    benefit: "Equilíbrio e Frescor",
    description: "Possui um aroma verde, fresco e levemente aquático. É altamente valorizado por suas propriedades de purificação e renovação energética, sendo ideal para aliviar o cansaço mental."
  },
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=80&w=800",
    benefit: "Antidepressivo Natural",
    description: "Seu aroma cítrico, doce e levemente floral é conhecido como o 'raio de sol líquido'. Possui propriedades que elevam o humor e reduzem a ansiedade."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Clareza e Intuição",
    description: "Apresenta um aroma cítrico intenso, fresco e herbal. É utilizado por suas propriedades estimulantes da mente e da intuição."
  },
  "Flor de Cerejeira": {
    name: "Flor de Cerejeira",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800",
    benefit: "Renovação e Esperança",
    description: "Com um aroma floral delicado, simboliza o recomeço. Suas propriedades ajudam a cultivar a gratidão e a suavizar a rigidez emocional."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz e Relaxamento",
    description: "Possui um aroma floral cítrico profundo. É um potente sedativo natural, eficaz para reduzir ataques de pânico e insônia."
  },
  "Jasmim": {
    name: "Jasmim",
    image: "https://images.unsplash.com/photo-1533614767277-33152569e236?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoestima e Paixão",
    description: "Reconhecido pelo seu aroma floral intenso. É valorizado por suas propriedades afrodisíacas, ajudando a despertar a sensualidade."
  },
  "Lavanda": {
    name: "Lavanda",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Segurança e Sono",
    description: "Seu aroma floral herbáceo é o clássico do relaxamento. Possui propriedades calmantes que diminuem a frequência cardíaca."
  },
  "Limão Siciliano": {
    name: "Limão Siciliano",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco e Purificação",
    description: "Apresenta um aroma cítrico limpo. Atua como um tônico mental, auxiliando na clareza de raciocínio e na tomada de decisões."
  },
  "Maçã com Canela": {
    name: "Maçã com Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=80&w=800",
    benefit: "Aconchego e Memória",
    description: "Combina o frescor frutado com o calor picante. Estimula a memória afetiva e a sensação de segurança do lar."
  },
  "Madeiras Nobres": {
    name: "Madeiras Nobres",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Estabilidade e Poder",
    description: "Aroma denso e sofisticado. Suas propriedades remetem ao aterramento e à autoridade pessoal."
  },
  "Melancia": {
    name: "Melancia",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    benefit: "Vitalidade e Alegria",
    description: "Aroma frutado e refrescante. Atua no resgate da alegria espontânea e combate o desânimo."
  },
  "Orquídea": {
    name: "Orquídea",
    image: "https://images.unsplash.com/photo-1534885110300-2443681432f8?auto=format&fit=crop&q=80&w=800",
    benefit: "Luxo e Elevação",
    description: "Aroma floral sutil e elegante. Estimula a criatividade e a elevação espiritual."
  },
  "Peônia": {
    name: "Peônia",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Prosperidade e Suavidade",
    description: "Aroma floral fresco. Associada à abundância e cura emocional, promovendo uma atitude gentil."
  },
  "Vanilla": {
    name: "Vanilla",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Conforto e Nutrição",
    description: "Aroma doce e quente. Traz sensação de acolhimento emocional, ideal para reduzir o medo da solidão."
  },
  "Verbena": {
    name: "Verbena",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio Nervoso",
    description: "Aroma cítrico-herbal revigorante. Equilibra o sistema nervoso mantendo a mente alerta e disposta."
  },
  "Patchouli": {
    name: "Patchouli",
    image: "https://images.unsplash.com/photo-1612470197472-351e06d997d9?auto=format&fit=crop&q=80&w=800",
    benefit: "Aterramento e Calma",
    description: "Reconhecido pelo seu aroma denso, terroso e amadeirado, sendo altamente valorizado por suas propriedades calmantes, de 'aterramento' (grounding) e relaxamento. É ideal para reduzir estresse e ansiedade."
  }
};