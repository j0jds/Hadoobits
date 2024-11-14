const tasks = [
  {
    id: 1,
    task: "assistir documentários educacionais",
    description:
      "Offer institution attack despite score low. Follow law century your in. Market charge tell.",
    difficulty: "Alta",
    type: "Educação",
  },
  {
    id: 2,
    task: "cozinhar algo novo",
    description:
      "Issue partner travel boy nor sister. Moment item citizen relate into behavior newspaper. Southern near character she list. Up newspaper staff agency. Man anything adult political direction account.",
    difficulty: "Baixa",
    type: "Culinária",
  },
  {
    id: 3,
    task: "fazer um projeto de ciência de dados",
    description:
      "Last evidence ahead listen statement. Answer couple price lead cold short sister. Sense gas buy every. Chair area west may reduce store.",
    difficulty: "Baixa",
    type: "Tecnologia",
  },
  {
    id: 4,
    task: "explorar a história da vida na Terra",
    description:
      "Include day mouth future reason onto yeah. Character develop knowledge part lead will. Especially me instead win star water ground why. Trouble guy from.",
    difficulty: "Baixa",
    type: "História",
  },
  {
    id: 5,
    task: "frequentar eventos comunitários",
    description:
      "Accept wear member kitchen four interesting international. Win reflect other then different. Rule four anyone goal recognize hundred. Begin save necessary six phone value fund reflect.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 6,
    task: "convidar amigos para um churrasco",
    description:
      "Thought her century generation amount current wall. Section doctor option minute figure. Theory father political crime best. Various free million live market require.",
    difficulty: "Alta",
    type: "Social",
  },
  {
    id: 7,
    task: "criar uma API",
    description:
      "Meet teach right brother current candidate above. Travel theory she writer image strategy. Else girl feeling young the third time. Hotel physical one enjoy this. Movie close rest land win stop.",
    difficulty: "Baixa",
    type: "Tecnologia",
  },
  {
    id: 8,
    task: "assistir a tutoriais de arte online",
    description:
      "Right her morning appear individual heavy crime. Since few budget green bag town during quickly.",
    difficulty: "Média",
    type: "Arte",
  },
  {
    id: 9,
    task: "explorar trilhas de mountain bike",
    description:
      "Spring various money last. Food decision detail lot. Visit former check pay inside. Despite themselves born daughter fact bring between. Feel usually admit but everybody lot.",
    difficulty: "Baixa",
    type: "Esportes",
  },
  {
    id: 10,
    task: "fazer compostagem",
    description:
      "Attention institution everyone nothing woman. Similar skill government serious edge suddenly. Blood south test military decision produce.",
    difficulty: "Baixa",
    type: "Sustentabilidade",
  },
  {
    id: 11,
    task: "fazer um vídeo criativo",
    description:
      "Play rock management structure can job. Hair dark more else third place current stage. Soon ever that. Card group industry stage country.",
    difficulty: "Média",
    type: "Criatividade",
  },
  {
    id: 12,
    task: "participar de uma prova de enduro equestre",
    description:
      "Management report travel trial believe soon gas. Half several health that. Address design wish listen suffer true. Rich class interview since simply.",
    difficulty: "Média",
    type: "Esportes",
  },
  {
    id: 13,
    task: "treinar força para escalada",
    description:
      "Thousand fly year history be bag share. Could same look between class southern kitchen. Age explain buy fast single. Word road health serve majority direction policy.",
    difficulty: "Média",
    type: "Esportes",
  },
  {
    id: 14,
    task: "fazer uma colheita de vegetais",
    description:
      "Medical box behind quality view. Need provide letter ask reduce majority subject. Society war challenge his. Create travel case sure. Yard poor technology magazine different phone.",
    difficulty: "Alta",
    type: "Sustentabilidade",
  },
  {
    id: 15,
    task: "praticar observação de estrelas",
    description:
      "Million recent investment other turn. Remain act still again become however me. Never support return grow smile. Production individual moment hand. Those risk character forget.",
    difficulty: "Média",
    type: "Astronomia",
  },
  {
    id: 16,
    task: "criar um mural em casa",
    description:
      "Important require city. Race perhaps deep north dinner. Conference into contain western challenge process act. Unit since thus old today program project. Ten deal attack affect.",
    difficulty: "Baixa",
    type: "Arte",
  },
  {
    id: 17,
    task: "praticar observação de estrelas",
    description:
      "Democratic media own fine. View throw author front reflect law partner charge. Require party statement arm opportunity.",
    difficulty: "Baixa",
    type: "Astronomia",
  },
  {
    id: 18,
    task: "organizar um piquenique",
    description:
      "Vote court kid your success other analysis stage. Value budget eat with all. Until free note your can receive station experience.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 19,
    task: "jogar jogos clássicos de arcade",
    description:
      "Real production hundred trial beautiful student call particularly. Old seat anyone operation industry. Eight heart bed fine ground dark attack. Approach message very goal for contain.",
    difficulty: "Média",
    type: "Entretenimento",
  },
  {
    id: 20,
    task: "treinar para uma corrida",
    description:
      "Know answer brother start black area. Model finish its its man table woman. Century figure around price describe possible type.",
    difficulty: "Baixa",
    type: "Esportes",
  },
  {
    id: 21,
    task: "experimentar pratos regionais",
    description:
      "Yard agree morning sign next over ask. Network trade billion much. Room such hair sister too. Speak political view follow. Represent break really this.",
    difficulty: "Média",
    type: "Culinária",
  },
  {
    id: 22,
    task: "assistir a documentários sobre agricultura",
    description:
      "Energy member television everything purpose. Raise it decade enjoy point. Rule medical on shoulder while.",
    difficulty: "Alta",
    type: "Educação",
  },
  {
    id: 23,
    task: "jogar futebol em uma quadra de grama sintética",
    description:
      "Population although how occur game body case. Decade method magazine open. Or his hour reality. Left knowledge themselves your. Matter care chance sense. Senior lead close society single close than.",
    difficulty: "Média",
    type: "Esportes",
  },
  {
    id: 24,
    task: "nadar com amigos",
    description:
      "Nothing stuff common. Environment yes high act together last. Unit wrong to trial kid artist. Where quality important too institution upon.",
    difficulty: "Baixa",
    type: "Social",
  },
  {
    id: 25,
    task: "explorar técnicas de natação para iniciantes",
    description:
      "Study responsibility arm fast least. Skill majority receive another draw return. Drop international around form minute. Blood plan same student.",
    difficulty: "Alta",
    type: "Esportes",
  },
  {
    id: 26,
    task: "treinar muay thai",
    description:
      "Laugh maintain machine fire imagine high pretty health. My mean power writer such. Avoid best several feel.",
    difficulty: "Média",
    type: "Esportes",
  },
  {
    id: 27,
    task: "fazer um desafio de 30 dias",
    description:
      "Beyond trial visit state top son. Allow community between help common us size. Likely commercial marriage instead these hour.",
    difficulty: "Média",
    type: "Desenvolvimento Pessoal",
  },
  {
    id: 28,
    task: "fazer uma trilha de acampamento",
    description:
      "Owner choose happen center. Method PM building. Thank because industry. North arrive officer door first discover.",
    difficulty: "Baixa",
    type: "Aventura",
  },
  {
    id: 29,
    task: "assistir a aulas sobre algoritmos",
    description:
      "Pay enough artist threat attack after behavior. Performance product above floor even resource view.",
    difficulty: "Alta",
    type: "Tecnologia",
  },
  {
    id: 30,
    task: "organizar uma sessão de ioga ao ar livre",
    description:
      "Best main laugh skin team. Mention option indeed hair during him. Middle start me evidence wonder. Necessary day school young floor get medical responsibility.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },

  {
    id: 31,
    task: "participar de uma maratona de filmes clássicos",
    description:
      "Selecionar filmes antigos de diferentes décadas e organizá-los para assistir em sequência.",
    difficulty: "Baixa",
    type: "Entretenimento",
  },
  {
    id: 32,
    task: "aprender noções básicas de finanças pessoais",
    description:
      "Entender orçamento, economia, investimentos e planejamento financeiro para um futuro mais seguro.",
    difficulty: "Média",
    type: "Educação",
  },
  {
    id: 33,
    task: "fazer um curso de primeiros socorros",
    description:
      "Aprender técnicas de emergência para ajudar em situações de perigo e saúde.",
    difficulty: "Alta",
    type: "Educação",
  },
  {
    id: 34,
    task: "experimentar fotografia de natureza",
    description:
      "Explorar áreas naturais para capturar fotos de paisagens, animais e plantas.",
    difficulty: "Média",
    type: "Arte",
  },
  {
    id: 35,
    task: "participar de uma aula de dança de salão",
    description:
      "Aprender passos de danças tradicionais como tango, salsa e bolero.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 36,
    task: "aprender o básico de programação em Python",
    description:
      "Estudar fundamentos de uma linguagem de programação popular e versátil.",
    difficulty: "Alta",
    type: "Tecnologia",
  },
  {
    id: 37,
    task: "fazer um piquenique sustentável",
    description:
      "Organizar um piquenique com produtos orgânicos e itens reutilizáveis.",
    difficulty: "Baixa",
    type: "Sustentabilidade",
  },
  {
    id: 38,
    task: "praticar jardinagem com plantas medicinais",
    description:
      "Cultivar ervas como hortelã, alecrim e camomila para usos naturais.",
    difficulty: "Média",
    type: "Sustentabilidade",
  },
  {
    id: 39,
    task: "explorar conceitos de mindfulness",
    description:
      "Aprender e praticar técnicas para aumentar a presença e reduzir o estresse.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 40,
    task: "criar uma playlist temática de músicas",
    description:
      "Selecionar músicas de acordo com um tema, como décadas, gêneros ou emoções.",
    difficulty: "Baixa",
    type: "Criatividade",
  },
  {
    id: 41,
    task: "fazer uma caminhada em montanhas locais",
    description:
      "Planejar uma trilha em áreas montanhosas para se conectar com a natureza.",
    difficulty: "Média",
    type: "Aventura",
  },
  {
    id: 42,
    task: "testar receitas de fermentação natural",
    description:
      "Preparar alimentos como pão, iogurte e kimchi usando fermentação natural.",
    difficulty: "Alta",
    type: "Culinária",
  },
  {
    id: 43,
    task: "realizar um detox digital por um dia",
    description: "Passar um dia inteiro sem utilizar dispositivos eletrônicos.",
    difficulty: "Média",
    type: "Bem-estar",
  },
  {
    id: 44,
    task: "ler sobre mitologia grega",
    description:
      "Estudar histórias e personagens da mitologia da Grécia Antiga.",
    difficulty: "Baixa",
    type: "História",
  },
  {
    id: 45,
    task: "aprender técnicas de cerâmica",
    description: "Praticar a criação de vasos e esculturas usando argila.",
    difficulty: "Alta",
    type: "Arte",
  },
  {
    id: 46,
    task: "organizar uma sessão de meditação coletiva",
    description:
      "Reunir amigos ou familiares para meditar juntos em um ambiente calmo.",
    difficulty: "Baixa",
    type: "Social",
  },
  {
    id: 47,
    task: "participar de uma aula de culinária online",
    description:
      "Aprender novas técnicas e pratos com instrutores profissionais via internet.",
    difficulty: "Média",
    type: "Culinária",
  },
  {
    id: 48,
    task: "explorar a astronomia local",
    description:
      "Observar estrelas, constelações e planetas visíveis em sua região.",
    difficulty: "Baixa",
    type: "Astronomia",
  },
  {
    id: 49,
    task: "escrever uma pequena história de ficção",
    description:
      "Criar um conto original com personagens e um enredo criativo.",
    difficulty: "Média",
    type: "Criatividade",
  },
  {
    id: 50,
    task: "fazer uma trilha de bike até uma cachoeira",
    description:
      "Explorar caminhos de bicicleta que levem até um ponto com cachoeira.",
    difficulty: "Alta",
    type: "Aventura",
  },
  {
    id: 51,
    task: "treinar técnicas de respiração",
    description:
      "Praticar exercícios de respiração para melhorar a saúde e reduzir o estresse.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 52,
    task: "experimentar receitas veganas",
    description:
      "Criar pratos sem ingredientes de origem animal para uma dieta mais saudável.",
    difficulty: "Média",
    type: "Culinária",
  },
  {
    id: 53,
    task: "fazer uma viagem de acampamento",
    description:
      "Planejar e acampar em uma área natural para relaxar e explorar.",
    difficulty: "Alta",
    type: "Aventura",
  },
  {
    id: 54,
    task: "participar de um clube do livro",
    description:
      "Discutir e compartilhar opiniões sobre livros com outras pessoas.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 55,
    task: "aprender noções básicas de jardinagem",
    description:
      "Plantar e cuidar de flores, ervas ou vegetais em casa ou no jardim.",
    difficulty: "Baixa",
    type: "Sustentabilidade",
  },
  {
    id: 56,
    task: "explorar destinos históricos locais",
    description:
      "Visitar museus, monumentos e locais históricos em sua cidade ou região.",
    difficulty: "Média",
    type: "História",
  },
  {
    id: 57,
    task: "organizar uma noite de jogos de tabuleiro",
    description:
      "Reunir amigos para uma noite divertida jogando diferentes jogos de tabuleiro.",
    difficulty: "Baixa",
    type: "Social",
  },
  {
    id: 58,
    task: "aprender técnicas de marcenaria",
    description:
      "Construir pequenos objetos ou móveis com madeira utilizando técnicas básicas.",
    difficulty: "Alta",
    type: "Arte",
  },
  {
    id: 59,
    task: "explorar trilhas de caminhada em florestas",
    description:
      "Caminhar por trilhas em áreas de mata para se conectar com a natureza.",
    difficulty: "Média",
    type: "Aventura",
  },
  {
    id: 60,
    task: "praticar ioga e alongamento ao ar livre",
    description:
      "Realizar exercícios de ioga e alongamento em um parque ou espaço aberto.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 61,
    task: "aprender caligrafia artística",
    description:
      "Estudar e praticar diferentes estilos de escrita para criar letras decorativas.",
    difficulty: "Média",
    type: "Arte",
  },
  {
    id: 62,
    task: "criar um jardim vertical com plantas pequenas",
    description:
      "Montar um jardim vertical para espaços reduzidos usando vasinhos e suportes.",
    difficulty: "Média",
    type: "Sustentabilidade",
  },
  {
    id: 63,
    task: "fazer uma trilha noturna para observar estrelas",
    description:
      "Explorar um lugar aberto durante a noite para observar as estrelas e constelações.",
    difficulty: "Alta",
    type: "Aventura",
  },
  {
    id: 64,
    task: "explorar uma cidade histórica próxima",
    description:
      "Visitar uma cidade com marcos históricos e aprender sobre seu patrimônio.",
    difficulty: "Média",
    type: "História",
  },
  {
    id: 65,
    task: "montar um quebra-cabeça de mais de 1000 peças",
    description:
      "Desafiar-se a completar um quebra-cabeça complexo e demorado.",
    difficulty: "Alta",
    type: "Entretenimento",
  },
  {
    id: 66,
    task: "fazer uma aula de desenho online",
    description:
      "Aprender técnicas básicas ou avançadas de desenho por meio de aulas virtuais.",
    difficulty: "Média",
    type: "Arte",
  },
  {
    id: 67,
    task: "assistir a documentários sobre o espaço",
    description:
      "Escolher documentários para aprender mais sobre o universo e a exploração espacial.",
    difficulty: "Baixa",
    type: "Educação",
  },
  {
    id: 68,
    task: "experimentar uma receita de fermentação lenta",
    description:
      "Preparar pães ou outros alimentos com fermentação prolongada para um sabor único.",
    difficulty: "Alta",
    type: "Culinária",
  },
  {
    id: 69,
    task: "participar de uma competição de jogos online",
    description:
      "Entrar em uma competição virtual para testar habilidades em jogos com outras pessoas.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 70,
    task: "praticar meditação guiada",
    description:
      "Seguir uma prática guiada para aumentar a concentração e o relaxamento.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 71,
    task: "explorar uma rota de ciclismo urbana",
    description:
      "Descobrir uma rota para bicicleta que passa por pontos interessantes da cidade.",
    difficulty: "Média",
    type: "Aventura",
  },
  {
    id: 72,
    task: "fazer um workshop de fotografia online",
    description:
      "Aprender a tirar fotos incríveis com orientação de um fotógrafo profissional.",
    difficulty: "Média",
    type: "Arte",
  },
  {
    id: 73,
    task: "aprender o básico sobre mecânica automotiva",
    description:
      "Entender conceitos como troca de óleo, calibragem e verificação de fluidos.",
    difficulty: "Média",
    type: "Educação",
  },
  {
    id: 74,
    task: "fazer um diário de gratidão por um mês",
    description:
      "Anotar diariamente três coisas pelas quais é grato para aumentar a positividade.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 75,
    task: "fazer uma sessão de cinema ao ar livre",
    description:
      "Organizar uma sessão de filmes em um jardim ou varanda com tela improvisada.",
    difficulty: "Média",
    type: "Entretenimento",
  },
  {
    id: 76,
    task: "praticar yoga com vídeos de tutoriais",
    description:
      "Seguir instruções online para aprender poses e técnicas de yoga.",
    difficulty: "Baixa",
    type: "Bem-estar",
  },
  {
    id: 77,
    task: "experimentar uma dieta saudável por uma semana",
    description:
      "Planejar e seguir um cardápio com alimentos nutritivos e balanceados.",
    difficulty: "Média",
    type: "Culinária",
  },
  {
    id: 78,
    task: "fazer uma oficina de escultura em argila",
    description: "Aprender a modelar argila e criar pequenas esculturas.",
    difficulty: "Alta",
    type: "Arte",
  },
  {
    id: 79,
    task: "explorar áreas rurais para fotografias",
    description:
      "Capturar a beleza de áreas campestres e rurais com uma câmera ou celular.",
    difficulty: "Média",
    type: "Aventura",
  },
  {
    id: 80,
    task: "ler um livro de ficção científica",
    description:
      "Selecionar um livro para explorar o mundo da ciência e ficção futurista.",
    difficulty: "Baixa",
    type: "Entretenimento",
  },
  {
    id: 81,
    task: "participar de uma corrida ou caminhada beneficente",
    description: "Inscrever-se em uma corrida que apoia uma causa social.",
    difficulty: "Média",
    type: "Social",
  },
  {
    id: 82,
    task: "aprender sobre economia circular",
    description:
      "Estudar como a economia circular pode beneficiar o meio ambiente.",
    difficulty: "Média",
    type: "Sustentabilidade",
  },
  {
    id: 83,
    task: "explorar os princípios da arquitetura",
    description:
      "Estudar fundamentos de arquitetura e observar construções locais.",
    difficulty: "Média",
    type: "Educação",
  },
  {
    id: 84,
    task: "organizar um evento de limpeza ambiental",
    description: "Reunir amigos para limpar uma praia, parque ou área pública.",
    difficulty: "Alta",
    type: "Sustentabilidade",
  },
  {
    id: 85,
    task: "planejar uma mini-horta caseira",
    description: "Cultivar ervas e temperos em vasos ou pequenos canteiros.",
    difficulty: "Baixa",
    type: "Sustentabilidade",
  },
  {
    id: 86,
    task: "fazer uma tour virtual por museus",
    description: "Explorar exposições de museus ao redor do mundo online.",
    difficulty: "Baixa",
    type: "Entretenimento",
  },
  {
    id: 87,
    task: "escrever uma história curta de suspense",
    description:
      "Criar uma narrativa envolvente e misteriosa para praticar a escrita.",
    difficulty: "Média",
    type: "Criatividade",
  },
  {
    id: 88,
    task: "participar de um projeto voluntário local",
    description:
      "Oferecer ajuda para causas como educação, meio ambiente ou saúde.",
    difficulty: "Alta",
    type: "Social",
  },
  {
    id: 89,
    task: "fazer um curso de reciclagem e compostagem",
    description: "Aprender práticas sustentáveis para o lixo doméstico.",
    difficulty: "Média",
    type: "Sustentabilidade",
  },
  {
    id: 90,
    task: "aprender sobre a vida marinha local",
    description:
      "Estudar a fauna marinha da região e visitar aquários ou praias.",
    difficulty: "Média",
    type: "Educação",
  },
  {
    id: 91,
    task: "organizar uma troca de livros com amigos",
    description: "Reunir pessoas para compartilhar e trocar livros lidos.",
    difficulty: "Baixa",
    type: "Social",
  },
  {
    id: 92,
    task: "explorar a prática de Tai Chi",
    description: "Aprender os movimentos suaves e meditativos do Tai Chi.",
    difficulty: "Média",
    type: "Bem-estar",
  },
  {
    id: 93,
    task: "construir uma peça de mobiliário DIY",
    description:
      "Usar madeira ou materiais reciclados para criar um móvel funcional.",
    difficulty: "Alta",
    type: "Arte",
  },
];
export default tasks;
