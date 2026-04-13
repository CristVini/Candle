export const olfactoryProfiles: Record<string, any> = {
  relax: {
    id: "relax",
    name: "Modo Relaxar",
    archetype: "Regulação Parassimpática",
    description: "Foco na desaceleração do sistema nervoso central. Ideal para momentos de alta carga mental onde o silenciamento dos ruídos externos é vital para a recuperação biológica.",
    scientificBasis: "Indução de ondas alfa e teta via bulbo olfativo, reduzindo a Variação Negativa Contingente (CNV) e os níveis de cortisol plasmático.",
    expectedEffect: "Silenciamento mental, relaxamento muscular e preparação para o sono reparador.",
    notes: ["Lavanda", "Camomila", "Maracujá", "Erva Cidreira", "Sândalo"],
    candleRitual: [
      { title: "Sinalização Neural", candle: "Lavanda", description: "Utilize para sinalizar ao cérebro o encerramento das atividades produtivas e o início do protocolo de repouso." },
      { title: "Higiene Mental", candle: "Camomila", description: "Focada na redução de pensamentos intrusivos e repetitivos, limpando o campo mental para a introspecção." },
      { title: "Aterramento Emocional", candle: "Sândalo", description: "Nota de base que estabiliza as emoções, criando uma barreira sensorial contra o estresse residual do dia." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  focus: {
    id: "focus",
    name: "Modo Foco",
    archetype: "Otimização Cognitiva",
    description: "Desenvolvido para maximizar a atenção sustentada e a memória de trabalho. Atua no córtex pré-frontal para filtrar distrações e manter o estado de 'Flow'.",
    scientificBasis: "Estímulo de receptores colinérgicos via 1,8-cineol (presente no Alecrim), associado ao aumento da velocidade de processamento visual.",
    expectedEffect: "Aumento da clareza mental, redução da fadiga cognitiva e precisão na execução de tarefas.",
    notes: ["Alecrim", "Hortelã", "Café", "Eucalipto", "Limão"],
    candleRitual: [
      { title: "Ignição Sensorial", candle: "Café", description: "Desperta a acuidade imediata. Use nos primeiros 15 minutos de uma tarefa complexa para romper a inércia mental." },
      { title: "Manutenção de Fluxo", candle: "Alecrim", description: "A nota principal para o trabalho profundo. Mantém a rede de atenção ativa por períodos prolongados." },
      { title: "Clareza de Saída", candle: "Limão", description: "Utilize para organizar a conclusão de projetos, evitando o erro por cansaço no final da jornada." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  energy: {
    id: "energy",
    name: "Modo Energizar",
    archetype: "Ativação Dopaminérgica",
    description: "Foco na elevação do tônus vital e entusiasmo. Ideal para combater estados de apatia, procrastinação ou baixa energia matinal.",
    scientificBasis: "Moléculas de limoneno e citral que atuam na modulação do humor positivo e aumento da percepção de vigor físico.",
    expectedEffect: "Elevação imediata do humor, disposição para movimento e redução da sensação de peso emocional.",
    notes: ["Laranja", "Tangerina", "Bergamota", "Abacaxi", "Manga"],
    candleRitual: [
      { title: "Despertar Solar", candle: "Bergamota", description: "Conhecida como o 'óleo da felicidade', deve ser a primeira nota para configurar um estado mental otimista." },
      { title: "Impulso Criativo", candle: "Tangerina", description: "Estimula a curiosidade e a vontade de criar. Ideal para brainstormings ou início de novos ciclos." },
      { title: "Vigor Ambiental", candle: "Laranja", description: "Mantém a vibração do ambiente alta, combatendo a queda de energia que ocorre no meio da tarde." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  cozy: {
    id: "cozy",
    name: "Modo Aconchego",
    archetype: "Segurança Afetiva",
    description: "Ativa memórias autobiográficas positivas no hipocampo. Cria um 'refúgio sensorial' que remete ao cuidado, proteção e conforto absoluto.",
    scientificBasis: "Aromas gourmand reduzem a atividade da amígdala (centro do medo) ao evocar associações de nutrição e segurança da infância.",
    expectedEffect: "Sensação de acolhimento, redução da solidão e conforto emocional profundo.",
    notes: ["Baunilha", "Chocolate", "Caramelo", "Doce de Leite", "Coco"],
    candleRitual: [
      { title: "Abraço Sensorial", candle: "Baunilha", description: "A base do protocolo. Use para transformar qualquer ambiente frio em um espaço de acolhimento imediato." },
      { title: "Nutrição Emocional", candle: "Chocolate", description: "Estimula a liberação de endorfinas. Ideal para momentos de leitura ou autocuidado introspectivo." },
      { title: "Memória de Lar", candle: "Doce de Leite", description: "Finaliza o protocolo trazendo a sensação de pertencimento e paz com a própria rotina." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  sensual: {
    id: "sensual",
    name: "Modo Sensual",
    archetype: "Presença & Magnetismo",
    description: "Foco na regulação da autoconfiança e intensidade sensorial. Ideal para momentos de conexão profunda, seja consigo mesmo ou com o outro.",
    scientificBasis: "Notas florais e terrosas que elevam a atividade autonômica e a percepção de atratividade via sistema límbico.",
    expectedEffect: "Aumento da presença física, confiança pessoal e criação de uma atmosfera de mistério e atração.",
    notes: ["Patchouli", "Jasmim", "Morango", "Cereja", "Pimenta Rosa"],
    candleRitual: [
      { title: "Magnetismo de Base", candle: "Patchouli", description: "Estabelece uma fundação terrosa e misteriosa que ancora a presença no aqui e agora." },
      { title: "Euforia Floral", candle: "Jasmim", description: "Nota inebriante que atua na autoconfiança. Use para elevar a vibração e a entrega sensorial." },
      { title: "Toque de Intensidade", candle: "Cereja", description: "Finaliza a atmosfera com uma nota vibrante que desperta o desejo e a curiosidade." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  clean: {
    id: "clean",
    name: "Modo Limpeza",
    archetype: "Ordem Ambiental",
    description: "Utiliza a cognição ambiental para gerar sensação de organização e frescor. Ideal para 'resetar' o ambiente após períodos de caos ou estagnação.",
    scientificBasis: "Associação psicológica entre notas canforadas/mentoladas e a percepção de pureza do ar e clareza de pensamento.",
    expectedEffect: "Sensação de ambiente renovado, mente organizada e alívio da sobrecarga visual.",
    notes: ["Eucalipto", "Capim Limão", "Bamboo", "Chá Branco", "Ozônio"],
    candleRitual: [
      { title: "Purificação de Campo", candle: "Eucalipto", description: "Limpa as vias respiratórias e a 'energia' pesada do ambiente, preparando o terreno para a ordem." },
      { title: "Equilíbrio de Fluxo", candle: "Bamboo", description: "Traz a leveza da natureza. Ideal para manter a sensação de limpeza por mais tempo." },
      { title: "Selo de Frescor", candle: "Chá Branco", description: "A nota final que comunica ao cérebro que o ambiente está em perfeita ordem e harmonia." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1558383331-f520f2888351?auto=format&fit=crop&q=80&w=800",
    color: "#0EA5E9"
  },
  sophisticated: {
    id: "sophisticated",
    name: "Modo Sofisticado",
    archetype: "Status & Elegância",
    description: "Processamento simbólico de notas nobres para elevar a percepção de valor do espaço. Ideal para recepções, reuniões importantes ou momentos de luxo pessoal.",
    scientificBasis: "Ativação do córtex orbitofrontal através de composições complexas que o cérebro associa a exclusividade e poder.",
    expectedEffect: "Aumento da percepção de prestígio, confiança social e atmosfera premium.",
    notes: ["Âmbar", "Figo", "Neroli", "Orquídea", "Iguatemi"],
    candleRitual: [
      { title: "Assinatura de Design", candle: "Figo", description: "Transforma o ambiente comum em um espaço de curadoria. Use para marcar presença e estilo." },
      { title: "Aura de Exclusividade", candle: "Neroli", description: "Nota floral cítrica raríssima que comunica sofisticação sem esforço e refinamento." },
      { title: "Profundidade de Poder", candle: "Âmbar", description: "A base rica que exala estabilidade e sucesso. Ideal para finalizar o dia com sensação de conquista." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1615485240384-552e40df3c9d?auto=format&fit=crop&q=80&w=800",
    color: "#1F2937"
  },
  nature: {
    id: "nature",
    name: "Modo Natureza",
    archetype: "Aterramento Biofílico",
    description: "Reconecta o indivíduo com seus ritmos biológicos originais. Ideal para quem vive em ambientes urbanos e sente a necessidade de 'pé no chão'.",
    scientificBasis: "Exposição a fitoncidas simulados que reduzem a atividade do sistema nervoso simpático e a pressão arterial.",
    expectedEffect: "Redução do estresse urbano, sensação de liberdade e equilíbrio fisiológico.",
    notes: ["Cedro", "Patchouli", "Vet Vert", "Pinho", "Terra Molhada"],
    candleRitual: [
      { title: "Raízes Profundas", candle: "Vet Vert", description: "Use quando se sentir disperso ou 'voando'. Traz a mente de volta para o corpo e para a terra." },
      { title: "Respiro da Floresta", candle: "Pinho", description: "Simula a caminhada em mata fechada. Ideal para renovar o fôlego e a perspectiva de vida." },
      { title: "Proteção de Cedro", candle: "Cedro", description: "Cria uma estrutura de segurança e estabilidade, como a sombra de uma árvore milenar." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    color: "#166534"
  },
  romance: {
    id: "romance",
    name: "Modo Romance",
    archetype: "Vínculo & Empatia",
    description: "Foco na abertura emocional e na suavização das defesas. Ideal para diálogos importantes, jantares a dois ou momentos de vulnerabilidade positiva.",
    scientificBasis: "Notas florais clássicas que estimulam a liberação de ocitocina e promovem comportamentos de cuidado e conexão.",
    expectedEffect: "Aumento da empatia, suavidade no trato interpessoal e conexão emocional facilitada.",
    notes: ["Rosa", "Rosas Vermelhas", "Pêssego", "Love Spell", "Lírio"],
    candleRitual: [
      { title: "Abertura de Coração", candle: "Rosa", description: "Suaviza o clima e prepara o ambiente para a transparência e a escuta ativa." },
      { title: "Vínculo de Confiança", candle: "Lírio", description: "Nota de pureza que promove a sensação de segurança mútua e lealdade emocional." },
      { title: "Encanto de Pêssego", candle: "Pêssego", description: "Traz a doçura e o frescor necessários para manter o clima leve e apaixonante." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=80&w=800",
    color: "#F43F5E"
  },
  balance: {
    id: "balance",
    name: "Modo Equilíbrio",
    archetype: "Homeostase Emocional",
    description: "Regula as oscilações de humor e mantém o centro de gravidade emocional. Ideal para dias de transição ou quando se busca estabilidade interna.",
    scientificBasis: "Uso de adaptógenos olfativos que ajudam o corpo a retornar ao seu estado de equilíbrio após picos de estresse ou euforia.",
    expectedEffect: "Estabilidade emocional, redução de picos de ansiedade e sensação de 'centro'.",
    notes: ["Gerânio", "Lavanda", "Verbena", "Erva Doce", "Mirra"],
    candleRitual: [
      { title: "Regulação de Centro", candle: "Gerânio", description: "O grande equilibrador. Use para harmonizar as emoções quando estiver se sentindo 'fora do eixo'." },
      { title: "Estabilidade de Verbena", candle: "Verbena", description: "Mantém a mente clara e o humor estável, evitando reações impulsivas ao longo do dia." },
      { title: "Paz de Mirra", candle: "Mirra", description: "Nota milenar de introspecção que sela o protocolo com uma sensação de completude e paz." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#8B5CF6"
  }
};