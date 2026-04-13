export const olfactoryProfiles: Record<string, any> = {
  joy: {
    id: "joy",
    name: "Euphoria",
    archetype: "O Sol Radiante",
    description: "Seu sistema nervoso pede luz e expansão. É hora de abrir as janelas da mente e deixar o entusiasmo entrar.",
    notes: ["Bergamota", "Tangerina", "Mel"],
    candleRitual: [
      { 
        title: "Despertar Solar", 
        candle: "Bergamota", 
        description: "Ao acordar, abra as janelas e acenda a Bergamota. Sinta o cítrico vibrar no ar enquanto você planeja suas vitórias do dia. É o seu café da manhã olfativo." 
      },
      { 
        title: "Pausa de Vitalidade", 
        candle: "Tangerina", 
        description: "No meio da tarde, quando a energia oscilar, deixe a Tangerina inundar o ambiente. Respire fundo e sinta o entusiasmo renovando cada célula." 
      },
      { 
        title: "Acalento Doce", 
        candle: "Mel", 
        description: "Termine o dia com a doçura do Mel. Deixe o aroma te abraçar enquanto você agradece pelas pequenas alegrias que viveu hoje." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1572726710708-20bb91924ee1?auto=format&fit=crop&q=80&w=800",
    color: "#FCD34D"
  },
  sensuality: {
    id: "sensuality",
    name: "Velvet",
    archetype: "O Amante",
    description: "Buscamos o magnetismo. É sobre se sentir presente na própria pele, celebrando o mistério e a autoconfiança.",
    notes: ["Cereja c/ Avelã", "Black Vanilla", "Patchouli"],
    candleRitual: [
      { 
        title: "Banho de Vênus", 
        candle: "Cereja c/ Avelã", 
        description: "Deixe o vapor do banho se misturar com a doçura da Cereja. Sinta o aroma envolver seu corpo como uma seda invisível, celebrando sua beleza única." 
      },
      { 
        title: "Aura de Mistério", 
        candle: "Black Vanilla", 
        description: "Prepare o ambiente para a noite. A Baunilha Negra cria um magnetismo denso, transformando sua sala em um refúgio de sofisticação e desejo." 
      },
      { 
        title: "Conexão Profunda", 
        candle: "Patchouli", 
        description: "No silêncio do quarto, o Patchouli aterra seus sentidos. É o momento de se desconectar do mundo e se reconectar com o que te faz vibrar." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
    color: "#991B1B"
  },
  burnout: {
    id: "burnout",
    name: "Resilience",
    archetype: "O Restaurador",
    description: "Sua mente precisa de um porto seguro. Vamos trocar a exaustão pelo silêncio regenerador das florestas.",
    notes: ["Pinho", "Eucalipto", "Cedro"],
    candleRitual: [
      { 
        title: "Descompressão Imediata", 
        candle: "Eucalipto", 
        description: "Chegou em casa? Acenda o Eucalipto. Imagine que o frescor está limpando todo o ruído e o peso que você carregou nos ombros hoje." 
      },
      { 
        title: "Raízes no Chão", 
        candle: "Pinho", 
        description: "Sente-se por 5 minutos em silêncio com o Pinho. Sinta o aroma de terra molhada te devolvendo o eixo e a estabilidade que o caos tentou tirar." 
      },
      { 
        title: "Santuário de Sono", 
        candle: "Cedro", 
        description: "O Cedro é o seu abraço de madeira. Deixe que ele proteja seu sono, criando uma barreira entre você e as preocupações de amanhã." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800",
    color: "#1E3A8A"
  },
  anxiety: {
    id: "anxiety",
    name: "Serenity",
    archetype: "O Observador",
    description: "O mundo está barulhento demais. Vamos criar um casulo de paz onde seus pensamentos podem finalmente descansar.",
    notes: ["Lavanda", "Camomila", "Bamboo"],
    candleRitual: [
      { 
        title: "Foco Leve", 
        candle: "Bamboo", 
        description: "Durante o trabalho, o Bamboo limpa o excesso. É como uma brisa que passa pela mesa, levando embora a urgência e deixando apenas a clareza." 
      },
      { 
        title: "Pausa de Respiro", 
        candle: "Camomila", 
        description: "Sinta a Camomila acalmar as batidas do coração. Feche os olhos e visualize um campo tranquilo, onde nada é urgente e tudo está bem." 
      },
      { 
        title: "Paz Absoluta", 
        candle: "Lavanda", 
        description: "A Lavanda é sua ponte para o sonho. Leia um livro sob sua luz suave e sinta os pensamentos desacelerando até se tornarem silêncio." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=800",
    color: "#6D28D9"
  },
  mental_fatigue: {
    id: "mental_fatigue",
    name: "Focus",
    archetype: "O Sábio",
    description: "A névoa mental se dissipa agora. Vamos aguçar seus sentidos e devolver a nitidez aos seus objetivos.",
    notes: ["Alecrim Blanc", "Capim Limão", "Hortelã-Pimenta"],
    candleRitual: [
      { 
        title: "Clareza Mental", 
        candle: "Capim Limão", 
        description: "Comece sua tarefa mais difícil com o Capim Limão. Ele atua como um interruptor, ligando sua percepção e afastando a preguiça intelectual." 
      },
      { 
        title: "Imersão Criativa", 
        candle: "Alecrim Blanc", 
        description: "O Alecrim é o combustível do gênio. Deixe que ele sustente seu foco por horas, mantendo sua mente afiada e pronta para solucionar desafios." 
      },
      { 
        title: "Choque de Ânimo", 
        candle: "Hortelã-Pimenta", 
        description: "Sentiu o cansaço bater? A Hortelã é um despertar gelado. Respire o frescor e sinta a energia voltando instantaneamente para os seus olhos." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?auto=format&fit=crop&q=80&w=800",
    color: "#065F46"
  },
  loneliness: {
    id: "loneliness",
    name: "Cuddle",
    archetype: "O Acolhedor",
    description: "Ninguém está sozinho quando está cercado de memórias doces. Vamos preencher o espaço com calor e afeto.",
    notes: ["Black Vanilla", "Mel", "Canela"],
    candleRitual: [
      { 
        title: "Abraço de Inverno", 
        candle: "Canela", 
        description: "A Canela aquece as paredes da alma. Acenda-a e sinta o ambiente se tornar mais acolhedor, como se a casa estivesse te dando as boas-vindas." 
      },
      { 
        title: "Nutrição Emocional", 
        candle: "Mel", 
        description: "O Mel traz a sensação de cuidado. É o aroma do conforto, lembrando que você é sua melhor companhia e merece esse carinho." 
      },
      { 
        title: "Doce Refúgio", 
        candle: "Black Vanilla", 
        description: "Termine a noite envolto em Baunilha. É um abraço olfativo que te prepara para dormir sentindo-se amado(a) e protegido(a)." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1520627977056-c307aeb9a625?auto=format&fit=crop&q=80&w=800",
    color: "#B45309"
  },
  acute_stress: {
    id: "acute_stress",
    name: "Shield",
    archetype: "O Guardião",
    description: "Momentos difíceis pedem blindagem. Vamos criar um escudo de proteção onde nada externo pode te abalar.",
    notes: ["Âmbar Lelis", "Mirra", "Vet Vert"],
    candleRitual: [
      { 
        title: "Eixo Central", 
        candle: "Mirra", 
        description: "Em momentos de crise, a Mirra te devolve ao centro. Respire o aroma resinoso e sinta sua força interior se reconstruindo, tijolo por tijolo." 
      },
      { 
        title: "Presença Absoluta", 
        candle: "Vet Vert", 
        description: "O Vetiver te prende ao agora. Sinta o aroma terroso e perceba que, neste exato momento, você está seguro(a) e no controle." 
      },
      { 
        title: "Blindagem de Luz", 
        candle: "Âmbar Lelis", 
        description: "O Âmbar cria uma redoma de calor e proteção. Deixe que ele sele seu dia, garantindo que apenas energias boas permaneçam no seu espaço." 
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    color: "#374151"
  }
};