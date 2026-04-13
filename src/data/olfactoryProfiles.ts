export const olfactoryProfiles: Record<string, any> = {
  relax: {
    id: "relax",
    name: "Modo Relaxar",
    archetype: "Regulação Emocional",
    description: "Reduz a ansiedade e desacelera a mente através da modulação do sistema límbico.",
    scientificBasis: "Redução da atividade da amígdala cerebral. Estudos comprovam o efeito calmante imediato de moléculas de linalol.",
    expectedEffect: "Queda nos níveis de cortisol, redução da frequência mental e aumento da sensação de segurança.",
    notes: ["Lavanda", "Camomila", "Sândalo", "Verbena"],
    candleRitual: [
      { title: "Desaceleração", candle: "Lavanda", description: "Inicie o uso ao entardecer para sinalizar ao cérebro o início do repouso." },
      { title: "Paz Mental", candle: "Camomila", description: "Utilize durante a leitura ou meditação para silenciar pensamentos repetitivos." },
      { title: "Aterramento", candle: "Sândalo", description: "Finalize o dia com notas amadeiradas para estabilizar as emoções antes de dormir." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  focus: {
    id: "focus",
    name: "Modo Foco",
    archetype: "Ativação Cognitiva",
    description: "Aumenta a concentração e a produtividade através do estímulo do córtex pré-frontal.",
    scientificBasis: "Ondas cerebrais (EEG) mostram aumento significativo de atenção e prontidão com mentol e 1,8-cineol.",
    expectedEffect: "Aumento da atenção sustentada, melhora na memória de trabalho e maior energia mental.",
    notes: ["Alecrim", "Hortelã-Pimenta", "Café", "Limão"],
    candleRitual: [
      { title: "Ignição Cognitiva", candle: "Café", description: "Use ao iniciar tarefas complexas para despertar a acuidade sensorial." },
      { title: "Manutenção de Fluxo", candle: "Alecrim", description: "Mantenha acesa durante blocos de trabalho profundo (Deep Work)." },
      { title: "Alerta Imediato", candle: "Hortelã-Pimenta", description: "Intervenção rápida em momentos de sonolência ou fadiga mental." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  energy: {
    id: "energy",
    name: "Modo Energia",
    archetype: "Estímulo Emocional Positivo",
    description: "Eleva o humor e a disposição através da associação de aromas cítricos à serotonina.",
    scientificBasis: "Aromas cítricos estão diretamente ligados à modulação do humor e aumento da motivação intrínseca.",
    expectedEffect: "Elevação do humor, aumento da motivação e redução drástica da apatia matinal.",
    notes: ["Bergamota", "Tangerina", "Laranja", "Abacaxi"],
    candleRitual: [
      { title: "Despertar Solar", candle: "Bergamota", description: "Utilize logo ao acordar para configurar um estado mental positivo." },
      { title: "Vibração Positiva", candle: "Tangerina", description: "Ideal para ambientes de convívio e início de projetos criativos." },
      { title: "Pico de Vitalidade", candle: "Laranja", description: "Use quando precisar de um impulso extra de entusiasmo e alegria." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  cozy: {
    id: "cozy",
    name: "Modo Aconchego",
    archetype: "Memória Afetiva",
    description: "Gera conforto e sensação de cuidado ao evocar memórias emocionais do hipocampo.",
    scientificBasis: "Aromas doces (gourmand) ativam áreas de recompensa e evocam sentimentos de proteção da infância.",
    expectedEffect: "Aumento da sensação de acolhimento, redução do estresse emocional e segurança interna.",
    notes: ["Baunilha", "Chocolate", "Coco", "Mel"],
    candleRitual: [
      { title: "Abraço Olfativo", candle: "Baunilha", description: "Crie um ambiente de refúgio após um dia exaustivo fora de casa." },
      { title: "Nutrição Emocional", candle: "Chocolate", description: "Use em momentos de introspecção para promover o autocuidado." },
      { title: "Doçura de Lar", candle: "Mel", description: "Ideal para momentos de descanso no sofá ou leitura relaxada." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  sensual: {
    id: "sensual",
    name: "Modo Sensual",
    archetype: "Resposta Emocional Intensa",
    description: "Cria presença, atração e intensidade através da ativação da amígdala.",
    scientificBasis: "Estímulos olfativos densos ativam respostas emocionais primárias ligadas à atração e magnetismo.",
    expectedEffect: "Aumento da excitação emocional, maior atenção social e sensação de presença marcante.",
    notes: ["Patchouli", "Jasmim", "Cereja", "Morango"],
    candleRitual: [
      { title: "Magnetismo", candle: "Patchouli", description: "Estabeleça uma base terrosa e misteriosa no ambiente." },
      { title: "Intensidade Floral", candle: "Jasmim", description: "Eleve a vibração sensorial para momentos de conexão íntima." },
      { title: "Toque Sedutor", candle: "Cereja", description: "Adicione uma nota doce e envolvente para finalizar a atmosfera." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  clean: {
    id: "clean",
    name: "Modo Limpeza",
    archetype: "Percepção Cognitiva de Ambiente",
    description: "Cria sensação de ordem, frescor e organização através da cognição ambiental.",
    scientificBasis: "Aromas frescos aumentam a percepção subjetiva de limpeza e organização do espaço físico.",
    expectedEffect: "Aumento da sensação de organização, clareza mental e redução da percepção de caos.",
    notes: ["Eucalipto", "Chá Branco", "Oceano", "Ozônio"],
    candleRitual: [
      { title: "Renovação de Ar", candle: "Ozônio", description: "Use após a limpeza física para selar a sensação de frescor." },
      { title: "Pureza Mental", candle: "Chá Branco", description: "Ideal para escritórios ou salas de estar que precisam de um ar 'clean'." },
      { title: "Vigor Marinho", candle: "Oceano", description: "Promove a sensação de amplitude e liberdade dentro de casa." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1558383331-f520f2888351?auto=format&fit=crop&q=80&w=800",
    color: "#0EA5E9"
  },
  sophisticated: {
    id: "sophisticated",
    name: "Modo Sofisticado",
    archetype: "Processamento Simbólico",
    description: "Eleva a percepção de luxo e status através de notas nobres e complexas.",
    scientificBasis: "Aromas influenciam o julgamento de valor e status. Notas raras ativam o processamento de exclusividade.",
    expectedEffect: "Aumento da percepção de valor do ambiente, sensação premium e elegância atemporal.",
    notes: ["Âmbar", "Figo", "Neroli", "Orquídea"],
    candleRitual: [
      { title: "Assinatura de Luxo", candle: "Figo", description: "Transforme qualquer ambiente em um espaço de design e sofisticação." },
      { title: "Aura Preciosa", candle: "Neroli", description: "Utilize para recepções ou momentos que exigem uma presença refinada." },
      { title: "Profundidade", candle: "Âmbar", description: "Crie uma base rica e duradoura que exala poder e estabilidade." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1615485240384-552e40df3c9d?auto=format&fit=crop&q=80&w=800",
    color: "#1F2937"
  },
  escape: {
    id: "escape",
    name: "Modo Escape",
    archetype: "Descompressão Mental",
    description: "Cria uma sensação de 'pausa' da rotina através de aromas que estimulam a imaginação.",
    scientificBasis: "Aromas tropicais reduzem a tensão cognitiva ao transportar a mente para cenários de lazer.",
    expectedEffect: "Redução do estresse, relaxamento leve e aumento da sensação de liberdade mental.",
    notes: ["Coco", "Abacaxi", "Melancia", "Manga"],
    candleRitual: [
      { title: "Viagem Sensorial", candle: "Coco", description: "Desconecte-se das obrigações e sinta a brisa de um refúgio tropical." },
      { title: "Leveza Aquosa", candle: "Melancia", description: "Ideal para banhos relaxantes ou momentos de 'não fazer nada'." },
      { title: "Energia de Férias", candle: "Abacaxi", description: "Use para quebrar a monotonia de dias cinzentos ou estressantes." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    color: "#10B981"
  },
  nature: {
    id: "nature",
    name: "Modo Natureza",
    archetype: "Aterramento Emocional",
    description: "Conecta com o equilíbrio interno através de aromas terrosos e estáveis.",
    scientificBasis: "Aromas de floresta (fitoncidas) estão associados à redução do estresse fisiológico e estabilidade.",
    expectedEffect: "Redução da ansiedade, aumento da estabilidade emocional e presença no 'agora'.",
    notes: ["Cedro", "Patchouli", "Bamboo", "Vet Vert"],
    candleRitual: [
      { title: "Raízes Fortes", candle: "Vet Vert", description: "Use quando se sentir disperso ou sobrecarregado por decisões." },
      { title: "Equilíbrio Verde", candle: "Bamboo", description: "Traga a serenidade de um jardim para dentro do seu espaço de vida." },
      { title: "Proteção Silvestre", candle: "Cedro", description: "Crie uma barreira de conforto amadeirado contra o caos externo." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    color: "#166534"
  },
  comfort: {
    id: "comfort",
    name: "Modo Conforto",
    archetype: "Segurança Ambiental",
    description: "Cria uma sensação de lar e proteção através de aromas suaves e limpos.",
    scientificBasis: "Aromas que remetem a tecidos limpos aumentam a sensação de proteção e cuidado doméstico.",
    expectedEffect: "Aumento da segurança percebida e relaxamento leve em ambiente familiar.",
    notes: ["Algodão", "Talco", "Flor de Algodão"],
    candleRitual: [
      { title: "Ninho Seguro", candle: "Algodão", description: "Ideal para o quarto ou momentos de descanso com a família." },
      { title: "Pureza Infantil", candle: "Talco", description: "Evoca a simplicidade e o cuidado, acalmando mentes agitadas." },
      { title: "Zelo", candle: "Flor de Algodão", description: "Use para criar uma atmosfera de hospitalidade e carinho." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459061998-5645ad99e39f?auto=format&fit=crop&q=80&w=800",
    color: "#94A3B8"
  },
  stimulus: {
    id: "stimulus",
    name: "Modo Estímulo",
    archetype: "Ativação Física",
    description: "Desperta a energia corporal através de aromas especiados que ativam a fisiologia.",
    scientificBasis: "Especiarias quentes aumentam a ativação do sistema nervoso simpático e a circulação.",
    expectedEffect: "Aumento da circulação, maior energia física e estado de alerta corporal.",
    notes: ["Canela", "Cravo", "Gengibre", "Noz Moscada"],
    candleRitual: [
      { title: "Fogo Interno", candle: "Canela", description: "Use antes de atividades físicas ou quando precisar de um 'choque' de energia." },
      { title: "Vigor Especiado", candle: "Gengibre", description: "Combata a letargia física com notas picantes e vibrantes." },
      { title: "Ativação", candle: "Cravo", description: "Ideal para momentos que exigem prontidão e resposta rápida." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    color: "#B91C1C"
  },
  soft: {
    id: "soft",
    name: "Modo Suave",
    archetype: "Baixa Estimulação",
    description: "Cria ambientes neutros e agradáveis, evitando a sobrecarga sensorial.",
    scientificBasis: "Aromas de baixa intensidade evitam a fadiga olfativa e a irritação do sistema nervoso.",
    expectedEffect: "Aumento do conforto ambiental e redução da irritação sensorial em pessoas sensíveis.",
    notes: ["Lichia", "Pêra", "Frésia"],
    candleRitual: [
      { title: "Neutralidade", candle: "Pêra", description: "Mantenha o ambiente agradável sem dominar os outros sentidos." },
      { title: "Delicadeza", candle: "Lichia", description: "Ideal para quem prefere aromas que 'flutuam' no ar de forma sutil." },
      { title: "Harmonia Leve", candle: "Frésia", description: "Perfeito para fundos de meditação ou ambientes de descanso leve." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=800",
    color: "#F9A8D4"
  },
  connection: {
    id: "connection",
    name: "Modo Conexão",
    archetype: "Afeto / Vínculo",
    description: "Cria proximidade emocional e empatia através de notas florais clássicas.",
    scientificBasis: "Aromas florais estão historicamente ligados a comportamentos de cuidado e conexão social.",
    expectedEffect: "Aumento da conexão emocional, maior empatia e abertura para o diálogo.",
    notes: ["Rosa", "Rosas Brancas", "Pêssego"],
    candleRitual: [
      { title: "Coração Aberto", candle: "Rosa", description: "Use em jantares ou conversas importantes para suavizar o clima." },
      { title: "Vínculo Puro", candle: "Rosas Brancas", description: "Promova um ambiente de confiança e transparência emocional." },
      { title: "Carinho", candle: "Pêssego", description: "Adicione uma nota aveludada para momentos de afeto compartilhado." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
    color: "#F43F5E"
  },
  balance: {
    id: "balance",
    name: "Modo Equilíbrio",
    archetype: "Homeostase Emocional",
    description: "Mantém o estado emocional estável através de aromas reguladores do sistema nervoso.",
    scientificBasis: "Aromas adaptógenos auxiliam o corpo a retornar ao seu estado de equilíbrio natural (homeostase).",
    expectedEffect: "Aumento do equilíbrio emocional e redução de oscilações bruscas de humor.",
    notes: ["Gerânio", "Lavanda", "Verbena", "Calêndula"],
    candleRitual: [
      { title: "Centro Emocional", candle: "Gerânio", description: "Use quando sentir que suas emoções estão oscilando demais." },
      { title: "Estabilidade", candle: "Verbena", description: "Mantenha a mente clara e o coração calmo durante o dia." },
      { title: "Regulação", candle: "Calêndula", description: "Ideal para momentos de transição entre atividades estressantes." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#8B5CF6"
  }
};