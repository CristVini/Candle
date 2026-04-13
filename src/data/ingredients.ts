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
    description: "Possui um aroma verde, fresco e levemente aquático. É altamente valorizado por suas propriedades de purificação e renovação energética, sendo ideal para aliviar o cansaço mental e criar uma atmosfera de leveza e flexibilidade em momentos de transição."
  },
  "Bergamota": {
    name: "Bergamota",
    image: "https://images.unsplash.com/photo-1596726839719-7925e5ec028a?auto=format&fit=crop&q=80&w=800",
    benefit: "Antidepressivo Natural",
    description: "Seu aroma cítrico, doce e levemente floral é conhecido como o 'raio de sol líquido'. Possui propriedades que elevam o humor e reduzem a ansiedade e a autocrítica, sendo excelente para combater estados de tristeza e promover a autoconfiança."
  },
  "Capim Limão": {
    name: "Capim Limão",
    image: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?auto=format&fit=crop&q=80&w=800",
    benefit: "Clareza e Intuição",
    description: "Apresenta um aroma cítrico intenso, fresco e herbal. É amplamente utilizado por suas propriedades estimulantes da mente e da intuição, auxiliando na concentração, na limpeza de pensamentos negativos e no alívio de tensões musculares causadas pelo estresse."
  },
  "Flor de Cerejeira": {
    name: "Flor de Cerejeira",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80&w=800",
    benefit: "Renovação e Esperança",
    description: "Com um aroma floral delicado, adocicado e romântico, simboliza o recomeço. Suas propriedades ajudam a cultivar a gratidão e a suavizar a rigidez emocional, sendo perfeita para momentos de introspecção e para trazer uma sensação de paz e otimismo."
  },
  "Flor de Laranjeira": {
    name: "Flor de Laranjeira",
    image: "https://images.unsplash.com/photo-1615485241031-482937746261?auto=format&fit=crop&q=80&w=800",
    benefit: "Paz e Relaxamento",
    description: "Possui um aroma floral cítrico profundo e envolvente. É um dos sedativos naturais mais potentes, altamente eficaz para reduzir ataques de pânico, choques emocionais e insônia, promovendo um relaxamento profundo do sistema nervoso."
  },
  "Jasmim": {
    name: "Jasmim",
    image: "https://images.unsplash.com/photo-1533614767277-33152569e236?auto=format&fit=crop&q=80&w=800",
    benefit: "Autoestima e Paixão",
    description: "Reconhecido pelo seu aroma floral intenso, exótico e inebriante. É valorizado por suas propriedades afrodisíacas e eufóricas, ajudando a despertar a sensualidade, a autoconfiança e a superar bloqueios emocionais ligados à afetividade."
  },
  "Lavanda": {
    name: "Lavanda",
    image: "https://images.unsplash.com/photo-1595165736029-79a02330768c?auto=format&fit=crop&q=80&w=800",
    benefit: "Segurança e Sono",
    description: "Seu aroma floral herbáceo e canforado é o clássico do relaxamento. Possui propriedades calmantes que diminuem a frequência cardíaca e a pressão arterial, sendo o aliado número um contra a insônia, a irritabilidade e a ansiedade generalizada."
  },
  "Limão Siciliano": {
    name: "Limão Siciliano",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Foco e Purificação",
    description: "Apresenta um aroma cítrico limpo, fresco e vibrante. Atua como um tônico mental, auxiliando na clareza de raciocínio e na tomada de decisões, além de possuir propriedades antissépticas que purificam o ambiente de energias estagnadas."
  },
  "Maçã com Canela": {
    name: "Maçã com Canela",
    image: "https://images.unsplash.com/photo-1533425576136-e883e40889f5?auto=format&fit=crop&q=80&w=800",
    benefit: "Aconchego e Memória",
    description: "Combina o frescor frutado da maçã com o calor picante e amadeirado da canela. Este aroma estimula a memória afetiva e a sensação de segurança do lar, sendo ideal para combater a solidão e estimular a circulação de energias vitais."
  },
  "Madeiras Nobres": {
    name: "Madeiras Nobres",
    image: "https://images.unsplash.com/photo-1628151241198-903dfc87f0b7?auto=format&fit=crop&q=80&w=800",
    benefit: "Estabilidade e Poder",
    description: "Aroma denso, amadeirado e sofisticado. Suas propriedades remetem ao aterramento e à autoridade pessoal, ajudando a trazer foco em momentos de dispersão e proporcionando uma sensação de força, elegância e proteção espiritual."
  },
  "Melancia": {
    name: "Melancia",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800",
    benefit: "Vitalidade e Alegria",
    description: "Possui um aroma frutado, doce e refrescante. Atua no resgate da criança interior e da alegria espontânea, sendo excelente para suavizar ambientes tensos e trazer uma energia vibrante que combate o desânimo e a melancolia."
  },
  "Orquídea": {
    name: "Orquídea",
    image: "https://images.unsplash.com/photo-1534885110300-2443681432f8?auto=format&fit=crop&q=80&w=800",
    benefit: "Luxo e Elevação",
    description: "Seu aroma floral é sutil, elegante e levemente atalcado. É valorizada por suas propriedades que estimulam a criatividade e a elevação espiritual, proporcionando um sentimento de exclusividade e refinamento que acalma os pensamentos mais densos."
  },
  "Peônia": {
    name: "Peônia",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
    benefit: "Prosperidade e Suavidade",
    description: "Apresenta um aroma floral fresco, rico e delicadamente doce. É associada à abundância e à cura emocional, ajudando a desarmar a rigidez de caráter e promovendo uma atitude mais gentil e aberta diante dos desafios da vida."
  },
  "Vanilla": {
    name: "Vanilla",
    image: "https://images.unsplash.com/photo-1509358271170-b42079298343?auto=format&fit=crop&q=80&w=800",
    benefit: "Nurturing e Conforto",
    description: "Aroma doce, quente e cremoso. Atua diretamente no sistema límbico trazendo a sensação de acolhimento e nutrição emocional. É ideal para reduzir a amargura, o medo da solidão e para criar um ambiente de paz e segurança afetiva."
  },
  "Verbena": {
    name: "Verbena",
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80&w=800",
    benefit: "Equilíbrio Nervoso",
    description: "Apresenta um aroma cítrico-herbal refrescante e revigorante. É conhecida por suas propriedades antiespasmódicas e sedativas, equilibrando o sistema nervoso enquanto mantém a mente alerta e disposta, ideal para reduzir o estresse sem causar sonolência."
  }
};