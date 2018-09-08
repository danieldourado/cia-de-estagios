var quizData = [
  {
      tela: "1",
      cenario: "Cidade",
      relogio: "08am",
      dia_da_semana: "Segunda Feira",
      nivel_de_autoconfianca: "100%",
      texto_popup: [
          {
              titulo:"",
              content: "Você é um candidato em busca de uma vaga! Tem faculdade para pagar, precisa ajudar em casa mas mais importante que isso: está em busca de conhecimento e aprendizado para construir uma carreira de sucesso!",
              when_to_show: "before",
              show_condition: "none",
          }
      ],
      texto_main_ui: "Você conseguirá encontrar uma vaga no seu perfil e mostrar que é o melhor candidato para a vaga?",
      answers: [
          {
              value: "1",
              content: "Pode apostar que sim!"
          },
      ]
  },
  {
      tela: "1.1",
      cenario: "Cidade",
      relogio: "08am",
      dia_da_semana: "Segunda Feira",
      nivel_de_autoconfianca: "100%",
      texto_popup:
      [
          {
              titulo:"O nível de dificuldade vai afetar a facilidade de conseguir uma vaga:",
              content: "Fácil: Seu país não está em crise. Vive um momento de baixa inflação, crescimento estável e disputa por talentos! Todas as empresas querem contratar! </br> Difícil: Você vive em um país corrupto, instável, com alto nível de desemprego e poucas vagas, o que eleva o nível de exigência das empresas que vão contratar.",
              when_to_show: "before",
              show_condition: "none",
          }
      ],
      texto_main_ui: "Você escolhe:",
      answers: [
          {
              value: "1",
              content: "Fácil"
          },
          {
              value: "2",
              content: "Difícil"
          },
      ]
  },
  {
      tela: "2",
      cenario: "Computador",
      relogio: "09am",
      dia_da_semana: "Segunda Feira",
      nivel_de_autoconfianca: "100%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Você começa em uma manhã ensolarada de segunda-feira super motivado e começa a buscar na internet e redes sociais por vagas em seu perfil. Acessa o site da Companhia de Estágios porque sabe que lá estão as melhores vagas do país, nas melhores e maiores empresas do mundo.",
              when_to_show: "before",
              show_condition: "none",
          }
      ],
      texto_main_ui: "Ao buscar vagas no site você:",
      answers: [
          {
              value: "1",
              content: "Lê e pesquisa os requisitos para ver se eles batem com o seu perfil antes de se aplicar."
          },
          {
              value: "2",
              content: "Se aplica em todas para ter mais chances."
          },
      ]
  },
  {
      tela: "3",
      cenario: "Cidade",
      relogio: "14 pm",
      dia_da_semana: "Segunda Feira",
      nivel_de_autoconfianca: "85%",
      texto_main_ui: "Depois de se aplicar em algumas vagas você foi chamado para uma entrevista. Você:",
      answers: [
          {
              value: "1",
              content: "Deixo para dar uma pesquisada sobre a empresa durante o trajeto de ida."
          },
          {
              value: "2",
              content: "Inicio imediatamente uma enorme pesquisa sobre a empresa. Adiciono as pessoas do Rh da empresa no LinkedIn."
          },
      ]
  },
  {
      tela: "4",
      cenario: "Metro",
      relogio: "09 am",
      dia_da_semana: "Terça-Feira",
      nivel_de_autoconfianca: "88%",
      texto_popup:
      [
          {
              titulo:"",
              content: "A situação se complicou e você chegou muito atrasado na entrevista e acabou perdendo a chance! Ficou feliz de ter ajudado mas agora o jeito é recomeçar as buscas."
              when_to_show: "after",
              show_condition: "1",
          },
          {
              titulo:"",
              content: "Quando você ia sair da estação viu uma chuva torrencial que fez a energia cair. Não teve jeito, acabou perdendo a entrevista. De volta a estaca zero."
              when_to_show: "after",
              show_condition: "2",
          },
      ],
      texto_main_ui: "Você está a caminho da entrevista, falta uma estação para você descer e a pessoa que está do seu lado começa a passar mal:",
      answers: [
          {
              value: "1",
              content: "Perco a estação, mesmo que me atrase 5 min. para a entrevista e ajudo a pessoa."
          },
          {
              value: "2",
              content: "Desço na estação porque não posso chegar atrasado e correr o risco de perder a entrevista."
          },
      ]
  },
  {
      tela: "5",
      cenario: "Cidade",
      relogio: "15 pm",
      dia_da_semana: "Quarta-Feira",
      nivel_de_autoconfianca: "70%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Só tinha essa data e você teve que correr o risco de se atrasar para o casamento, afinal não poderia perder mais essa chance!"
              when_to_show: "after",
              show_condition: "1",
          },
      ],
      texto_main_ui: "Good News! Ligaram marcando uma entrevista na sexta a tarde, você deu ok e ao desligar se lembrou que tem casamento na mesma sexta às 20 horas. Você:",
      answers: [
          {
              value: "1",
              content: "Tenta remarcar a entrevista."
          },
          {
              value: "2",
              content: "Vai na entrevista mesmo correndo o risco de se atrasar um pouco para o casamento."
          },
      ]
  },
  {
      tela: "6",
      cenario: "SalaCheia",
      relogio: "16 pm",
      dia_da_semana: "Sexta-Feira",
      nivel_de_autoconfianca: "90%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Parabéns! Apesar de muitos candidatos concorrendo a vaga você foi aprovado nessa primeira etapa. Algumas pessoas falaram que deu a impressão que, por causa da resposta anterior você foi aprovado e não tem nada a ver."
              when_to_show: "after",
              show_condition: "none",
          },
      ],
      texto_main_ui: "Ao chegar vê a sala de espera lotada de candidatos. Aí você:",
      answers: [
          {
              value: "1",
              content: "Começa a conversar com algum deles."
          },
          {
              value: "2",
              content: "Fica quieto só observando."
          },
      ]
  },
  {
      tela: "7",
      cenario: "Cidade",
      relogio: "10 pm",
      dia_da_semana: "Terça-Feira",
      nivel_de_autoconfianca: "100%",
      texto_main_ui: "Já é terça feira. Após ser aprovado na primeira etapa ontem, você está indo então para a etapa final e para não se atrasar pega um táxi. Entrando você...",
      answers: [
          {
              value: "1",
              content: "Puxa conversa com o motorista."
          },
          {
              value: "2",
              content: "Vai em silêncio."
          },
      ]
  },
  {
      tela: "7.1",
      cenario: "Cidade",
      relogio: "10 pm",
      dia_da_semana: "Terça-Feira",
      nivel_de_autoconfianca: "100%",
      texto_main_ui: "No elevador outro candidato que chegou em cima da hora comenta: ‘’putz, qual andar era mesmo o do processo de seleção?’’ Você:",
      answers: [
          {
              value: "1",
              content: "Fala o andar correto e que também está indo para lá."
          },
          {
              value: "2",
              content: "Fala o andar errado para ele aprender a prestar mais atenção."
          },
      ]
  },
  {
      tela: "8",
      cenario: "Escritorio03",
      relogio: "09 am",
      dia_da_semana: "Terça-Feira",
      nivel_de_autoconfianca: "88%",
      texto_main_ui: "Você passou pela primeira fase e já está na fase final! Agora é só você e mais dois finalistas! Vocês aguardando na sala de espera e um deles (o do elevador) pede ajuda para entender melhor sobre um dos negócios da empresa. Você:",
      answers: [
          {
              value: "1",
              content: "Ajuda e compartilha o que pesquisou sobre a empresa."
          },
          {
              value: "2",
              content: "Finge que não sabe de nada e desconversa."
          },
      ]
  },
  {
      tela: "9",
      cenario: "Cidade",
      relogio: "13 am",
      dia_da_semana: "Terça-Feira",
      nivel_de_autoconfianca: "95%",
      texto_main_ui: "Você fez uma ótima entrevista, volta para casa todo confiante. Ao chegar em casa você percebe que voltou com o crachá do prédio. Você:",
      answers: [
          {
              value: "1",
              content: "Joga fora porque não vai mais usar mesmo."
          },
          {
              value: "2",
              content: "Volta lá para devolver."
          },
      ]
  },
  {
      tela: "10",
      cenario: "GuardaRoupa",
      relogio: "09 am",
      dia_da_semana: "Quinta-Feira",
      nivel_de_autoconfianca: "88%",
      texto_main_ui: "Opa! Surgiu mais uma entrevista! Enquanto você espera o resultado da anterior aproveita para conhecer mais essa oportunidade. Bora para mais uma entrevista! Você:",
      answers: [
          {
              value: "1",
              content: "Uso um traje sport social para ficar bem apresentável e à vontade."
          },
          {
              value: "2",
              content: "Uso o clássico: camisa branca e calça preta."
          },
      ]
  },
  {
      tela: "11",
      cenario: "Escritorio04",
      relogio: "11 am",
      dia_da_semana: "Quinta-Feira",
      nivel_de_autoconfianca: "88%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Você volta para casa e fica torcendo pelo resultado da entrevista anterior."
              when_to_show: "after",
              show_condition: "1",
          },
          {
              titulo:"",
              content: "Você faz uma ótima entrevista mas a vaga infelizmente foi cancelada!"
              when_to_show: "after",
              show_condition: "2",
          },
      ],
      texto_main_ui: "Ao chegar você vê que a empresa tem paredes revestidas de madeira, sofá clássico, todo mundo parece que não fala, só sussurra, e todos usam traje social completo. Você:",
      answers: [
          {
              value: "1",
              content: "Agradece a oportunidade e vai embora. Seu perfil de empresa é outro."
          },
          {
              value: "2",
              content: "Fica motivado com aquele ambiente formal e até dá uma ajustada na gravata."
          },
      ]
  },
  {
      tela: "12",
      cenario: "Escritorio",
      relogio: "09 am",
      dia_da_semana: "Segunda-Feira",
      nivel_de_autoconfianca: "80%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Lembra a primeira entrevista? Que você foi para a fase final? Pois bem: Parabéns! Você foi aprovado! Seu feeling estava certo, você realmente fez uma ótima entrevista!."
              when_to_show: "before",
              show_condition: "none",
          },
      ],
      texto_main_ui: "Você começou a trabalhar e na sua primeira semana você:",
      answers: [
          {
              value: "1",
              content: "Socializa com toda galera."
          },
          {
              value: "2",
              content: "Foca em aprender tudo que pode e entregar o que te pediram."
          },
      ]
  },
  {
      tela: "12.1",
      cenario: "Escritorio",
      relogio: "09 am",
      dia_da_semana: "Segunda-Feira",
      nivel_de_autoconfianca: "80%",
      texto_main_ui: "Você está trabalhando e percebeu que ninguém meio que tem chefe na empresa. A gestão é horizontal. Cada um é responsável por entregar sua parte e trabalhar em equipe. Você:",
      answers: [
          {
              value: "1",
              content: "Se sente super à vontade e começa a fazer suas tarefas."
          },
          {
              value: "2",
              content: "Se vira mas preferiria ter um líder e regras e tarefas claras."
          },
      ]
  },
  {
      tela: "12.2",
      cenario: "Escritorio",
      relogio: "09 am",
      dia_da_semana: "Segunda-Feira",
      nivel_de_autoconfianca: "80%",
      texto_main_ui: "Você já está trabalhando há 1 semana e recebe uma tarefa do seu chefe para entregar em 1 semana. Você:",
      answers: [
          {
              value: "1",
              content: "Começo a fazer imediatamente."
          },
          {
              value: "2",
              content: "Me programo para fazer um planejamento de como executar a tarefa."
          },
      ]
  },
  {
      tela: "13",
      cenario: "Escritorio02",
      relogio: "18:05 pm",
      dia_da_semana: "Quinta-Feira",
      nivel_de_autoconfianca: "85%",
      texto_main_ui: "Você está trabalhando em uma tarefa e deu seu horário. Você:",
      answers: [
          {
              value: "1",
              content: "Vai embora e termina amanhã."
          },
          {
              value: "2",
              content: "Dou uma esticadinha e termino hoje mesmo."
          },
      ]
  },
  {
      tela: "13.1",
      cenario: "Escritorio02",
      relogio: "18:05 pm",
      dia_da_semana: "Quinta-Feira",
      nivel_de_autoconfianca: "85%",
      texto_popup:
      [
          {
              titulo:"",
              content: "Foram só 4 horinhas no sábado e valeram pontos extras que impressionaram seu chefe e equipe pelo seu comprometimento."
              when_to_show: "after",
              show_condition: "none",
          },
      ],
      texto_main_ui: "Você foi convocado para trabalhar no sábado sem hora extra. Sua reação:",
      answers: [
          {
              value: "1",
              content: "Pensa: ‘’essa empresa só esfola o funcionário mesmo’’ mas vai."
          },
          {
              value: "2",
              content: "Respira fundo e pensa: ‘’ok. É a primeira vez que isso acontece, vamos ajudar’’."
          },
      ]
  },
  {
      tela: "14",
      cenario: "Cidade",
      relogio: "08:00 am",
      dia_da_semana: "Sábado",
      nivel_de_autoconfianca: "100%",
      texto_popup:
      [
          {
              titulo:"",
              content: "PARABÉNS! VOCÊ RECEBEU SEU PRIMEIRO PAGAMENTO! PAGOU A FACULDADE, AJUDOU EM CASA E AINDA DEU PARA COMEÇAR O CURSO DE INGLÊS!."
              when_to_show: "before",
              show_condition: "none",
          },
      ],
      texto_main_ui: "",
      answers: [
          {
              value: "1",
              content: "Ir para o resumo"
          },
      ]
  },
  
];
 
export default quizData;