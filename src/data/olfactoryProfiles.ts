export const olfactoryProfiles: Record<string, any> = {
  joy: {
    id: "joy",
    name: "Euphoria",
    archetype: "Perfil Estimulante",
    description: "Seu sistema nervoso apresenta baixa resposta a estímulos positivos. O objetivo é a ativação dopaminérgica para elevar o entusiasmo e a disposição.",
    notes: ["Bergamota", "Tangerina", "Mel"],
    candleRitual: [
      { 
        title: "Ativação Matinal", 
        candle: "Bergamota", 
        description: "Utilize ao iniciar o dia. As moléculas cítricas auxiliam na clareza mental e na prontidão para as tarefas diárias." 
      },
      { 
        title: "Reforço de Vitalidade", 
        candle: "Tangerina", 
        description: "Aplicação recomendada no meio da tarde para combater a queda de energia e manter o foco produtivo." 
      },
      { 
        title: "Finalização Suave", 
        candle: "Mel", 
        description: "Uso noturno para promover uma sensação de conforto e recompensa após a jornada de trabalho." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  sensuality: {
    id: "sensuality",
    name: "Velvet",
    archetype: "Perfil Envolvente",
    description: "Foco na regulação da autoconfiança e presença sensorial. Ideal para momentos de desconexão do estresse externo e foco no bem-estar pessoal.",
    notes: ["Cereja c/ Avelã", "Black Vanilla", "Patchouli"],
    candleRitual: [
      { 
        title: "Momento de Autocuidado", 
        candle: "Cereja c/ Avelã", 
        description: "Recomendado durante o banho ou rotina de cuidados pessoais para estimular a percepção sensorial positiva." 
      },
      { 
        title: "Modulação de Ambiente", 
        candle: "Black Vanilla", 
        description: "Cria uma atmosfera de sofisticação e conforto, ideal para recepções ou momentos de relaxamento social." 
      },
      { 
        title: "Aterramento Sensorial", 
        candle: "Patchouli", 
        description: "Uso focado na redução da ansiedade através de notas terrosas que promovem a sensação de presença." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  burnout: {
    id: "burnout",
    name: "Resilience",
    archetype: "Perfil Regenerativo",
    description: "Indicado para estados de exaustão mental crônica. O protocolo foca na redução de cortisol e na recuperação da homeostase do sistema nervoso.",
    notes: ["Pinho", "Eucalipto", "Cedro"],
    candleRitual: [
      { 
        title: "Descompressão Imediata", 
        candle: "Eucalipto", 
        description: "Utilize logo após chegar em casa para sinalizar ao cérebro o fim da jornada de trabalho e o início do descanso." 
      },
      { 
        title: "Recuperação de Eixo", 
        candle: "Pinho", 
        description: "Notas silvestres que auxiliam na estabilização emocional e na redução da sensação de sobrecarga." 
      },
      { 
        title: "Higiene do Sono", 
        candle: "Cedro", 
        description: "Prepare o ambiente de repouso com o Cedro para facilitar a transição para o sono profundo e reparador." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800",
    color: "#1E3A8A"
  },
  anxiety: {
    id: "anxiety",
    name: "Serenity",
    archetype: "Perfil Estabilizador",
    description: "Foco na modulação da ansiedade e hiperestimulação. O protocolo utiliza moléculas que promovem a desaceleração dos pensamentos.",
    notes: ["Lavanda", "Camomila", "Bamboo"],
    candleRitual: [
      { 
        title: "Foco Equilibrado", 
        candle: "Bamboo", 
        description: "Uso diurno para manter a calma durante tarefas complexas, evitando picos de estresse por excesso de informação." 
      },
      { 
        title: "Pausa de Respiro", 
        candle: "Camomila", 
        description: "Intervenção rápida em momentos de agitação para auxiliar no controle da frequência cardíaca e respiratória." 
      },
      { 
        title: "Indução ao Relaxamento", 
        candle: "Lavanda", 
        description: "Protocolo noturno clássico para redução da atividade cerebral e preparação para o repouso absoluto." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  mental_fatigue: {
    id: "mental_fatigue",
    name: "Focus",
    archetype: "Perfil Cognitivo",
    description: "Desenvolvido para combater a névoa mental e a fadiga de decisão. Estimula a acuidade visual e a retenção de informações.",
    notes: ["Alecrim Blanc", "Capim Limão", "Hortelã-Pimenta"],
    candleRitual: [
      { 
        title: "Clareza Operacional", 
        candle: "Capim Limão", 
        description: "Inicie blocos de trabalho intenso com esta nota para aumentar a percepção e a agilidade mental." 
      },
      { 
        title: "Foco Profundo", 
        candle: "Alecrim Blanc", 
        description: "Manutenção da concentração em tarefas de longa duração, auxiliando na memória de curto prazo." 
      },
      { 
        title: "Recuperação de Alerta", 
        candle: "Hortelã-Pimenta", 
        description: "Utilize em momentos de sonolência ou queda de produtividade para um despertar cognitivo imediato." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  loneliness: {
    id: "loneliness",
    name: "Cuddle",
    archetype: "Perfil de Conforto",
    description: "Foco na regulação emocional através de memórias olfativas positivas. Promove a sensação de acolhimento e segurança no ambiente.",
    notes: ["Black Vanilla", "Mel", "Canela"],
    candleRitual: [
      { 
        title: "Acolhimento do Ambiente", 
        candle: "Canela", 
        description: "Notas quentes que aumentam a percepção de temperatura e conforto térmico/emocional do espaço." 
      },
      { 
        title: "Suporte Emocional", 
        candle: "Mel", 
        description: "Uso recomendado em momentos de introspecção para promover uma sensação de nutrição e bem-estar." 
      },
      { 
        title: "Finalização Aconchegante", 
        candle: "Black Vanilla", 
        description: "Cria um 'casulo' olfativo para o final do dia, reduzindo a sensação de isolamento através do conforto doce." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  acute_stress: {
    id: "acute_stress",
    name: "Shield",
    archetype: "Perfil de Proteção",
    description: "Protocolo de blindagem contra estressores externos. Utiliza resinas e notas densas para promover estabilidade em ambientes caóticos.",
    notes: ["Âmbar Lelis", "Mirra", "Vet Vert"],
    candleRitual: [
      { 
        title: "Regulação de Estresse", 
        candle: "Mirra", 
        description: "Uso focado na recuperação do centro emocional durante ou após situações de conflito ou alta pressão." 
      },
      { 
        title: "Estabilização de Presença", 
        candle: "Vet Vert", 
        description: "Notas de raiz que auxiliam no 'grounding', mantendo o foco no presente e reduzindo a reatividade emocional." 
      },
      { 
        title: "Barreira de Conforto", 
        candle: "Âmbar Lelis", 
        description: "Cria uma camada de proteção sensorial que ajuda a filtrar ruídos e distrações do ambiente externo." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#374151"
  }
};